import axios from 'axios';

const BASE_URL_API = 'http://192.168.1.19:8000';

export const loginAPI = async (reqData) => {
    return await axios.post(`${BASE_URL_API}/api/login/`, reqData);
};
