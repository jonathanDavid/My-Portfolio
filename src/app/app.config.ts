import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withNavigationErrorHandler,
  withRouterConfig,
} from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
      // Every deploy renames the hashed lazy-route chunks. A tab still holding
      // the previous build then fails the dynamic import on its next
      // navigation, and the router swallows it — links appear dead until a
      // hard refresh. Recover with a full page load of the target URL, which
      // fetches the fresh build and completes the navigation.
      withNavigationErrorHandler((event) => {
        const message = String((event.error as Error | undefined)?.message ?? event.error ?? '');
        if (
          typeof window !== 'undefined' &&
          /dynamically imported module|module script failed|ChunkLoadError/i.test(message)
        ) {
          window.location.assign(new URL(event.url.replace(/^\//, ''), document.baseURI).href);
        }
      }),
    ),
    provideClientHydration(withEventReplay()),
  ],
};
