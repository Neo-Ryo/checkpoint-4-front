import React from "react";
import { Card, CardTitle, CardText, Row, Col } from "reactstrap";

const Comment = ({ pseudo, content }) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>{pseudo}</CardTitle>
          <CardText>{content}</CardText>
        </Card>
      </Col>
    </Row>
  );
};

export default Comment;
