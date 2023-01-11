import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";

const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const date = new Date(article.created_at);
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };

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
      <header>
        <section>
          <time dateTime={date.toString()}>
            {date.toLocaleDateString("en-GB", dateOptions)}
          </time>
          <span> / </span>
          <span>#{article.topic}</span>
        </section>
        <h2>{article.title}</h2>
      </header>
      {/* <h2>{article.title}</h2> */}
      {/* <p>{article.created_at.substring(0, 10)}</p> */}
      <p>@{article.author}</p>
      <p>{article.body}</p>
    </main>
  );
};

export default SingleArticle;
