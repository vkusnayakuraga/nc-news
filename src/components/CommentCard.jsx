import DeleteBin from "../assets/delete-forever.svg";

const CommentCard = ({
  comment,
  loggedInUser,
  handleDeleteComment,
  isDeleting,
}) => {
  const date = new Date(comment.created_at);
  const dateOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const handleDelete = () => {
    handleDeleteComment(comment.comment_id);
  };

  return (
    <li className="CommentCard">
      <section className="CommentCard__head">
        <p className="CommentCard__author">@{comment.author}</p>
        <time dateTime={date.toString()} className="CommentCard__created_at">
          {date.toLocaleString("en-GB", dateOptions)}
        </time>
        {comment.author === loggedInUser && (
          <button
            className="CommentCard__button"
            disabled={isDeleting}
            onClick={handleDelete}
            title="Delete"
          >
            <img
              className="CommentCard__button_icon"
              src={DeleteBin}
              alt="Delete Comment"
              width="16"
              height="16"
            />
          </button>
        )}
      </section>
      <p className="CommentCard__body long-strings-breaker">{comment.body}</p>
    </li>
  );
};

export default CommentCard;
