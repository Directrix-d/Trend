import axios from "axios";
import { envior } from "./constant";

export const makeRequest = axios.create({
    baseURL: envior.REACT_APP_API ,
    headers:{
        Authorization : "bearer " + envior.REACT_APP_API_TOKEN,

       },

})