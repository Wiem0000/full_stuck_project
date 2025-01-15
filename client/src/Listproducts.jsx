import React,{useState} from 'react'
import Update from './Update.jsx';
// import '../styles/Auth.css'
import './Home.css';


function Listproducts({products,handleDelete,handleUpdate,changeView,getId}) {
  // console.log("products in list",products);
 
  
 

  return (
    <div  style={{
      display: 'flex',
      flexWrap: 'wrap', // For cards to wrap if there are many
      justifyContent: 'center', // Centers horizontally
      alignItems: 'center', // Centers vertically
      minHeight: '100vh', // Ensures full-screen height
      backgroundColor: '#f9f9f9', // Optional background color
    }}>
{products.map((element,i)=>{
 const hundelAll=()=>{
   getId(element.id)
   return changeView("update")
 }
 return(
  
  <div style={{
    width: '18rem',
    margin: '10px', // Adds space between cards
    backgroundColor: 'pink',
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Adds shadow
  }}
  key={element.id}>
<div class="card" style={{width: "18rem" , backgroundColor: 'pink'}}>
  <img src={element.imageUrl} class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">{element.name}</h5>
    <p class="card-text">price :{element.price}</p>
    <p class="card-text">quantity :{element.quantity}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <button onClick={()=>{handleDelete(element.id)}}>delete</button>
<button onClick={()=>(hundelAll())}>update</button>

  </div>
</div>


</div>
 )
}
 )
 
 }



    </div>
  )
}

export default Listproducts
