import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./Listproducts.jsx";
import AddProduct from './addproduct.jsx';
import Update from "./Update.jsx";
import Search from "./search.jsx";
import Navbar from './Navbar.jsx';
import SignUp from './signUp.jsx';
import Login from './Login.jsx';
import './Home.css';

const App = () => {
  const [products, setProducts] = useState([])
  const [view, setView] = useState("signup");
  // const [view, setView] = useState("home")
  const [idd, setIdd] = useState(null)
  const [ktibaserach, setSearch] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const fetchProducts = () => {
    axios
      .get("http://localhost:3000/api/prod/getAll")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log("Error fetching products:", error));
  };


  useEffect(() => {
    if (isLoggedIn) {
      fetchProducts();
    }
  }, [isLoggedIn]);

  const handleAdd = (body) => {
    axios
      .post("http://localhost:3000/api/prod/add", body)
      .then(() => {
        console.log("Product added successfully");
        fetchProducts();
      })
      .catch((error) => console.log("Error adding product:", error));
  };


  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/prod/delete/${id}`)
      .then(() => {
        console.log("Product deleted successfully");
        fetchProducts()
      })
      .catch((error) => console.log("Error deleting product:", error));
  };

  const handleUpdate = (body) => {
    axios
      .put(`http://localhost:3000/api/prod/update/${idd}`, body)
      .then(() => {
        console.log("Product updated successfully");
        fetchProducts();
      })
      .catch((error) => console.log("Error updating product:", error));
  };

  const changeView = (view) => {
    setView(view);
  };

  const getId = (id) => {
    setIdd(id);
  };

  const handleSignUp = (view) => {
    setView(view); // Switch between sign-up and log-in views
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setView("home"); // Switch to the home page after login
  };
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

  console.log("hiiiiiiiiiiiii")
  return (
    <div>
      {!isLoggedIn ? (
        view === "signup" ? (
          <SignUp onSignUp={() => handleSignUp("login")} />
        ) : (
          <Login onLogin={handleLogin} onSignUp={() => handleSignUp("signup")} />)) : (
        <>
      <nav style={navStyle}>
      <span style={linkStyle} onClick={() => changeView("home")}>Home</span>
      <span style={linkStyle} onClick={() => changeView("add")}>Add Product</span>
      <span style={linkStyle} onClick={() => changeView("search")}>Search</span>
      <span style={linkStyle} onClick={() => changeView("update")}>Update Product</span>
    </nav>

      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      {view === "add" ? (
        <AddProduct changeView={changeView} handleAdd={handleAdd} />
      ) : view === "home" ? (
        <List
          getId={getId}
          changeView={changeView}
          products={products}
          handleDelete={handleDelete}
        />
      ) : view === "update" ? (
        <Update changeView={changeView} handleUpdate={handleUpdate} />
      ) : (
        <Search ktibaserach={ktibaserach} products={products} />
      )}
      </>
          )}
    </div>
  );
};

export default App;