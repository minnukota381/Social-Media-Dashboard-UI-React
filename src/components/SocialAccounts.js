// components/SocialAccounts.js
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import './styles.css';

function SocialAccounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const mockAccounts = [
      { id: 1, name: 'LinkedIn', followers: 15000, change: 5, icon: <FaLinkedin size={36} /> },
      { id: 2, name: 'GitHub', followers: 8000, change: -3, icon: <FaGithub size={36} /> },
      { id: 3, name: 'Instagram', followers: 12000, change: 10, icon: <FaInstagram size={36} /> },
      { id: 4, name: 'YouTube', followers: 20000, change: 7, icon: <FaYoutube size={36} /> },
    ];
    setAccounts(mockAccounts);
  }, []);

  return (
    <div className="container-fluid p-4">
      <h1 className="mb-4 text-primary text-center">Connected Accounts</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="mb-4">
          <Card className="h-100 text-white card-custom hover-effect">
            <CardBody className="d-flex flex-column align-items-center">
              <CardTitle tag="h5" className="mb-3 text-center">Social Media Accounts</CardTitle>
              <CardText className="d-flex justify-content-around w-100">
                {accounts.map((account) => (
                  <div key={account.id} className="text-center">
                    {account.icon}
                    <p className="mb-0 followers-count" style={{ fontSize: '1.5em' }}>{account.followers.toLocaleString()}</p>
                    <div className="d-flex align-items-center justify-content-center">
                      {account.change >= 0 ? <FaArrowUp color="green" /> : <FaArrowDown color="red" />}
                      <span style={{ color: account.change >= 0 ? 'green' : 'red', marginLeft: '0.25em' }}>
                        {Math.abs(account.change)}%
                      </span>
                    </div>
                  </div>
                ))}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default SocialAccounts;
