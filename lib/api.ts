import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";

const strapi: AxiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_STRAPI_URL_PROD ||
    "https://promising-compassion-0fae3cab90.strapiapp.com/api/",
});

strapi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN_PROD;
  if (token) {
    if (!config.headers) {
      config.headers = {} as AxiosRequestHeaders;
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

interface Filters {
  [key: string]: string | number | string[] | number[];
}

export const fetchContent = async (
  contentType: string,
  filters: Filters = {},
  page: number = 1,
  pageSize: number = 10
) => {
  const params = new URLSearchParams();

  Object.keys(filters).forEach((key) => {
    if (Array.isArray(filters[key])) {
      (filters[key] as (string | number)[]).forEach((value) =>
        params.append(`${key}[]`, value.toString())
      );
    } else {
      params.append(key, filters[key].toString());
    }
  });

  params.append("pagination[page]", page.toString());
  params.append("pagination[pageSize]", pageSize.toString());

  const response = await strapi.get(`/${contentType}`, { params });
  return response.data;
};

export default strapi;
