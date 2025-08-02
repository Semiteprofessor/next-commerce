import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

// Get token from cookies
function getToken(): string {
  const cname = "token";
  if (typeof window !== "undefined") {
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.startsWith(`${cname}=`)) {
        return c.substring(cname.length + 1);
      }
    }
  }
  return "";
}

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:8899/api";

const http: AxiosInstance = axios.create({
  baseURL,
  timeout: 30000,
});

http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();

    config.headers = config.headers ?? {};
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default http;
