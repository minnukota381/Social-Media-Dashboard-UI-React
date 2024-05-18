// components/AnalyticsView.js
import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Chart from 'chart.js/auto';
import './styles.css';

const engagementData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Engagement',
      data: [1200, 1900, 3000, 1700, 2800, 2400, 700],
      fill: false,
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const topPostsData = {
  labels: ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'],
  datasets: [
    {
      label: 'Engagement',
      data: [8246, 7000, 6000, 5000, 4000],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
  ],
};

function AnalyticsView() {
  const [analytics, setAnalytics] = useState({
    engagement: engagementData,
    topPosts: topPostsData,
  });

  useEffect(() => {
    // Simulate fetching data
  }, []);

  return (
    <div className="container-fluid p-4">
      <h1 className="mb-4 text-primary">Analytics</h1>
      <Row>
        <Col md={8}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Engagement Over Time</CardTitle>
              <Line data={analytics.engagement} />
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">Total Engagement</CardTitle>
              <p className="display-4">24,568</p>
            </CardBody>
          </Card>
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">Top Posts</CardTitle>
              <Bar data={analytics.topPosts} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AnalyticsView;
