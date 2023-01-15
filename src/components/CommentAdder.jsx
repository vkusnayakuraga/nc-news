import { useState } from "react";
import { postCommentByArticleId } from "../utils/api";

const CommentAdder = ({ article_id, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const username = "testuser";

  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentByArticleId(article_id, username, newComment).then(
      (newComment) => {
        setComments((currComments) => {
          return [newComment, ...currComments];
        });
      }
    );
    setNewComment("");
  };

  return (
    <form className="CommentAdder" onSubmit={handleSubmit}>
      <label htmlFor="newComment">Leave a comment</label>
      <textarea
        id="newComment"
        value={newComment}
        onChange={(event) => setNewComment(event.target.value)}
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default CommentAdder;
