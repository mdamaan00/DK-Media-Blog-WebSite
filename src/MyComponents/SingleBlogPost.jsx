import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCallback } from "react/cjs/react.development";
import "./css/SingleBlogPost.css";
import { RotateLoader } from "react-spinners";
import { BsPersonCircle } from "react-icons/bs";

function SingleBlogPost() {
  document.getElementsByClassName('switcher')[0].style.display="none";
  
  const { slug } = useParams();
  const [data, setData] = useState(Object);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const apiUrl = "https://dkmedia.pythonanywhere.com/api/" + slug + "/";
  const fetchData = useCallback(() => {
    setLoading(true);
    setError(false);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]);
        
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        throw new Error(err);
      });
  }, [apiUrl]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="single-blog-post">
      {error || loading ? (
        error ? (
          <h1 className="err-msg">Sorry this page doesn't exists...</h1>
        ) : (
          <div className="loader">
            <RotateLoader color={"#ff725e"} loading={loading} size={15} />
          </div>
        )
      ) : (
        <div className="blog">
          <h1>{data.title}</h1>
          <p className="inLine">
            <BsPersonCircle /> <span className="author-name">{data.post_author_username}</span>
          </p>
          <p className="inLine">
           <strong>Category:</strong>  <span className="author-name">{data.post_category}</span>
          </p>
          
          
          <div dangerouslySetInnerHTML={{ __html: data.content }} />

          
        </div>
      )}
    </div>
  );
}

export default SingleBlogPost;
