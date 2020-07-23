import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
} from "reactstrap";
import { BsFillLightningFill } from "react-icons/bs";
import Axios from "axios";
import { url } from "../urls";

const ModalPosts = ({ getInfos }) => {
  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);
  const [post, setPost] = useState({ title: "", text: "", picture: "" });
  const [posts, setPosts] = useState([]);
  const uuid = localStorage.getItem("uuid");

  const toggle = () => setModal(!modal);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      Axios.post(`${url}/posts/${uuid}`, {
        picture: post.picture,
        title: post.title,
        text: post.text,
      });
      getInfos();
      toggle();
    } catch (error) {}
  };

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button color="success" onClick={toggle}>
          <BsFillLightningFill />
        </Button>
      </Form>
      <Modal
        isOpen={modal}
        toggle={toggle}
        unmountOnClose={unmountOnClose}
        size="lg"
      >
        <ModalHeader toggle={toggle}>Tōkō shimasu</ModalHeader>
        <ModalBody>
          <img src={post.picture} alt="Preview" width="300vw" />
          <Input
            type="text"
            onChange={(e) => setPost({ ...post, picture: e.target.value })}
            placeholder="http://link-you-picture"
          />
          <Input
            type="text"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            placeholder="Your title"
          />
          <Input
            type="textarea"
            onChange={(e) => setPost({ ...post, text: e.target.value })}
            placeholder="Write something (data should remain in modal if unmountOnClose is set to false)"
            rows={5}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handleSubmit}>
            Post
          </Button>{" "}
          <Button color="warning" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalPosts;
