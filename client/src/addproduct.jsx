import React, { useState } from 'react'
import './Home.css';

function addProduct({handleAdd,changeView}) {
    const [name,setName]=useState("")
    const [imageUrl,setImage]=useState("")
    const [quantité,setquantities]=useState(0)
    const [price,setPrice]=useState(0)
    console.log("addddddd");
  return (
    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',minHeight: '100vh',backgroundColor: '#f0f0f0'}}>
    <div style={{backgroundColor: 'pink',borderRadius: '10px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',width: '300px'}}>
<h1>ADD :</h1>
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Add your article name" onChange={(e)=>{setName(e.target.value)}}/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">imageURL</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Add your image" onChange={(e)=>{setImage(e.target.value)}}/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Quantity</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Add your article quantity" onChange={(e)=>{setquantities(e.target.value)}}/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Price</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Add your price PLEASE" onChange={(e)=>{setPrice(e.target.value)}}/>
  <button onClick={()=>{handleAdd({name:name,imageUrl:imageUrl,quantity:quantité,price:price}),changeView("home")}}>Add</button>
</div>
</div>
    



    </div>
    
  )
  
  
}

export default addProduct

// import React, { useState } from 'react'

// function addProduct({handelAdd,changeview}) {
//     // console.log(handelAdd,"addddddd");
//     const [name,setName]=useState("")
//     const [imageUrl,setImage]=useState("")
//     const [quantité,setquantities]=useState(0)
//     const [price,setPrice]=useState(0)
//     // console.log(name);
//   return (
//     <div style={{backgroundColor: 'green'}}>
//         <h1> name</h1>
//      <input onChange={(e)=>{setName(e.target.value)}}></input>
//      <h1> imageUrl</h1>
//      <input onChange={(e)=>{setImage(e.target.value)}}></input>
//      <h1> quantity</h1>
//      <input onChange={(e)=>{setquantities(e.target.value)}}></input>
//      <h1> Price</h1>
//      <input onChange={(e)=>{setPrice(e.target.value)}}></input>
//      <button onClick={()=>{handelAdd({name:name,imageUrl:imageUrl,quantity:quantité,price:price}),changeview("home")}}>Add</button>



//     </div>
    
//   )
  
  
// }

// export default addProduct

