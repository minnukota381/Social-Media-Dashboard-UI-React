// components/PostScheduler.js
import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaRegCalendarAlt } from 'react-icons/fa';
import './styles.css';

function PostScheduler() {
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
    <div className="container-fluid p-4">
      <Card className="shadow-sm">
        <CardBody>
          <CardTitle>
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
                rows="3"
                placeholder="Write your post content here..."
                className="rounded-lg"
              />
            </FormGroup>
            <Row>
              <Col md={6}>
                <FormGroup>
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
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>
                    <FaInstagram className="mr-2" />
                    <FaTwitter className="mr-2" />
                    <FaFacebook className="mr-2" />
                    <FaLinkedin className="mr-2" />
                    Select Accounts
                  </Label>
                  <div className="d-flex">
                    <div className="custom-control custom-checkbox mr-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="instagramCheck"
                        checked={post.accounts.includes('instagram')}
                        onChange={handleAccountChange}
                      />
                      <label className="custom-control-label" htmlFor="instagramCheck">
                        Instagram
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox mr-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="twitterCheck"
                        checked={post.accounts.includes('twitter')}
                        onChange={handleAccountChange}
                      />
                      <label className="custom-control-label" htmlFor="twitterCheck">
                        Twitter
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox mr-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="facebookCheck"
                        checked={post.accounts.includes('facebook')}
                        onChange={handleAccountChange}
                      />
                      <label className="custom-control-label" htmlFor="facebookCheck">
                        Facebook
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="linkedinCheck"
                        checked={post.accounts.includes('linkedin')}
                        onChange={handleAccountChange}
                      />
                      <label className="custom-control-label" htmlFor="linkedinCheck">
                        LinkedIn
                      </label>
                    </div>
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Button color="primary" type="submit" className="rounded-pill">
              <FaRegCalendarAlt className="mr-2" />
              Schedule Post
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default PostScheduler;
