import { getSpeciesFromApi } from "../swapi";
import { transformSWAPISpeciesResponse } from "../transformers";

export const getSpeciesInjection = async (getSpecies = getSpeciesFromApi) => {
  try {
    const swapiResponse = await getSpecies();

    return transformSWAPISpeciesResponse(swapiResponse);
  } catch {
    throw new Error(
      "An error occurred fetching species from the Star Wars API."
    );
  }
};
