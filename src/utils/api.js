import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-91z3.onrender.com/api",
});

export const getArticles = (topic_slug, sort_by, order) => {
  return newsApi
    .get("/articles", {
      params: { topic: topic_slug, sort_by: sort_by, order: order },
    })
    .then((res) => {
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

export const postCommentByArticleId = (article_id, username, newComment) => {
  const postBody = {
    username: username,
    body: newComment,
  };
  return newsApi
    .post(`/articles/${article_id}/comments`, postBody)
    .then((res) => {
      return res.data.comment;
    });
};

export const deleteCommentByCommentId = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};

export const updateVotesByArticleId = (article_id, inc_votes) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes });
};
