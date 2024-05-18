// components/Dashboard.js
import React from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col, Badge } from 'reactstrap';
import { FaUserFriends, FaRegCommentDots, FaHeart } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="container-fluid p-4">
      <h1 className="mb-4 text-primary">Dashboard</h1>
      <Row>
        <Col md={4}>
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
        <Col md={4}>
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
        <Col md={4}>
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
      </Row>
    </div>
  );
}

export default Dashboard;