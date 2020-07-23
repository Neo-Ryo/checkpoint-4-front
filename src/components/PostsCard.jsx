import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  CardHeader,
  Row,
  Col,
} from "reactstrap";
import { BsFillHeartFill } from "react-icons/bs";

const PostsCards = ({ user, userAvatar, title, text, picture, like }) => {
  return (
    <Card>
      <CardHeader>
        <Row>
          <Col lg="2">
            <img
              width="50vw"
              style={{ borderRadius: 100 }}
              src={userAvatar}
              alt="Card  cap"
            />
          </Col>
          <Col lg="2">
            <CardTitle>{user}</CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardImg top width="100%" src={picture} alt="Card image cap" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <Button color="danger" outline={like}>
          <BsFillHeartFill />
        </Button>
        <Button>Comments</Button>
      </CardBody>
    </Card>
  );
};

export default PostsCards;
