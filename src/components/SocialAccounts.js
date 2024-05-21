// components/SocialAccounts.js
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Row, Col, Badge } from 'reactstrap';
import { FaTimes, FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import './styles.css';

function SocialAccounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const mockAccounts = [
      { id: 1, name: 'LinkedIn', profilePicture: 'https://via.placeholder.com/50', followers: 15000, icon: <FaLinkedin size={24} /> },
      { id: 2, name: 'GitHub', profilePicture: 'https://via.placeholder.com/50', followers: 8000, icon: <FaGithub size={24} /> },
      { id: 3, name: 'Instagram', profilePicture: 'https://via.placeholder.com/50', followers: 12000, icon: <FaInstagram size={24} /> },
      { id: 4, name: 'YouTube', profilePicture: 'https://via.placeholder.com/50', followers: 20000, icon: <FaYoutube size={24} /> },
    ];
    setAccounts(mockAccounts);
  }, []);

  const handleDisconnect = (id) => {
    setAccounts(accounts.filter(account => account.id !== id));
  };

  return (
    <div className="container-fluid p-4">
      <h1 className="mb-4 text-primary">Connected Accounts</h1>
      <Row>
        {accounts.map((account) => (
          <Col key={account.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100 text-white card-custom">
              <CardBody className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center">
                    {account.icon}
                    <CardTitle tag="h5" className="ml-2 mb-0">{account.name}</CardTitle>
                  </div>
                  <Button color="danger" size="sm" onClick={() => handleDisconnect(account.id)}>
                    <FaTimes />
                  </Button>
                </div>
                <CardText className="flex-grow-1 text-center">
                  <img src={account.profilePicture} alt={account.name} className="rounded-circle mb-2" width="50" height="50" />
                  <p>{account.followers.toLocaleString()} followers</p>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default SocialAccounts;
