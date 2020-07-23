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
import AddComment from "./AddComment";

const PostsCards = ({
  user,
  userAvatar,
  title,
  text,
  picture,
  like,
  uuid,
  getInfos,
}) => {
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
        <Row>
          <Col>
            <Button color="danger" outline={like}>
              <BsFillHeartFill />
            </Button>
          </Col>
          <Col>
            <AddComment uuid={uuid} getInfos={getInfos} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PostsCards;
