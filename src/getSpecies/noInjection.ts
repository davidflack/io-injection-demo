import { getSpeciesFromApi } from "../swapi";

export const getSpeciesNoInjection = async () => {
  try {
    const swapiResponse = await getSpeciesFromApi();
  } catch {
    throw new Error(
      "An error occurred fetching species from the Star Wars API."
    );
  }
};
