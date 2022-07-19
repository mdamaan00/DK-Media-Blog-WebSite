import Loading from "./MyComponents/Loading.jsx";
import Header from "./MyComponents/Header.jsx";
import Home from "./MyComponents/Home.jsx";
import Blogs from "./MyComponents/Blogs.jsx";
import Footer from "./MyComponents/Footer.jsx";
import SingleBlogPost from "./MyComponents/SingleBlogPost.jsx";
import "./MyComponents/css/whatsapp.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        ></link>
        <a
          href="https://wa.me/+918080919144"
          className="whatsapp_float fab fa-whatsapp"
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
