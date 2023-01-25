import { getSpeciesFromApi } from "../swapi";
import { transformSWAPISpeciesResponse } from "../transformers";

export const getSpeciesNoInjection = async () => {
  try {
    const swapiResponse = await getSpeciesFromApi();

    return transformSWAPISpeciesResponse(swapiResponse);
  } catch (e) {
    console.error(e);
    throw new Error(
      "An error occurred fetching species from the Star Wars API."
    );
  }
};
