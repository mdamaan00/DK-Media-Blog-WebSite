import React, { useState, useEffect } from "react";
import "./css/Blogs.css";
import BlogCard from "./BlogCard";
import { BlogCardRev } from "./BlogCard";
import { RotateLoader } from "react-spinners";


function Blogs() {
  document.getElementsByClassName('switcher')[0].style.display="";
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  
  const apiUrl = "https://dkmedia.pythonanywhere.com/api/";
  const mediaUrl = "https://dkmedia.pythonanywhere.com";
  

 
  const fetchData = () => { 
    setLoading(true);
    setError(false);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        
      }).catch(err => {
        setError(true);
        setLoading(false);
        throw new Error(err)
      });
  };

    useEffect(() => {
      fetchData();
      
    }, []);

  
 


  return (
    
    <div className="blogs">
      {/* <button onClick={()=>desc()}>  asc </button> */}
      {(error||loading)?(error)?<h1 className="err-msg">Sorry this page doesn't exists...</h1>:<div className='loader'><RotateLoader  color={"#ff725e"} loading={loading}  size={15} /></div>:<div className="black-back">
        <h1 className="blog-h1 ">Blogs</h1>
        <div className="underline5"></div>
      </div>}
      
      
      
      
      
      <div className="blog-cards">
        
        {data.map((data, index) => {
          if (index % 2 === 0) {
            return (
              <BlogCard
                title={data.title}
                image = {mediaUrl+data.image}
                author={data.post_author_username}
                date={data.published.substr(0, 10)}
                content={data.excerpt.substr(0, 200) + "..."}
                slug = {data.slug}
                category = {data.post_category}
              />
            );
          } else {
            return (
              <BlogCardRev
                title={data.title}
                image = {mediaUrl+data.image}
                author={data.post_author_username}
                date={data.published.substr(0, 10)}
                content={data.excerpt.substr(0, 200) + "..."}
                slug = {data.slug}
                category = {data.post_category}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default Blogs;
