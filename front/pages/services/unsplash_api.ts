import Axios from "axios";
// import Cookies from "js-cookie";

export const url = "https://api.unsplash.com";
// let token_jwt = Cookies.get('token') || null;

export const headers = {
    'Accept': 'application/json', 
    'Content-Type': 'application/json',
    'authorization': 'Client-ID Tx-KbpHJ4IsJjp6qgMnsN9zYoJOygQOTtw9aDdcmHdE'
};

// if (token_jwt) {
//     headers["authorization"] = `Bearer ${token_jwt}`;
//     headersData["authorization"] = `Bearer ${token_jwt}`;
// }

const api = Axios.create({
    baseURL: url,
    headers: headers
});

export default api;
