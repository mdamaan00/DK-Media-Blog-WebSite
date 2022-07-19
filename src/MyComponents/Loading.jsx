import React from "react";
import "./css/Loading.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loading() {
  return (
    <div className="Loading">
       <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
  );
}

export default Loading;
