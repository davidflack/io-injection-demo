import { AxiosResponse } from "axios";

import * as swapi from "../swapi";
import { getSpeciesNoInjection } from "./noInjection";

import { SWAPISpeciesFixture } from "../__fixtures__/SWAPISpeciesFixture";

jest.mock("../swapi");

beforeEach(() => jest.clearAllMocks());

describe("getSpeciesNoInjection", () => {
  it("processes a swapi species request", async () => {
    const mockGetSpecies = jest
      .spyOn(swapi, "getSpeciesFromApi")
      .mockResolvedValue({ data: [SWAPISpeciesFixture] } as AxiosResponse);

    const res = await getSpeciesNoInjection();

    expect(mockGetSpecies).toBeCalledTimes(1);
    expect(res).toEqual([
      {
        name: "foo-species",
        homeworld: "foo-homeworld",
        numFilms: 2,
      },
    ]);
  });

  it("throws the correct error message when the call to SWAPI fails", async () => {
    jest.spyOn(swapi, "getSpeciesFromApi").mockRejectedValue("Uh-oh, error!");

    await expect(getSpeciesNoInjection()).rejects.toThrow(
      "An error occurred fetching species from the Star Wars API."
    );
  });
});
