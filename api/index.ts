import axios from "axios";

let token = null;

if (typeof localStorage !== "undefined") {
  token = localStorage.getItem("token");
}

const isDevelopment = process.env.NEXT_PUBLIC_ENV === "development";
const baseURL = isDevelopment
  ? process.env.NEXT_PUBLIC_API_DEV
  : process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
