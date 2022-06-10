import axios from "axios";

export const apiUrl = "http://localhost:3001/";

export const mainApi = axios.create({
  baseURL: apiUrl,
});
