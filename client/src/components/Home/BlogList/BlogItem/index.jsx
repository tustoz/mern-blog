import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    username,
    profilepic,
    photo,
    categories,
    _id,
  },
}) => {
  return (
    <div className="blogItem-wrap">
      <img className="blogItem-cover" src={photo} alt="" />
      <ul className="tags">
        {categories.map((c) => (
          <p className="chip">{c}</p>
        ))}
      </ul>
      <h3>{title}</h3>
      <p className="blogItem-desc">{description}</p>
      <footer>
        <div className="blogItem-author">
          <img src="https://avatars.githubusercontent.com/u/76657906?v=4" alt="" />
          <div>
            <h6>{username}</h6>
            <p>{new Date(createdAt).toDateString()}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/blog/${_id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
