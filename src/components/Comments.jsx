import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../utils/api";
import CommentCard from "./CommentCard";

const Comments = ({ article_id, comment_count }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return (
      <section>
        <p className="Loading">Loading...</p>
      </section>
    );
  }

  return (
    <section className="Comments">
      <header className="Comments__header">
        <h3>Comments {comment_count}</h3>
        <p>All in fancy Latin</p>
      </header>
      <ul className="Comments__list">
        {comments.map((comment) => (
          <CommentCard key={comment.comment_id} {...comment} />
        ))}
      </ul>
    </section>
  );
};

export default Comments;
