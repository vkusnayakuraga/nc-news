import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-91z3.onrender.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const updateVotesByArticleId = (article_id, inc_votes) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes });
};
