import { getApiURL } from "@/utils/environment";
import axios from "axios";

export const api = axios.create({
    baseURL: getApiURL(),
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});