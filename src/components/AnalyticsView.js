// components/AnalyticsView.js
import React, { useState, useEffect } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Chart from 'chart.js/auto';
import { FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './styles.css';

const facebookEngagementData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Facebook Engagement',
      data: [1200, 1900, 3000, 1700, 2800, 2400, 700],
      fill: false,
      borderColor: 'rgba(59, 89, 152, 1)',
    },
  ],
};

const linkedInEngagementData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'LinkedIn Engagement',
      data: [800, 1200, 2000, 1400, 1800, 1600, 500],
      fill: false,
      borderColor: 'rgba(0, 119, 181, 1)',
    },
  ],
};

const youtubeEngagementData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'YouTube Engagement',
      data: [1500, 2400, 3500, 2200, 3200, 2800, 1000],
      fill: false,
      borderColor: 'rgba(205, 32, 31, 1)',
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

const engagementSourcesData = {
  labels: ['Facebook', 'LinkedIn', 'YouTube'],
  datasets: [
    {
      data: [50, 30, 20],
      backgroundColor: ['rgba(59, 89, 152, 0.6)', 'rgba(0, 119, 181, 0.6)', 'rgba(205, 32, 31, 0.6)'],
    },
  ],
};


// ... (data objects remain the same)

function AnalyticsView() {
  const [analytics, setAnalytics] = useState({
    facebookEngagement: facebookEngagementData,
    linkedInEngagement: linkedInEngagementData,
    youtubeEngagement: youtubeEngagementData,
    topPosts: topPostsData,
    engagementSources: engagementSourcesData,
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
              <Line data={analytics.facebookEngagement} options={{ plugins: { legend: { labels: { color: '#fff' } } } }} />
              <Line data={analytics.linkedInEngagement} options={{ plugins: { legend: { labels: { color: '#fff' } } } }} />
              <Line data={analytics.youtubeEngagement} options={{ plugins: { legend: { labels: { color: '#fff' } } } }} />
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Row>
            <Col md={6}>
              <Card className="mb-4">
                <CardBody>
                  <CardTitle tag="h5">Top Posts</CardTitle>
                  <Bar data={analytics.topPosts} />
                </CardBody>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="mb-4">
                <CardBody>
                  <CardTitle tag="h5">Engagement Sources</CardTitle>
                  <Doughnut data={analytics.engagementSources} options={{ plugins: { legend: { labels: { color: '#fff' } } } }} />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card className="mb-4">
                <CardBody>
                  <CardTitle tag="h5" className="d-flex align-items-center">
                    <FaFacebookSquare className="mr-2" />
                    Facebook Engagement
                  </CardTitle>
                  <p className="display-4">24,568</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card className="mb-4">
                <CardBody>
                  <CardTitle tag="h5" className="d-flex align-items-center">
                    <FaLinkedin className="mr-2" />
                    LinkedIn Engagement
                  </CardTitle>
                  <p className="display-4">18,200</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card className="mb-4">
                <CardBody>
                  <CardTitle tag="h5" className="d-flex align-items-center">
                    <FaYoutube className="mr-2" />
                    YouTube Engagement
                  </CardTitle>
                  <p className="display-4">32,000</p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AnalyticsView;