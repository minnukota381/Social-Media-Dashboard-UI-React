// components/SocialAccounts.js
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Badge } from 'reactstrap';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function SocialAccounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Fetch connected social media accounts from API
    // and update the 'accounts' state
    const mockAccounts = [
      { id: 1, name: 'Twitter', profilePicture: 'https://via.placeholder.com/50', followers: 12345, icon: <FaTwitter /> },
      { id: 2, name: 'Facebook', profilePicture: 'https://via.placeholder.com/50', followers: 54321, icon: <FaFacebook /> },
      { id: 3, name: 'Instagram', profilePicture: 'https://via.placeholder.com/50', followers: 98765, icon: <FaInstagram /> },
    ];
    setAccounts(mockAccounts);
  }, []);

  return (
    <div className="container-fluid p-4">
      <h1 className="mb-4 text-primary">Connected Accounts</h1>
      <div className="row">
        {accounts.map((account) => (
          <div key={account.id} className="col-md-4 mb-4">
            <Card className="h-100">
              <CardBody>
                <div className="d-flex align-items-center">
                  <div className="mr-3">
                    {account.icon}
                  </div>
                  <div>
                    <CardTitle tag="h5">{account.name}</CardTitle>
                    <CardText>
                      <Badge color="primary">{account.followers} Followers</Badge>
                    </CardText>
                  </div>
                </div>
                <Button color="danger" className="mt-3">Disconnect</Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      <Button color="primary">Connect New Account</Button>
    </div>
  );
}

export default SocialAccounts;