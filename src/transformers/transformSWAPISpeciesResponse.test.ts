import { AxiosResponse } from "axios";
import { SWAPISpecies } from "../types";
import {
  transformSWAPISpecies,
  transformSWAPISpeciesResponse,
} from "./transformSWAPISpeciesResponse";

describe("transformSWAPISpecies", () => {
  it("transforms a `SWAPISpecies` to a `TransformedSpecies`", () => {
    const swapiSpecies: SWAPISpecies = {
      name: "foo-species",
      homeworld: "foo-homeworld",
      films: ["the-foontom-menace", "a-new-foo"],
    };
    expect(transformSWAPISpecies(swapiSpecies)).toEqual({
      name: "foo-species",
      homeworld: "foo-homeworld",
      numFilms: 2,
    });
  });
});

describe("transformSWAPISpeciesResponse", () => {
  it("transforms a SWAPI species response to a `TransformedSpecies`", () => {
    const swapiResponse = {
      data: [
        {
          name: "foo-species",
          homeworld: "foo-homeworld",
          films: ["the-foontom-menace", "a-new-foo"],
        },
      ],
    } as AxiosResponse<SWAPISpecies[]>;

    expect(transformSWAPISpeciesResponse(swapiResponse)).toEqual([
      {
        name: "foo-species",
        homeworld: "foo-homeworld",
        numFilms: 2,
      },
    ]);
  });
});
