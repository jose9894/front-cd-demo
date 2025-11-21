import axios from "axios";
import { requestInceptor, responseInceptor } from "./apiService";

const BASEURL = "https://cloud9bet.dk"; // Replace with your real endpoint
// const BASEURL = "https://localhost:7203/";

export const Api = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

requestInceptor(Api);
responseInceptor(Api);