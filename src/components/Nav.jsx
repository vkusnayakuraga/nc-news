import { NavLink } from "react-router-dom";

const Nav = () => {
  const topics = ["Coding", "Cooking", "Football"];

  return (
    <nav className="Nav">
      <div className="Nav__container">
        <ul className="Nav__list">
          {topics.map((topic) => (
            <NavLink
              className="NavLink"
              to={`/topics/${topic}`}
              style={({ isActive }) => ({
                color: isActive ? "blue" : "black",
                textDecoration: "none",
              })}
              key={topic}
            >
              {`${topic}`}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
