import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return (
      <main>
        <p className="Loading">Loading...</p>
      </main>
    );
  }

  return (
    <main>
      <h2>{article.title}</h2>
      <p>{article.created_at.substring(0, 10)}</p>
      <p>{article.author}</p>
      <p>{article.body}</p>
    </main>
  );
};

export default SingleArticle;
