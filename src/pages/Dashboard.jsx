import React from "react";

const Dashboard = ({ handleSignOut }) => {
  return (
    <div>
      <nav>
        <h2>Welcome</h2>
        <p>sbvhrbfnwrufnwfnewrfninwrnfrmin</p>
        <button onClick={handleSignOut}>Logout</button>
      </nav>
    </div>
  );
};

export default Dashboard;
