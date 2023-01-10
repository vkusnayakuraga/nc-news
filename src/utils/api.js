import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-91z3.onrender.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data;
  });
};
