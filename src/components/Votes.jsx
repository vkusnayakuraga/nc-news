import { useState } from "react";
import { updateVotesByArticleId } from "../utils/api";

const Votes = ({ article_id, votes }) => {
  const [addend, setAddend] = useState(0);
  const [error, setError] = useState("");

  const displayError = () => {
    setError("Oops, something went wrong...");
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  const toggleUpVote = () => {
    setAddend((currAddend) => currAddend + 1);
    updateVotesByArticleId(article_id, 1).catch(() => {
      setAddend((currAddend) => currAddend - 1);
      displayError();
    });
  };

  const toggleDownVote = () => {
    setAddend((currAddend) => currAddend - 1);
    updateVotesByArticleId(article_id, -1).catch(() => {
      setAddend((currAddend) => currAddend + 1);
      displayError();
    });
  };

  return (
    <section className="Votes">
      <span className="Votes__header">Votes:</span>
      <button onClick={toggleUpVote} className="Votes__button">
        ⬆️
      </button>
      <span>{votes + addend}</span>
      <button onClick={toggleDownVote} className="Votes__button">
        ⬇️
      </button>
      <span className="Votes__error">{error}</span>
    </section>
  );
};

export default Votes;
