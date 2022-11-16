import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const Post = ({ post, handleExpand, expandAccordion }) => {
  return (
    <div className="container">
      <div className="titleContainer">
        <h3 className="title">
          {post.title.length > 30
            ? post.title.substring(0, 30) + "..."
            : post.title}
        </h3>
        <div className="arrowContainer" onClick={handleExpand}>
          {!expandAccordion ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </div>
      </div>
      {expandAccordion && (
        <div className="bodyContainer">
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
