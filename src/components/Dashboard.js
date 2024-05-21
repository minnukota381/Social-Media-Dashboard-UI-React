// components/Dashboard.js
import React from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col, Badge } from 'reactstrap';
import { FaUserFriends, FaRegCommentDots, FaHeart, FaRetweet, FaUserPlus, FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './styles.css';

function Dashboard() {
  return (
    <div className="container-fluid p-4">
      {/* Facebook Section */}
      <h1 className="mb-4 text-primary">
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
                    8,000
                  </CardText>
                </div>
                <Badge pill color="light" className="text-dark">
                  +200
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
                    Posts
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
                    Engagements
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
                    Shares
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

      {/* LinkedIn Section */}
      <h1 className="mb-4 text-primary">
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
                    Connections
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    5,000
                  </CardText>
                </div>
                <Badge pill color="light" className="text-dark">
                  +150
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
                    Posts
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    120
                  </CardText>
                </div>
                <Badge pill color="light" className="text-primary">
                  +12
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
                    Likes
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    15,300
                  </CardText>
                </div>
                <Badge pill color="light" className="text-danger">
                  +1.1k
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
                    Shares
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    800
                  </CardText>
                </div>
                <Badge pill color="light" className="text-info">
                  +50
                </Badge>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* YouTube Section */}
      <h1 className="mb-4 text-primary">
        <FaYoutube className="mr-2" />
        YouTube
      </h1>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <Card className="text-white mb-4 card-custom">
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">
                    <FaUserFriends className="mr-2" />
                    Subscribers
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    10,000
                  </CardText>
                </div>
                <Badge pill color="light" className="text-dark">
                  +500
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
                    Videos
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    320
                  </CardText>
                </div>
                <Badge pill color="light" className="text-primary">
                  +15
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
                    Likes
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    50,000
                  </CardText>
                </div>
                <Badge pill color="light" className="text-danger">
                  +2.5k
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
                    Shares
                  </CardTitle>
                  <CardText>
                    <FaUserPlus className="mr-2" />
                    4,000
                  </CardText>
                </div>
                <Badge pill color="light" className="text-info">
                  +200
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
