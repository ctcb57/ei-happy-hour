import Axios from 'axios';

const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === "[::1]" ||
      // 127.0.0.0/8 are considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/"

Axios.interceptors.request.use(
    (config) => {
        config.baseURL = baseUrl;
        if (localStorage.hasOwnProperty('token')) {
            config.headers.Authorization = localStorage.getItem('token')
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/";
        }
        if (error.response.status === 400) {
            localStorage.removeItem("token");
            window.location.href = "/";
        }
        if (error.response.status === 403){
            window.location.href = "/403"
        }
        return Promise.reject(error);
    }
)