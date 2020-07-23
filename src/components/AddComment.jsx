import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
} from "reactstrap";
import Axios from "axios";
import { url } from "../urls";

const AddComment = ({ getInfos, uuid }) => {
  const [modal, setModal] = useState(false);
  const [unmountOnClose, setUnmountOnClose] = useState(true);
  const [comment, setComment] = useState({ content: "" });
  const UserUuid = localStorage.getItem("uuid");

  const toggle = () => setModal(!modal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(comment.content);
      await Axios.post(`${url}/comments/${uuid}/user/${UserUuid}`, {
        content: comment.content,
      });
      getInfos();
      toggle();
    } catch (error) {}
  };

  return (
    <div>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <Button color="success" onClick={toggle}>
          Add a Comment
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
          <Input
            type="textarea"
            onChange={(e) => setComment({ content: e.target.value })}
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

export default AddComment;
