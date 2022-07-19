import { React, useEffect } from "react";
import "./css/BlogCard.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";



function BlogCard({title,image,author,date,content,slug, category}) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="blog-card" data-aos="fade-right" data-aos-once="true">
      <div className="blog-flex-child">
      <Link to={slug}><img  src={image} alt="" /></Link>
      </div>
      <div className="blog-flex-child">
        <div className="blog-content">
          <h2 className="blog-heading">{title}</h2>

          <p className="inLine">
            <BsPersonCircle /> <span className="author-name">{author}</span>
          </p>
          <p className="inLine">{date}</p>
          <p> <strong>Category:</strong>  <span className="author-name">{category}</span></p>

          <p className="blog-excerpt">
            {content}
          </p>
          <p><Link className="blog-link" to={slug}>Continue reading...</Link></p>
        </div>
      </div>
    </div>
  );
}

function BlogCardRev( {title,image,author,date,content,slug,category}) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="blog-card rev" data-aos="fade-left" data-aos-once="true">
      <div className="blog-flex-child">
      <Link to={slug}><img  src={image} alt="" /></Link>
      </div>
      <div className="blog-flex-child">
        <div className="blog-content">
          <h2 className="blog-heading">{title}</h2>
          <p className="inLine">
            <BsPersonCircle /> <span className="author-name">{author}</span>
          </p>
          <p className="inLine">{date}</p>
         <p> <strong>Category:</strong>  <span className="author-name">{category}</span></p>
          <p className="blog-excerpt">
          {content}
          </p>
          <p><Link className="blog-link" to={slug}>Continue reading...</Link></p>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
export { BlogCardRev };
