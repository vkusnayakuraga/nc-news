const CommentCard = (comment) => {
  const date = new Date(comment.created_at);
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return (
    <li className="CommentCard">
      <section className="CommentCard__head">
        <p className="CommentCard__author">@{comment.author}</p>
        <time dateTime={date.toString()} className="CommentCard__created_at">
          {date.toLocaleString("en-GB", dateOptions)}
        </time>
      </section>
      <p className="CommentCard__body long-strings-breaker">{comment.body}</p>
    </li>
  );
};

export default CommentCard;
