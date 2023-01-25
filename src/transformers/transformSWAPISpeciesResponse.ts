import { AxiosResponse } from "axios";
import { flow } from "lodash";
import { map as mapFP } from "lodash/fp";

import { SWAPISpecies, TransformedSpecies } from "../types";
import { transformAxiosResponse } from "./transformAxiosResponse";

export const transformSWAPISpecies = ({
  name,
  homeworld,
  films,
}: SWAPISpecies): TransformedSpecies => ({
  name,
  homeworld,
  numFilms: films?.length || 0,
});

interface TransformSWAPISpeciesResponse {
  (response: AxiosResponse<SWAPISpecies[]>): TransformedSpecies[];
}

export const transformSWAPISpeciesResponse: TransformSWAPISpeciesResponse =
  flow(transformAxiosResponse, mapFP(transformSWAPISpecies));
