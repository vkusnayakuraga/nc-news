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
      {comment_count === 0 ? (
        <section className="no-comments">
          <p>Commentaria hic non sunt adhuc</p>
          <p>(No comments here yet...)</p>
        </section>
      ) : (
        <ul className="Comments__list">
          {comments.map((comment) => (
            <CommentCard key={comment.comment_id} {...comment} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Comments;
