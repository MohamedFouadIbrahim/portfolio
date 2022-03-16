import axios from 'axios';

// Create axios client, pre-configured with baseURL

const isDevelopmentMode = false
export const BASEURL = `${isDevelopmentMode ? "http://localhost:8000" : "https://mohamedfouad.herokuapp.com"}`
const APIKit = axios.create({
	baseURL: `${BASEURL}/public/api/`,
	timeout: 15000
});


export default APIKit;