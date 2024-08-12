import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosHeaders,
} from "axios";

const strapi: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL_PROD,
  timeout: 10000,
});

strapi.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN_PROD;
    if (token) {
      config.headers = new AxiosHeaders(config.headers || {});
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

interface Filters {
  [key: string]: string | number | string[] | number[];
}

export const fetchContent = async (
  contentType: string,
  filters: Filters = {},
  page: number = 1,
  pageSize: number = 10,
  populate: string[] = []
) => {
  try {
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

    if (populate.length > 0) {
      params.append("populate", populate.join(","));
    }

    const response = await strapi.get(`/${contentType}`, { params });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${contentType}:`, error);
    throw error;
  }
};

export const fetchPlanById = async (id: string) => {
  try {
    const params = new URLSearchParams({
      populate:
        "bannerImage,galleryImages,finishTypes,propertyType,displayImage",
    });

    const response = await strapi.get(`/plans/${id}`, { params });
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching plan by ID:`, error);
    throw error;
  }
};

export default strapi;
