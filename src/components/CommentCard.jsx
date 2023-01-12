const CommentCard = (comment) => {
  return (
    <li className="CommentCard">
      <p className="CommentCard__author">@{comment.author}</p>
      <p className="CommentCard__body">{comment.body}</p>
    </li>
  );
};

export default CommentCard;
