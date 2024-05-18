// components/SocialAccounts.js
import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { FaPlus } from 'react-icons/fa';
import './styles.css';

function SocialAccounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const mockAccounts = [
      { id: 1, name: 'LinkedIn', profilePicture: 'https://via.placeholder.com/50', followers: 15000, icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' },
      { id: 2, name: 'GitHub', profilePicture: 'https://via.placeholder.com/50', followers: 8000, icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
      { id: 3, name: 'Instagram', profilePicture: 'https://via.placeholder.com/50', followers: 12000, icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png' },
      { id: 4, name: 'YouTube', profilePicture: 'https://via.placeholder.com/50', followers: 20000, icon: 'https://cdn-icons-png.flaticon.com/512/174/174883.png' },
    ];
    setAccounts(mockAccounts);
  }, []);

  const handleDisconnect = (id) => {
    setAccounts(accounts.filter(account => account.id !== id));
  };

  return (
    <div className="container-fluid p-4">
      <h1 className="mb-4 text-primary">Connected Accounts</h1>
      <div className="row">
        {accounts.map((account) => (
          <div key={account.id} className="col-md-4 mb-4">
            <Card className="h-100">
              <CardBody className="d-flex flex-column">
                <CardTitle tag="h5">
                  <img src={account.icon} alt={`${account.name} icon`} width="24" height="24" className="mr-2" />
                  {account.name}
                </CardTitle>
                <CardText className="flex-grow-1">
                  <img src={account.profilePicture} alt={account.name} className="rounded-circle mb-2" width="50" height="50" />
                  <p>{account.followers} followers</p>
                </CardText>
                <Button color="danger" onClick={() => handleDisconnect(account.id)}>
                  <FaPlus className="mr-2" />
                  Disconnect
                </Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialAccounts;
