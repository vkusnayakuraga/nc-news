const ArticleCard = ({ title, author, created_at, topic }) => {
  return (
    <li className="ArticleCard">
      <h3 className="ArticleCard__title">{title}</h3>
      <p className="ArticleCard__author">@{author}</p>
      <p className="ArticleCard__created_at">{created_at.substr(0, 10)}</p>
      <p className="ArticleCard__topic">#{topic}</p>
    </li>
  );
};

export default ArticleCard;
