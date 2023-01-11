import { Link } from "react-router-dom";

const ArticleCard = ({ article_id, title, author, created_at, topic }) => {
  return (
    <li className="ArticleCard">
      <Link to={`/articles/${article_id}`} className="ArticleCard__link">
        <h3 className="ArticleCard__title">{title}</h3>
        <p className="ArticleCard__author">@{author}</p>
        <p className="ArticleCard__created_at">{created_at.substr(0, 10)}</p>
        <p className="ArticleCard__topic">#{topic}</p>
      </Link>
    </li>
  );
};

export default ArticleCard;
