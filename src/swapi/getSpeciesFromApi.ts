import { swapiHttpClient } from "./swapiHttpClient";

import { SWAPISpecies } from "../types";

export const getSpeciesFromApi = () =>
  swapiHttpClient.get<SWAPISpecies[]>("/species");
