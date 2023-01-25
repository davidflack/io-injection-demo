import { SWAPISpeciesFixture } from "../__fixtures__/SWAPISpeciesFixture";
import { getSpeciesInjection } from "./injection";

describe("getSpeciesInjection", () => {
  it("processes a swapi species request", async () => {
    const mockGetSpeciesFromAPI = jest
      .fn()
      .mockResolvedValue({ data: [SWAPISpeciesFixture] });

    const res = await getSpeciesInjection(mockGetSpeciesFromAPI);

    expect(mockGetSpeciesFromAPI).toBeCalledTimes(1);
    expect(res).toEqual([
      {
        name: "foo-species",
        homeworld: "foo-homeworld",
        numFilms: 2,
      },
    ]);
  });
  it("throws the correct error message when the call to SWAPI fails", async () => {
    const mockGetSpeciesFromAPIError = jest
      .fn()
      .mockRejectedValue("Uh-oh, error!");
    await expect(
      getSpeciesInjection(mockGetSpeciesFromAPIError)
    ).rejects.toThrow(
      "An error occurred fetching species from the Star Wars API."
    );
  });
});
