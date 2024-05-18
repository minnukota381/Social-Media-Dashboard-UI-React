// components/AnalyticsView.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import Chart from 'chart.js/auto';

function AnalyticsView() {
  const [analytics, setAnalytics] = useState({
    labels: [],
    datasets: [
      {
        label: 'Engagement',
        data: [],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  });

  useEffect(() => {
    // Fetch analytics data from API
    // and update the 'analytics' state
    const mockData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Engagement',
          data: [12, 19, 3, 17, 28, 24, 7],
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };
    setAnalytics(mockData);
  }, []);

  return (
    <div className="container-fluid p-4">
      <h1 className="mb-4">Analytics</h1>
      <Row>
        <Col md={8}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Engagement Over Time</CardTitle>
              <Line data={analytics} />
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">Total Engagement</CardTitle>
              <CardText>24,568</CardText>
            </CardBody>
          </Card>
          <Card className="mb-4">
            <CardBody>
              <CardTitle tag="h5">Top Post</CardTitle>
              <CardText>
                "Check out our new product launch!" <br />
                Engagement: 8,246
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AnalyticsView;