// components/Dashboard.js
import React from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col, Badge } from 'reactstrap';
import { FaUserFriends, FaRegCommentDots, FaHeart, FaRetweet, FaUserPlus, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import './styles.css';

function Dashboard() {
  return (
    <div className="container-fluid p-4">
      <h1 className="mb-4">
        <FaFacebookSquare className="mr-2" />
        Facebook
      </h1>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaUserFriends className="mr-2" />
                    Followers
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    8
                  </CardText>
                </div>
                <Badge pill color="light" className="text-dark">
                  +2
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaRegCommentDots className="mr-2" />
                    Total Posts
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    452
                  </CardText>
                </div>
                <Badge pill color="light" className="text-primary">
                  +24
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaHeart className="mr-2" />
                    Total Engagement
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    24,568
                  </CardText>
                </div>
                <Badge pill color="light" className="text-danger">
                  +1.2k
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaRetweet className="mr-2" />
                    Total Shares
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    1,234
                  </CardText>
                </div>
                <Badge pill color="light" className="text-info">
                  +100
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <h1 className="mb-4">
        <FaLinkedin className="mr-2" />
        LinkedIn
      </h1>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaUserFriends className="mr-2" />
                    Followers
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    8
                  </CardText>
                </div>
                <Badge pill color="light" className="text-dark">
                  +2
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaRegCommentDots className="mr-2" />
                    Total Posts
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    452
                  </CardText>
                </div>
                <Badge pill color="light" className="text-primary">
                  +24
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaHeart className="mr-2" />
                    Total Engagement
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    24,568
                  </CardText>
                </div>
                <Badge pill color="light" className="text-danger">
                  +1.2k
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaRetweet className="mr-2" />
                    Total Shares
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    1,234
                  </CardText>
                </div>
                <Badge pill color="light" className="text-info">
                  +100
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <h1 className="mb-4 text-primary">Youtube</h1>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaUserFriends className="mr-2" />
                    Followers
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    8
                  </CardText>
                </div>
                <Badge pill color="light" className="text-dark">
                  +2
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaRegCommentDots className="mr-2" />
                    Total Posts
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    452
                  </CardText>
                </div>
                <Badge pill color="light" className="text-primary">
                  +24
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaHeart className="mr-2" />
                    Total Engagement
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    24,568
                  </CardText>
                </div>
                <Badge pill color="light" className="text-danger">
                  +1.2k
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaRetweet className="mr-2" />
                    Total Shares
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    1,234
                  </CardText>
                </div>
                <Badge pill color="light" className="text-info">
                  +100
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <h1 className="mb-4 text-primary">Dashboard</h1>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaUserFriends className="mr-2" />
                    Followers
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    8
                  </CardText>
                </div>
                <Badge pill color="light" className="text-dark">
                  +2
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaRegCommentDots className="mr-2" />
                    Total Posts
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    452
                  </CardText>
                </div>
                <Badge pill color="light" className="text-primary">
                  +24
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaHeart className="mr-2" />
                    Total Engagement
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    24,568
                  </CardText>
                </div>
                <Badge pill color="light" className="text-danger">
                  +1.2k
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaRetweet className="mr-2" />
                    Total Shares
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    1,234
                  </CardText>
                </div>
                <Badge pill color="light" className="text-info">
                  +100
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
