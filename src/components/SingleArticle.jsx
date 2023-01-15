import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api";
import Comments from "./Comments";
import Votes from "./Votes";

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
    <main className="SingleArticle outer">
      <header className="SingleArticle__header">
        <h2 className="SingleArticle__title">{article.title}</h2>
        <section className="SingleArticle__header__data">
          <time dateTime={date.toString()} className="date">
            {date.toLocaleDateString("en-GB", dateOptions)}
          </time>
          <span className="date-divider">/</span>
          <span className="topic-tag">#{article.topic}</span>
        </section>
      </header>
      <p className="SingleArticle__author">@{article.author}</p>
      <p className="SingleArticle__body">{article.body}</p>
      <Votes {...article} />
      <Comments
        article_id={article.article_id}
        comment_count={article.comment_count}
      />
    </main>
  );
};

export default SingleArticle;
