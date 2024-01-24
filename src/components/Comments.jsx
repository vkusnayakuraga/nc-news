import { useEffect, useState } from "react";
import { deleteCommentByCommentId, getCommentsByArticleId } from "../utils/api";
import CommentAdder from "./CommentAdder";
import CommentCard from "./CommentCard";

const Comments = ({ article_id, commentCount, setCommentCount }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const loggedInUser = "testuser";

  const handleDeleteComment = (commentId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this comment?"
    );

    if (shouldDelete) {
      setIsDeleting(true);
      deleteCommentByCommentId(commentId)
        .then(() => {
          setComments((oldComments) => {
            return oldComments.filter(
              (comment) => comment.comment_id !== commentId
            );
          });
          setCommentCount((currCount) => {
            return currCount - 1;
          });
          setIsDeleting(false);
        })
        .catch(() => {
          alert("Oops, something went wrong...\nPlease try again later");
          setIsDeleting(false);
        });
    }
  };

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
        <h3>Comments {commentCount}</h3>
        <p>All in fancy Latin</p>
      </header>
      <CommentAdder
        article_id={article_id}
        setComments={setComments}
        setCommentCount={setCommentCount}
      />
      {commentCount === 0 ? (
        <section className="no-comments">
          <p>Commentaria hic non sunt adhuc</p>
          <p>(No comments here yet...)</p>
        </section>
      ) : (
        <ul className="Comments__list">
          {comments.map((comment) => (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              loggedInUser={loggedInUser}
              handleDeleteComment={handleDeleteComment}
              isDeleting={isDeleting}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Comments;
