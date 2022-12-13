import Axios from "axios";
import { cookies } from "next/headers"

const url = "https://api.unsplash.com";
// const token_jwt = cookies().get('token') || null

const headers = {
    'Accept': 'application/json', 
    'Content-Type': 'application/json',
    'authorization': 'Client-ID CWq0e5vnP0RzlpelKUiL4aaKPD4KU5tfW8QqoGbVX9Y'
};

const headersData = {
    'Accept': 'application/json', 
    'Content-Type': 'application/json',
    'authorization': 'Bearer STKfp6ioogPzFYGf8v9OazQW9Z3FuF3Gcdmw19NS480'
};

// if (token_jwt) {
//     headers["authorization"] = `Bearer ${token_jwt}`;
// }

const api = Axios.create({
    baseURL: url,
    headers: headers
});

export const apiData = Axios.create({
    baseURL: url,
    headers: headersData
});

export default api;
