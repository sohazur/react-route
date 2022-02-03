import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, [friendId]);
  return (
    <div>
      <h3>Name: {friend.name}</h3>
      <p>Phone: {friend.phone}</p>
    </div>
  );
};

export default FriendDetail;
