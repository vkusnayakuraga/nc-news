const Sorting = ({
  sortByQuery,
  orderQuery,
  searchParams,
  setSearchParams,
}) => {
  const handleSortBy = (event) => {
    const newSortBy = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", newSortBy);
    setSearchParams(newParams);
  };

  const handleOrder = (event) => {
    const newOrder = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", newOrder);
    setSearchParams(newParams);
  };

  const handleReset = () => {
    const newParams = new URLSearchParams();
    setSearchParams(newParams);
  };

  return (
    <section className="Sorting">
      <div className="Sorting__group">
        <label className="Sorting__label">
          Sort by
          <select
            value={sortByQuery ?? "default"}
            onChange={handleSortBy}
            className="Sorting__select"
          >
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
        </label>
        <label className="Sorting__label">
          Order
          <select
            value={orderQuery ?? "default"}
            onChange={handleOrder}
            className="Sorting__select"
          >
            <option value={"desc"}>Descending</option>
            <option value={"asc"}>Ascending</option>
          </select>
        </label>
      </div>
      <button onClick={handleReset} className="Sorting__button">
        Reset
      </button>
    </section>
  );
};

export default Sorting;
