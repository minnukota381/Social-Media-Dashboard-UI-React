// components/PostScheduler.js
import React, { useState } from 'react';

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
    <div className="container mt-4">
      <h2>Schedule a Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter your post content"
            name="content"
            value={post.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <input
            type="datetime-local"
            className="form-control"
            name="scheduledTime"
            value={post.scheduledTime}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Select accounts:</label>
          {/* Add checkboxes or dropdown for account selection */}
        </div>
        <button type="submit" className="btn btn-primary">
          Schedule Post
        </button>
      </form>
    </div>
  );
}

export default PostScheduler;