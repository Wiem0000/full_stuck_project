import React from 'react';

function Listproducts({ products, handleDelete, handleUpdate, changeView, getId }) {
  return (
    <div style={styles.container}>
      {products.map((element) => {
        const handleUpdateClick = () => {
          getId(element.id);
          changeView("update");
        };

        return (
          <div style={styles.card} key={element.id}>
            <img src={element.imageUrl} alt={element.name} style={styles.image} />
            <div style={styles.cardBody}>
              <h5 style={styles.cardTitle}>{element.name}</h5>
              <p style={styles.cardText}>Price: ${element.price}</p>
              <p style={styles.cardText}>Quantity: {element.quantity}</p>
              <div style={styles.buttonGroup}>
                <button style={styles.deleteButton} onClick={() => handleDelete(element.id)}>
                  Delete
                </button>
                <button style={styles.updateButton} onClick={handleUpdateClick}>
                  Update
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5', // Light gray background
    padding: '20px',
  },
  card: {
    width: '18rem',
    margin: '10px',
    backgroundColor: '#ffffff', // White background
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover', // Ensures the image covers the area
  },
  cardBody: {
    padding: '15px',
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#333333', // Dark gray text
    marginBottom: '10px',
  },
  cardText: {
    fontSize: '16px',
    color: '#555555', // Medium gray text
    marginBottom: '10px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  deleteButton: {
    flex: 1,
    padding: '10px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#ff6b6b', // Soft red background
    color: '#ffffff', // White text
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  deleteButtonHover: {
    backgroundColor: '#ff4757', // Darker soft red on hover
  },
  updateButton: {
    flex: 1,
    padding: '10px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#4b7bec', // Soft blue background
    color: '#ffffff', // White text
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  updateButtonHover: {
    backgroundColor: '#3867d6', // Darker soft blue on hover
  },
};

export default Listproducts;
