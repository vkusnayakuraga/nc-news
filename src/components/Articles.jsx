import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useParams, useSearchParams } from "react-router-dom";
import Sorting from "./Sorting";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const { topic_slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic_slug, sortByQuery, orderQuery).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic_slug, sortByQuery, orderQuery]);

  if (isLoading) {
    return (
      <main>
        <p className="Loading">Loading...</p>
      </main>
    );
  }

  return (
    <main className="Articles">
      <Sorting
        sortByQuery={sortByQuery}
        orderQuery={orderQuery}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
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
