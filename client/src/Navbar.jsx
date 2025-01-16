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