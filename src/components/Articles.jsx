import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const { topic_slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic_slug).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic_slug]);
 
  if (isLoading) {
    return (
      <main>
        <p className="Loading">Loading...</p>
      </main>
    );
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
