import { AxiosResponse } from "axios";
import { SWAPISpecies } from "../types";
import {
  transformSWAPISpecies,
  transformSWAPISpeciesResponse,
} from "./transformSWAPISpeciesResponse";
import { SWAPISpeciesFixture } from "../__fixtures__/SWAPISpeciesFixture";

describe("transformSWAPISpecies", () => {
  it("transforms a `SWAPISpecies` to a `TransformedSpecies`", () => {
    expect(transformSWAPISpecies(SWAPISpeciesFixture)).toEqual({
      name: "foo-species",
      homeworld: "foo-homeworld",
      numFilms: 2,
    });
  });
});

describe("transformSWAPISpeciesResponse", () => {
  it("transforms a SWAPI species response to a `TransformedSpecies`", () => {
    const swapiResponse = {
      data: [SWAPISpeciesFixture],
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
