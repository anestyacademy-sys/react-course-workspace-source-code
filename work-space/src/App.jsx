import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Articles from "./pages/Articles.jsx";
import ArticleDetail from "./pages/ArticleDetail.jsx";
import About from "./pages/About.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";

// Each page holds its own header and footer, so there is no shared layout.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:slug" element={<ArticleDetail />} />
      <Route path="/about" element={<About />} />

      {/* account */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
