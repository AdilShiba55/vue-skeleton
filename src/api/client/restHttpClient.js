import axios from "axios";

const restHttpClient = axios.create({
    baseURL: 'http://localhost:8080/api/v1'
})

restHttpClient.interceptors.request.use(
    config => {
        console.log('config', config)
        return config;
    }
);

export default restHttpClient;
