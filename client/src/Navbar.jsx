// import React from 'react';

// const Navbar = () => {
//   const navStyle = {
//     backgroundColor: '#333', // Dark background
//     padding: '10px',
//     color: 'white',
//     display: 'flex',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   };

//   const linkStyle = {
//     color: 'white',
//     textDecoration: 'none',
//     fontSize: '18px',
//   };

//   return (
//     <nav style={navStyle}>
//       <a href="" style={linkStyle}>Home</a>
//       <a href="#add" style={linkStyle}>Add Product</a>
//       <a href="#search" style={linkStyle}>Search</a>
//       <a href="#update" style={linkStyle}>Update Product</a>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import './Home.css';


const Navbar = ({ changeView }) => {
  const navStyle = {
    backgroundColor: '#333',
    padding: '10px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  };

  return (
    <nav style={navStyle}>
      <span style={linkStyle} onClick={() => changeView("home")}>Home</span>
      <span style={linkStyle} onClick={() => changeView("add")}>Add Product</span>
      <span style={linkStyle} onClick={() => changeView("search")}>Search</span>
      <span style={linkStyle} onClick={() => changeView("update")}>Update Product</span>
    </nav>
  );
};

export default Navbar;