import axios from "axios";

const timeStamp = "1598978646";
const apiKey = "f4708d23f3840536d3456740ea5f32f8";
const md5 = "328f2bd03eabe603b02ae1085b748ba1";

const api = axios.create({
  baseURL:
    `https://gateway.marvel.com:443/v1/public/comics?title=Spider-man&apikey=f4708d23f3840536d3456740ea5f32f8`,
});

export default api;
