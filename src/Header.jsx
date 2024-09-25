import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Employee Management App</h1>
    </header>
  );
};

// Inline CSS for header styling
const headerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
};

export default Header;
