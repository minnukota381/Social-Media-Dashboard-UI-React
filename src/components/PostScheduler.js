// components/PostScheduler.js
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

function PostScheduler() {
  const [post, setPost] = useState({
    content: '',
    scheduledTime: '',
    accounts: [],
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the post to the API for scheduling
    console.log(post);
  };

  return (
    <div className="container-fluid p-4">
      <h1 className="mb-4">Schedule a Post</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="postContent">Post Content</Label>
          <Input
            type="textarea"
            name="content"
            id="postContent"
            value={post.content}
            onChange={handleChange}
            rows="3"
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="scheduledTime">Scheduled Time</Label>
              <Input
                type="datetime-local"
                name="scheduledTime"
                id="scheduledTime"
                value={post.scheduledTime}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Select Accounts</Label>
              {/* Add checkboxes or dropdown for account selection */}
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary" type="submit">Schedule Post</Button>
      </Form>
    </div>
  );
}

export default PostScheduler;