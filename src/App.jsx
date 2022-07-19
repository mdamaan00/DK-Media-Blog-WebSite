import Loading from "./MyComponents/Loading.jsx";
import Header from "./MyComponents/Header.jsx";
import Home from "./MyComponents/Home.jsx";
import Blogs from "./MyComponents/Blogs.jsx";
import Footer from "./MyComponents/Footer.jsx";
import SingleBlogPost from "./MyComponents/SingleBlogPost.jsx";
import "./MyComponents/css/whatsapp.css";
import AnimatedCursor from "react-animated-cursor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedCursor
          className="cursor"
          innerSize={8}
          outerSize={40}
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={1.5}
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        ></link>
        <a
          href="https://wa.me/+918080919144"
          class="whatsapp_float fab fa-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
        </a>

        <Loading />
        <Header />

        <Routes>
          <Route exact path="/blogs/" element={<Blogs />} />
          <Route exact path="/blogs/:slug/" element={<SingleBlogPost/>}/>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
