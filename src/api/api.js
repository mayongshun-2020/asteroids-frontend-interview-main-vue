import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://asteroids.dev.mediasia.cn", // 设置请求的基础 URL
  timeout: 5000,
});

export const fetchData = (url, params) => {
  return apiInstance
    .get(url, { params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};

export const fetchPlanetById = (id) => {
  const url = `/planets/${id}`; // 根据id构建请求的URL
  return apiInstance
    .get(url)
    .then((response) => {
      return response.data.name;
    })
    .catch((error) => {
      console.error("Error fetching asteroid name:", error);
      throw error;
    });
};
