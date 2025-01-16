import React, { useState } from 'react';

function AddProduct({ handleAdd, changeView }) {
  const [name, setName] = useState("");
  const [imageUrl, setImage] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const handleSubmit = () => {
    handleAdd({ name, imageUrl, quantity, price });
    changeView("home");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Add Product</h1>
        <div style={styles.formGroup}>
          <label style={styles.label}>Name</label>
          <input
            type="text"
            style={styles.input}
            placeholder="Enter product name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Image URL</label>
          <input
            type="text"
            style={styles.input}
            placeholder="Enter image URL"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Quantity</label>
          <input
            type="number"
            style={styles.input}
            placeholder="Enter quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Price</label>
          <input
            type="number"
            style={styles.input}
            placeholder="Enter price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button style={styles.button} onClick={handleSubmit}>
          Add Product
        </button>
      </div>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5', // Light gray background
    padding: '20px',
  },
  card: {
    backgroundColor: '#ffffff', // White background
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
    padding: '30px',
    width: '100%',
    maxWidth: '400px', // Limit card width
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#333333', // Dark gray text
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#555555', // Medium gray text
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #dddddd', // Light gray border
    borderRadius: '6px',
    fontSize: '14px',
    color: '#333333', // Dark gray text
    backgroundColor: '#f9f9f9', // Light gray background
    transition: 'border-color 0.3s ease',
  },
  inputFocus: {
    borderColor: '#6200ea', // Purple border on focus
    outline: 'none',
    backgroundColor: '#ffffff', // White background on focus
  },
  button: {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#6200ea', // Purple background
    color: '#ffffff', // White text
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#3700b3', // Darker purple on hover
  },
};

export default AddProduct;