import Articles from "./components/Articles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/topics/:topic_slug" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
