// import React from 'react';
// // import './Home.css';


// const Navbar = ({ changeView }) => {
// //   const navStyle = {
// //     backgroundColor: '#333',
// //     padding: '10px',
// //     color: 'white',
// //     display: 'flex',
// //     justifyContent: 'space-around',
// //     alignItems: 'center',
// //   };

// //   const linkStyle = {
// //     color: 'white',
// //     textDecoration: 'none',
// //     fontSize: '18px',
// //     cursor: 'pointer',
// //   };

//   return (
//     // <nav style={navStyle} > 
//     <nav className="navbar">

//       <span style={linkStyle} onClick={() => changeView("home")}>Home</span>
//       <span style={linkStyle} onClick={() => changeView("add")}>Add Product</span>
//       <span style={linkStyle} onClick={() => changeView("search")}>Search</span>
//       <span style={linkStyle} onClick={() => changeView("update")}>Update Product</span>
//     </nav>
//     </nav>






// // <nav class="navbar navbar-expand-lg bg-body-tertiary">
// //   <div class="container-fluid">
// //     <a class="navbar-brand" href="#" onClick={() => changeView("home")}>Home</a>
// //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //       <span class="navbar-toggler-icon"></span>
// //     </button>
// //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
// //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
// //         <li class="nav-item">
// //           <a class="nav-link active" aria-current="page" href="#" onClick={() => changeView("add")}>Add Product</a>
// //         </li>
// //         <li class="nav-item">
// //           <a class="nav-link" href="#" onClick={() => changeView("update")}>Update Product</a>
// //         </li>
// //       </ul>
// //       <form class="d-flex" role="search">
// //         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
// //         <button class="btn btn-outline-success" type="submit" onClick={() => changeView("search")}>aaaaaaaaaaaaaaaaa</button>
// //       </form>
// //     </div>
// //   </div>
// // </nav>
//   );
// };
// export default Navbar;



// import React from 'react';

// const Navbar = ({ changeView }) => {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#" onClick={() => changeView("home")}>Home</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#" onClick={() => changeView("add")}>Add Product</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" onClick={() => changeView("update")}>Update Product</a>
//             </li>
//           </ul>
//           <form className="d-flex" role="search">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//             <button className="btn btn-outline-success" type="submit" onClick={() => changeView("search")}>Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';

const Navbar = ({ changeView }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarContainer}>
        <a style={styles.navbarBrand} href="#" onClick={() => changeView("home")}>Home</a>
        <button style={styles.navbarToggler}>
          {/* <span style={styles.navbarTogglerIcon}></span> */}
        </button>
        <div style={styles.navbarCollapse}>
          <ul style={styles.navbarNav}>
            <li style={styles.navItem}>
              <a style={styles.navLink} href="#" onClick={() => changeView("add")}>Add Product</a>
            </li>
            <li style={styles.navItem}>
              <a style={styles.navLink} href="#" onClick={() => changeView("update")}>Update Product</a>
            </li>
          </ul>
          <form style={styles.searchForm}>
            <input style={styles.searchInput} type="search" placeholder="Search" aria-label="Search"/>
            <button style={styles.searchButton} type="submit" onClick={() => changeView("search")}>Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

// Styles
const styles = {
  navbar: {
    backgroundColor: '#2c3e50',
    padding: '10px 20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  navbarBrand: {
    color: '#ecf0f1',
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  navbarToggler: {
    display: 'none', // Hide for now, can be styled for mobile
  },
  navbarCollapse: {
    display: 'flex',
    alignItems: 'center',
  },
  navbarNav: {
    display: 'flex',
    listStyle: 'none',
    margin: '0',
    padding: '0',
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#3498db',
  },
  searchForm: {
    display: 'flex',
    marginLeft: '20px',
  },
  searchInput: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  searchButton: {
    padding: '8px 16px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  searchButtonHover: {
    backgroundColor: '#2980b9',
  },
};

export default Navbar;