// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import List from "./Listproducts.jsx";
// import AddProduct from './addproduct.jsx';
// import Update from "./Update.jsx";
// import Search from "./search.jsx";
// import Navbar from './Navbar.jsx';
// import SignUp from './signUp.jsx';
// import Login from './Login.jsx';
// import './Home.css';

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [view, setView] = useState("signup");
//   const [idd, setIdd] = useState(null);
//   const [ktibaserach, setSearch] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const fetchProducts = () => {
//     axios
//       .get("http://localhost:3000/api/prod/getAll")
//       .then((res) => setProducts(res.data))
//       .catch((error) => console.log("Error fetching products:", error));
//   };

//   useEffect(() => {
//     if (isLoggedIn) {
//       fetchProducts();
//     }
//   }, [isLoggedIn]);

//   const handleAdd = (body) => {
//     axios
//       .post("http://localhost:3000/api/prod/add", body)
//       .then(() => {
//         console.log("Product added successfully");
//         fetchProducts();
//       })
//       .catch((error) => console.log("Error adding product:", error));
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:3000/api/prod/delete/${id}`)
//       .then(() => {
//         console.log("Product deleted successfully");
//         fetchProducts();
//       })
//       .catch((error) => console.log("Error deleting product:", error));
//   };

//   const handleUpdate = (body) => {
//     axios
//       .put(`http://localhost:3000/api/prod/update/${idd}`, body)
//       .then(() => {
//         console.log("Product updated successfully");
//         fetchProducts();
//       })
//       .catch((error) => console.log("Error updating product:", error));
//   };

//   const changeView = (view) => {
//     setView(view);
//   };

//   const getId = (id) => {
//     setIdd(id);
//   };

//   const handleSignUp = (view) => {
//     setView(view);
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     setView("home");
//   };

//   return (
//     <div style={styles.appContainer}>
//       {!isLoggedIn ? (
//         view === "signup" ? (
//           <SignUp onSignUp={() => handleSignUp("login")} />
//         ) : (
//           <Login onLogin={handleLogin} onSignUp={() => handleSignUp("signup")} />
//         )
//       ) : (
//         <>

//           <Navbar changeView={changeView} />

//           <div style={styles.contentContainer}>
//             {view === "add" ? (
//               <AddProduct changeView={changeView} handleAdd={handleAdd} />
//             ) : view === "home" ? (
//               <List
//                 getId={getId}
//                 changeView={changeView}
//                 products={products}
//                 handleDelete={handleDelete}
//               />
//             ) : view === "update" ? (
//               <Update changeView={changeView} handleUpdate={handleUpdate} />
//             ) : (
//               <Search ktibaserach={ktibaserach} products={products} />
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// // Styles
// const styles = {
//   appContainer: {
//     fontFamily: 'Arial, sans-serif',
//     backgroundColor: '#f4f4f4',
//     minHeight: '100vh',
//   },
//   searchContainer: {
//     padding: '20px',
//     backgroundColor: '#fff',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//   },
//   searchInput: {
//     width: '300px',
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     fontSize: '16px',
//   },
//   contentContainer: {
//     padding: '20px',
//   },
// };

// export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import List from "./Listproducts.jsx";
// import AddProduct from './addproduct.jsx';
// import Update from "./Update.jsx";
// import Search from "./search.jsx";
// import Navbar from './Navbar.jsx';
// import SignUp from './signUp.jsx';
// import Login from './Login.jsx';
// import './Home.css';

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [view, setView] = useState("signup");
//   const [idd, setIdd] = useState(null);
//   const [ktibaserach, setSearch] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const fetchProducts = () => {
//     axios
//       .get("http://localhost:3000/api/prod/getAll")
//       .then((res) => setProducts(res.data))
//       .catch((error) => console.log("Error fetching products:", error));
//   };

//   useEffect(() => {
//     if (isLoggedIn) {
//       fetchProducts();
//     }
//   }, [isLoggedIn]);

//   const handleAdd = (body) => {
//     axios
//       .post("http://localhost:3000/api/prod/add", body)
//       .then(() => {
//         console.log("Product added successfully");
//         fetchProducts();
//       })
//       .catch((error) => console.log("Error adding product:", error));
//   };

//   const handleDelete = (id) => {
//     axios
//       .delete(`http://localhost:3000/api/prod/delete/${id}`)
//       .then(() => {
//         console.log("Product deleted successfully");
//         fetchProducts();
//       })
//       .catch((error) => console.log("Error deleting product:", error));
//   };

//   const handleUpdate = (body) => {
//     axios
//       .put(`http://localhost:3000/api/prod/update/${idd}`, body)
//       .then(() => {
//         console.log("Product updated successfully");
//         fetchProducts();
//       })
//       .catch((error) => console.log("Error updating product:", error));
//   };

//   const changeView = (view) => {
//     setView(view);
//   };

//   const getId = (id) => {
//     setIdd(id);
//   };

//   const handleSignUp = (view) => {
//     setView(view);
//   };

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     setView("home");
//   };

//   return (
//     <div style={styles.appContainer}>
//       {!isLoggedIn ? (
//         view === "signup" ? (
//           <SignUp onSignUp={() => handleSignUp("login")} />
//         ) : (
//           <Login onLogin={handleLogin} onSignUp={() => handleSignUp("signup")} />
//         )
//       ) : (
//         <>
//           <Navbar changeView={changeView} />

//           {/* Search Input Field */}
//           <div style={styles.searchContainer}>
//             <input
//               type="text"
//               placeholder="Search products..."
//               style={styles.searchInput}
//               value={ktibaserach}
//               onChange={(e) => setSearch(e.target.value.toLowerCase().trim())} // Normalize search term
//             />
//           </div>

//           <div style={styles.contentContainer}>
//             {view === "add" ? (
//               <AddProduct changeView={changeView} handleAdd={handleAdd} />
//             ) : view === "home" ? (
//               <List
//                 getId={getId}
//                 changeView={changeView}
//                 products={products}
//                 handleDelete={handleDelete}
//               />
//             ) : view === "update" ? (
//               <Update changeView={changeView} handleUpdate={handleUpdate} />
//             ) : (
//               <Search ktibaserach={ktibaserach} products={products} />
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// // Styles
// const styles = {
//   appContainer: {
//     fontFamily: 'Arial, sans-serif',
//     backgroundColor: '#f4f4f4',
//     minHeight: '100vh',
//   },
//   searchContainer: {
//     padding: '20px',
//     backgroundColor: '#fff',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//   },
//   searchInput: {
//     width: '300px',
//     padding: '10px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     fontSize: '16px',
//   },
//   contentContainer: {
//     padding: '20px',
//   },
// };

// export default App;

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
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("signup");
  const [idd, setIdd] = useState(null);
  const [ktibaserach, setSearch] = useState("");
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
        fetchProducts();
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
    setView(view);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setView("home");
  };

  return (
    <div style={styles.appContainer}>
      {!isLoggedIn ? (
        view === "signup" ? (
          <SignUp onSignUp={() => handleSignUp("login")} />
        ) : (
          <Login onLogin={handleLogin} onSignUp={() => handleSignUp("signup")} />
        )
      ) : (
        <>
          {/* Pass ktibaserach and setSearch to Navbar */}
          <Navbar changeView={changeView} ktibaserach={ktibaserach} setSearch={setSearch} />

          <div style={styles.contentContainer}>
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
          </div>
        </>
      )}
    </div>
  );
};

// Styles
const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  contentContainer: {
    padding: '20px',
  },
};

export default App;