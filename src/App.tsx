import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Navigator from "./components/Navigator";

export default function App() {
  return (
    <div className="relative">
      <Header />
      <div className="mb-[2rem] lg:mb-0">
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/about/:section" Component={About} />
            <Route path="/projects" Component={Projects} />
            <Route path="/projects/:index" Component={Projects} />
          </Routes>
          <Navigator />
        </Router>
      </div>
    </div>
  );
}
