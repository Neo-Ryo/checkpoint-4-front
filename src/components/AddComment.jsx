import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const AddComment = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button color="success"> Add</Button>
      <Button color="danger"> Cancel</Button>
    </Form>
  );
};

export default AddComment;
