import { getApiURL } from "@/utils/environment";
import axios from "axios";

const token = localStorage.getItem('token');

export const api = axios.create({
  baseURL: getApiURL(),
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});