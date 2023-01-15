const Nav = () => {
  const topics = ["All", "Coding", "Cooking", "Football"];

  return (
    <nav className="Nav">
      {topics.map((topic) => (
        <p className="Nav__link" key={topic}>
          {topic}
        </p>
      ))}
    </nav>
  );
};

export default Nav;
