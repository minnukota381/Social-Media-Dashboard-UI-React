// components/Dashboard.js
import React from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col, Badge } from 'reactstrap';
import { FaUserFriends, FaRegCommentDots, FaHeart, FaRetweet, FaUserPlus, FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './styles.css';

const SocialCard = ({ icon, title, value, growth, growthColor }) => (
  <Card className="text-white mb-4 card-custom">
    <CardBody>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <CardTitle tag="h5">
            {icon}
            {title}
          </CardTitle>
          <CardText>
            <FaUserPlus className="mr-2" />
            {value}
          </CardText>
        </div>
        <Badge pill color="light" className={`text-${growthColor}`}>
          {growth}
        </Badge>
      </div>
    </CardBody>
  </Card>
);

const SocialSection = ({ platform, icon, cards }) => (
  <>
    <h1 className="mb-4">
      {icon}
      {platform}
    </h1>
    <Row>
      {cards.map((card, index) => (
        <Col key={index} xs={12} sm={6} md={3}>
          <SocialCard
            icon={card.icon}
            title={card.title}
            value={card.value}
            growth={card.growth}
            growthColor={card.growthColor}
          />
        </Col>
      ))}
    </Row>
  </>
);

function Dashboard() {
  const facebookCards = [
    { icon: <FaUserFriends className="mr-2" />, title: 'Followers', value: '8,000', growth: '+200', growthColor: 'dark' },
    { icon: <FaRegCommentDots className="mr-2" />, title: 'Posts', value: '452', growth: '+24', growthColor: 'primary' },
    { icon: <FaHeart className="mr-2" />, title: 'Engagements', value: '24,568', growth: '+1.2k', growthColor: 'danger' },
    { icon: <FaRetweet className="mr-2" />, title: 'Shares', value: '1,234', growth: '+100', growthColor: 'info' },
  ];

  const linkedInCards = [
    { icon: <FaUserFriends className="mr-2" />, title: 'Connections', value: '5,000', growth: '+150', growthColor: 'dark' },
    { icon: <FaRegCommentDots className="mr-2" />, title: 'Posts', value: '120', growth: '+12', growthColor: 'primary' },
    { icon: <FaHeart className="mr-2" />, title: 'Likes', value: '15,300', growth: '+1.1k', growthColor: 'danger' },
    { icon: <FaRetweet className="mr-2" />, title: 'Shares', value: '800', growth: '+50', growthColor: 'info' },
  ];

  const youtubeCards = [
    { icon: <FaUserFriends className="mr-2" />, title: 'Subscribers', value: '10,000', growth: '+500', growthColor: 'dark' },
    { icon: <FaRegCommentDots className="mr-2" />, title: 'Videos', value: '320', growth: '+15', growthColor: 'primary' },
    { icon: <FaHeart className="mr-2" />, title: 'Likes', value: '50,000', growth: '+2.5k', growthColor: 'danger' },
    { icon: <FaRetweet className="mr-2" />, title: 'Shares', value: '4,000', growth: '+200', growthColor: 'info' },
  ];

  return (
    <div className="container-fluid p-4">
      <SocialSection platform="Facebook" icon={<FaFacebookSquare className="mr-2" />} cards={facebookCards} />
      <SocialSection platform="LinkedIn" icon={<FaLinkedin className="mr-2" />} cards={linkedInCards} />
      <SocialSection platform="YouTube" icon={<FaYoutube className="mr-2" />} cards={youtubeCards} />
    </div>
  );
}

export default Dashboard;