import React from "react";

const Post = (props) => {
  const { title } = props.post;
  return (
    <div>
      <h2> {title} </h2>
    </div>
  );
};

export default Post;
