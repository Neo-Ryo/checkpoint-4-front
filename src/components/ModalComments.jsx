import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Axios from "axios";
import { url } from "../urls";

const ModalComments = ({ user, content, uuid }) => {
  const [modal, setModal] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggle = () => setModal(!modal);
  const getComments = async () => {
    try {
      setIsLoading(true);
      const res = await Axios.get(`${url}/comments/${uuid}`);
      setComments(res.data);
      setIsLoading(false);
      toggle();
    } catch (error) {
      console.log(error);
    }
  };

  const externalCloseBtn = (
    <button
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );

  if (isLoading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <Button color="info" onClick={getComments}>
        Comments
      </Button>
      <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
        {comments.map((i) => (
          <>
            <ModalHeader>{i.UserUuid}</ModalHeader>
            <ModalBody>{i.content}</ModalBody>
          </>
        ))}
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComments;
