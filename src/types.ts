export interface SWAPISpecies {
  name: string;
  homeworld: string;
  films: string[];
}

export type TransformedSpecies = {
  name: string;
  homeworld: string;
  numFilms: number;
};
