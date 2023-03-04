import axios from "axios"

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
})

instance.interceptors.request.use(function (config) {
    const token = window.location.getItem('persist:auth')
    console.log(token)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default instance