import axios from "axios";

const apiURLs = {
  development: "http://localhost:1337/api",
  production: "",
};

const api = axios.create({
  baseURL: apiURLs[process.env.NODE_ENV],
});

api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer 366839cb79862061a4c238bb8fd913a6ee8b4176e353276359366adfbe7e23d23cf145116620cd26b125d6a7f36d20c5fc808162460c45c7ce60b37490cf174876d3f8634bb77d645bfd9fce2b46258fbec30ad65e6a64051377d8c775246673c1b3b57a5c0235501e0feb98e2e673d970fce01c33c908e38f7198530795b897`,
  };

  return config;
});

export { api };
