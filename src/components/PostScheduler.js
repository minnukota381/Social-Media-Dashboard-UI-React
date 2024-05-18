// components/PostScheduler.js
import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaRegCalendarAlt } from 'react-icons/fa';
import './styles.css';

const PostScheduler = () => {
  const [post, setPost] = useState({ content: '', scheduledTime: '', accounts: [] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Post scheduled:', post);
  };

  const handleAccountChange = (e) => {
    const accountName = e.target.id.replace('Check', '');
    setPost({
      ...post,
      accounts: e.target.checked
        ? [...post.accounts, accountName]
        : post.accounts.filter((account) => account !== accountName),
    });
  };

  return (
    <div className="container-fluid">
      <Card className="shadow p-4">
        <CardBody>
          <CardTitle className="mb-4">
            <FaRegCalendarAlt className="mr-2" />
            Schedule a Post
          </CardTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="postContent">Post Content</Label>
              <Input
                type="textarea"
                name="content"
                id="postContent"
                value={post.content}
                onChange={handleChange}
                rows="5"
                placeholder="Write your post content here..."
                className="rounded-lg"
              />
            </FormGroup>
            <FormGroup>
              <Row>
                <Col md={6}>
                  <Label for="scheduledTime">
                    <FaRegCalendarAlt className="mr-2" />
                    Scheduled Time
                  </Label>
                  <Input
                    type="datetime-local"
                    name="scheduledTime"
                    id="scheduledTime"
                    value={post.scheduledTime}
                    onChange={handleChange}
                    className="rounded-lg"
                  />
                </Col>
                <Col md={6}>
                  <Label>
                    Select Accounts
                  </Label>
                  <div className="d-flex flex-wrap align-items-center">
                    <CheckboxWithLabel id="instagramCheck" label="Instagram" icon={<FaInstagram />} checked={post.accounts.includes('instagram')} onChange={handleAccountChange} />
                    <CheckboxWithLabel id="twitterCheck" label="Twitter" icon={<FaTwitter />} checked={post.accounts.includes('twitter')} onChange={handleAccountChange} />
                    <CheckboxWithLabel id="facebookCheck" label="Facebook" icon={<FaFacebook />} checked={post.accounts.includes('facebook')} onChange={handleAccountChange} />
                    <CheckboxWithLabel id="linkedinCheck" label="LinkedIn" icon={<FaLinkedin />} checked={post.accounts.includes('linkedin')} onChange={handleAccountChange} />
                  </div>
                </Col>
              </Row>
            </FormGroup>
            <Button color="primary" type="submit" className="rounded-pill mt-3">
              <FaRegCalendarAlt className="mr-2" />
              Schedule Post
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

const CheckboxWithLabel = ({ id, label, icon, checked, onChange }) => {
  return (
    <div className="custom-control custom-checkbox mr-3 mb-2">
      <input
        type="checkbox"
        className="custom-control-input"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label className="custom-control-label" htmlFor={id}>
        {icon} {label}
      </label>
    </div>
  );
}

export default PostScheduler;
