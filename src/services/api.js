import axios from 'axios';

// https://api.hgbrasil.com/weather?key=db99e938&lat=-23.682&lon=-46.875

export const key = 'db99e938';

const api = axios.create({
    baseURL: "https://api.hgbrasil.com"
});

export default api;