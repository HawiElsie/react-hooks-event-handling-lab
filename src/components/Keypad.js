import React from 'react';

function Keypad(props) {
  const handleInputChange = (event) => {
    console.log('Entering password...');
  };

  return (
    <div>
      <input type="password" placeholder="Enter password" onChange={handleInputChange} />
    </div>
  );
}

export default Keypad;
