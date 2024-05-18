import React, { useState, useEffect } from 'react';

function SocialAccounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Fetch connected social media accounts from API
    // and update the 'accounts' state
  }, []);

  return (
    <div className="container mt-4">
      <h2>Connected Accounts</h2>
      <ul className="list-group">
        {accounts.map((account) => (
          <li key={account.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img src={account.profilePicture} alt={account.name} className="rounded-circle mr-2" style={{ width: '40px' }} />
                <span>{account.name}</span>
              </div>
              <button className="btn btn-danger">Disconnect</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3">Connect New Account</button>
    </div>
  );
}

export default SocialAccounts;