import React, { useState, useEffect } from "react";
import MyNavbar from "./MyNavbar";
import Axios from "axios";
import { url } from "../urls";
import PostsCards from "./PostsCard";
import { Col } from "reactstrap";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  const uuid = localStorage.getItem("uuid");

  const getInfos = async () => {
    try {
      setIsLoading(true);
      const resUsers = await Axios.get(`${url}/users`);
      const resUser = await Axios.get(`${url}/users/${uuid}`);
      setUser(resUser.data);
      setUsers(resUsers.data);
      const resPosts = await Axios.get(`${url}/posts`);
      setPosts(resPosts.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfos();
  }, []);

  if (isLoading) {
    return <p style={{ margin: "45%" }}>loading...</p>;
  }
  return (
    <div>
      <MyNavbar getInfos={getInfos} />
      {posts.map((i) => (
        <Col
          lg={{ size: 6, offset: 3 }}
          style={{ marginTop: 20, marginBottom: 20 }}
        >
          <PostsCards
            user={i.User.pseudo}
            userAvatar={i.User.avatar}
            title={i.title}
            text={i.text}
            picture={i.picture}
          />
        </Col>
      ))}
    </div>
  );
}
