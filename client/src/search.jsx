// import React from 'react'
// import './Home.css';

// function search({products,ktibaserach}) {
//     // console.log(products,"hey there");
//     // console.log(ktibaserach,"ktibaaaaa");
//    const filterr= products.filter((element)=>(element.name.includes(ktibaserach))) 

    
//   return (
//     <div>
//       {filterr.map((element)=>(
// <div key={element.id}>
// <h1>{element.name}</h1>
// <img style={{width:"100px"}} src={element.imageUrl} />
// <p>{element.price}</p>

// </div>
//       ))
      
//       }

//     </div>
//   )
// }

// export default search

import React from 'react';
import './Home.css';

function Search({ products, ktibaserach }) {
  console.log(products,"hey there");
console.log(ktibaserach,"ktibaaaaa");
  // Filter products based on the search term (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(ktibaserach.toLowerCase().trim())
  );

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} style={styles.image} />
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}

// Simple inline styles
const styles = {
  productCard: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    width: '200px',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
};

export default Search;