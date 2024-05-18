// components/Dashboard.js
import React from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col, Badge } from 'reactstrap';
import { FaUserFriends, FaRegCommentDots, FaHeart, FaRetweet } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

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

function Dashboard() {
  return (
    <div className="container-fluid p-4">
      <h1 className="mb-4 text-primary">Dashboard</h1>
      <Row>
        <Col md={3}>
          <Card className="text-white bg-primary mb-4">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaUserFriends className="mr-2" />
                    Total Accounts
                  </CardTitle>
                  <CardText>8</CardText>
                </div>
                <Badge pill color="light" className="text-primary">
                  +2
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-white bg-success mb-4">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaRegCommentDots className="mr-2" />
                    Total Posts
                  </CardTitle>
                  <CardText>452</CardText>
                </div>
                <Badge pill color="light" className="text-success">
                  +24
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-white bg-danger mb-4">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaHeart className="mr-2" />
                    Total Engagement
                  </CardTitle>
                  <CardText>24,568</CardText>
                </div>
                <Badge pill color="light" className="text-danger">
                  +1.2k
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-white bg-info mb-4">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaRetweet className="mr-2" />
                    Total Shares
                  </CardTitle>
                  <CardText>1,234</CardText>
                </div>
                <Badge pill color="light" className="text-info">
                  +100
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Card className="mb-4">
        <CardBody>
          <CardTitle tag="h5">Engagement Over Time</CardTitle>
          <Line data={engagementData} />
        </CardBody>
      </Card>
    </div>
  );
}

export default Dashboard;
