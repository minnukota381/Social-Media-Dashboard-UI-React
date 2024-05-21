import React from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col, Badge } from 'reactstrap';
import { FaUserFriends, FaRegCommentDots, FaHeart, FaRetweet, FaUserPlus, FaFacebookSquare, FaLinkedin, FaYoutube, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './styles.css';

const SocialCard = ({ platform, icon, followers, posts, engagements, shares }) => (
  <Card className="text-white mb-4 card-custom">
    <CardBody className="d-flex flex-column align-items-center">
      <CardTitle tag="h5" className="text-center mb-4">
        {icon} {platform}
      </CardTitle>
      <CardText>
        <Row>
          <Col xs={6} sm={6} md={3} className="mb-3">
            <div className="text-center">
              <FaUserFriends className="mr-2" />
              <span className="count">{followers}</span>
              <div className="d-flex align-items-center justify-content-center mt-2">
                <FaArrowUp color="green" />
                <span className="ml-1">10%</span>
              </div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3} className="mb-3">
            <div className="text-center">
              <FaRegCommentDots className="mr-2" />
              <span className="count">{posts}</span>
              <div className="d-flex align-items-center justify-content-center mt-2">
                <FaArrowDown color="red" />
                <span className="ml-1">5%</span>
              </div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3} className="mb-3">
            <div className="text-center">
              <FaHeart className="mr-2" />
              <span className="count">{engagements}</span>
              <div className="d-flex align-items-center justify-content-center mt-2">
                <FaArrowUp color="green" />
                <span className="ml-1">15%</span>
              </div>
            </div>
          </Col>
          <Col xs={6} sm={6} md={3} className="mb-3">
            <div className="text-center">
              <FaRetweet className="mr-2" />
              <span className="count">{shares}</span>
              <div className="d-flex align-items-center justify-content-center mt-2">
                <FaArrowDown color="red" />
                <span className="ml-1">8%</span>
              </div>
            </div>
          </Col>
        </Row>
      </CardText>
    </CardBody>
  </Card>
);

function Dashboard() {
  const facebookData = {
    platform: 'Facebook',
    icon: <FaFacebookSquare className="mr-2" />,
    followers: '8,000',
    posts: '452',
    engagements: '24,568',
    shares: '1,234'
  };

  const linkedInData = {
    platform: 'LinkedIn',
    icon: <FaLinkedin className="mr-2" />,
    followers: '5,000',
    posts: '120',
    engagements: '15,300',
    shares: '800'
  };

  const youtubeData = {
    platform: 'YouTube',
    icon: <FaYoutube className="mr-2" />,
    followers: '10,000',
    posts: '320',
    engagements: '50,000',
    shares: '4,000'
  };

  return (
    <div className="container-fluid p-4 d-flex justify-content-center align-items-center">
      <div style={{ maxWidth: '800px' }}>
        <SocialCard {...facebookData} />
        <SocialCard {...linkedInData} />
        <SocialCard {...youtubeData} />
      </div>
    </div>
  );
}

export default Dashboard;
