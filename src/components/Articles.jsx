import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="Loading">Loading...</p>
  }

  return (
    <main className="Articles">
      <h2>Articles</h2>
      <ul className="Articles__list">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} {...article} />
        ))}
      </ul>
    </main>
  );
};

export default Articles;
