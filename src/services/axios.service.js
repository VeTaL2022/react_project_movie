import axios from "axios";

import {baseURL} from "../configs";

export const axiosService = axios.create({baseURL});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTkwMTNkMTdmNWE2YmIwYTJhMTMxZmQzNzc2YzBiNCIsInN1YiI6IjYzNGU1MGMyODFh' +
    'N2ZjMDA3OWZkODQ3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WWHkJ-1OuISXL1hdS57Zj6B6HDUjZN3s9_WOk05kZuc';

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});