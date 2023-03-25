import { useState } from "react";
import { postCommentByArticleId } from "../utils/api";

const CommentAdder = ({ article_id, setComments, setCommentCount }) => {
  const [newComment, setNewComment] = useState("");
  const [isSending, setIsSending] = useState(false);
  const username = "testuser";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== "") {
      setIsSending(true);
      postCommentByArticleId(article_id, username, newComment).then(
        (newComment) => {
          setComments((currComments) => {
            return [newComment, ...currComments];
          });
          setCommentCount((currCount) => {
            return currCount + 1;
          });
          setIsSending(false);
        }
      );
    } else {
      alert("Invalid comment format ;(")
    }
    setNewComment("");
  };

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <form className="CommentAdder" onSubmit={handleSubmit}>
      <label htmlFor="newComment">Leave a comment</label>
      <textarea
        id="newComment"
        value={newComment}
        onChange={handleChange}
        placeholder="(3000 characters max)"
        maxLength="3000"
        required
      ></textarea>
      <button type="submit" disabled={isSending}>
        {isSending ? (
          <span className="loader">Sending</span>
        ) : (
          <span>Send</span>
        )}
      </button>
    </form>
  );
};

export default CommentAdder;
