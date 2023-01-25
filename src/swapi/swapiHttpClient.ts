import axios from "axios";

export const swapiHttpClient = axios.create({
  baseURL: "https://swapi.dev/api",
});
