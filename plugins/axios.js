import axios from "axios";
import { useAuthStore } from "@/stores/auth.js";
import { useCookie, useI18n, useRouter } from "#imports";

axios.defaults.baseURL = import.meta.env.VITE_API_APIEndPoint;

axios.interceptors.request.use(
  (config) => {
    if (!config.headers) config.headers = {};
    config.headers["lang"] = useCookie("preferred-language").value || "ar";
    return config;
  },
  (error) => Promise.reject(error)
);

let originalRequest = {};
originalRequest._retry = false;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      if (originalRequest._retry) return Promise.reject(error);
      originalRequest._retry = true;
      console.error(error);
      return;
    }
    return Promise.reject(error);
  }
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide("axios", axios);
});
