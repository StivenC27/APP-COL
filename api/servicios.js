import axios from "axios";
const API_URL = 'https://api-colombia.com/api/v1'

//get info-COL
export const getColInfo = async () => {
    const response = await axios.get(`${API_URL}/Country/Colombia`);
    return response.data;
}

//get info Regiones-COL
export const getRegionesCol = async () => {
    const response = await axios.get(`${API_URL}/Region`);
    return response.data;
}

//get infoRegCOL
export const getRegCOL = async id => {
    const response = await axios.get(`${API_URL}/Region/${id}`)
    return response.data;
}

//get infoDeptCOL
export const getDeptCol = async () => {
    const response = await axios.get(`${API_URL}/Department`);
    return response.data;
}

//get InfoCityCOL
export const getCityCol = async () => {
    const response = await axios.get(`${API_URL}/City`)
    return response.data;
}