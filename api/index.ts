import { getApiURL } from "@/api/environment";
import axios from "axios";

let token = null;

if (typeof localStorage !== 'undefined') {
  token = localStorage.getItem('token');
}

export const api = axios.create({
  baseURL: getApiURL(),
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});