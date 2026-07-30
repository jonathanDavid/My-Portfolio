/** One line of what makes each department beautiful — shown when it's
 *  clicked on the footer map. `home`/`current` mark the personal ones. */
export interface DeptNote {
  beauty: string;
  personal?: 'home' | 'current';
}

export const CO_NOTES: Record<string, DeptNote> = {
  'la-guajira': {
    personal: 'home',
    beauty:
      'Desert dunes meeting the Caribbean — flamingos over the Los Flamencos sanctuary at Camarones, and the lighthouse cliffs of Cabo de la Vela.',
  },
  atlantico: {
    personal: 'current',
    beauty:
      "Barranquilla's Carnaval — UNESCO world heritage — and the Magdalena river pouring into the sea at Bocas de Ceniza.",
  },
  amazonas: { beauty: 'The rainforest itself — pink river dolphins and the jungle port of Leticia.' },
  antioquia: { beauty: "Medellín's eternal spring, Guatapé's painted streets and the Peñol monolith." },
  arauca: { beauty: 'Llanero cowboy country — sunrise cattle drives across endless savanna.' },
  'bogota-d-c': { beauty: 'A 2,600 m capital — the Gold Museum and Monserrate above the clouds.' },
  bolivar: { beauty: "Cartagena's walled city and the coral sea of the Rosario Islands." },
  boyaca: { beauty: 'Emerald-green highlands and the colonial plaza of Villa de Leyva.' },
  caldas: { beauty: 'Coffee farms climbing the flanks of the Nevado del Ruiz volcano.' },
  caqueta: { beauty: 'Where the Andes tumble into Amazonia — mist, canyons and waterfalls.' },
  casanare: { beauty: 'Flooded savannas crowded with capybaras, caimans and scarlet ibis.' },
  cauca: { beauty: 'Popayán, the White City, with the ancient stone tombs of Tierradentro nearby.' },
  cesar: { beauty: 'The birthplace of vallenato — accordions and legends under the Sierra.' },
  choco: { beauty: 'Humpback whales breaching off Nuquí; jungle rivers reaching two oceans.' },
  cordoba: { beauty: 'The Sinú river culture and the weavers of the sombrero vueltiao.' },
  cundinamarca: { beauty: 'The Salt Cathedral of Zipaquirá, glowing 180 m underground.' },
  guainia: { beauty: 'Cerros de Mavecure — three granite giants rising from black-water rivers.' },
  guaviare: { beauty: 'Ancient rock paintings at Cerro Azul and rivers that change color.' },
  huila: { beauty: "The Tatacoa desert's star fields and the stone gods of San Agustín." },
  magdalena: { beauty: "Tayrona's beaches beneath the world's highest coastal mountain range." },
  meta: { beauty: 'Caño Cristales — the river of five colors.' },
  narino: { beauty: 'Las Lajas sanctuary, a neo-gothic church spanning a river gorge.' },
  'norte-de-santander': { beauty: 'Los Estoraques — a valley of wind-carved stone towers.' },
  putumayo: { beauty: 'The Fin del Mundo waterfalls, where the Andes end in jungle.' },
  quindio: { beauty: "The Cocora valley's 60-metre wax palms — the heart of coffee country." },
  risaralda: { beauty: 'UNESCO Coffee Cultural Landscape and the hot springs of Santa Rosa.' },
  'san-andres-y-providencia': { beauty: 'The sea of seven colors around the archipelago reef.' },
  santander: { beauty: 'The Chicamocha canyon and Barichara, Colombia’s prettiest colonial town.' },
  sucre: { beauty: 'The calm Gulf of Morrosquillo and mangrove tunnels of La Caimanera.' },
  tolima: { beauty: 'The snowy cone of the Nevado del Tolima rising above rice fields.' },
  'valle-del-cauca': { beauty: 'Cali — world capital of salsa — amid seas of sugarcane.' },
  vaupes: { beauty: 'Deep indigenous Amazonia and the thundering Jirijirimo rapids.' },
  vichada: { beauty: "El Tuparro's rapids — Humboldt called them the eighth wonder of the world." },
};
