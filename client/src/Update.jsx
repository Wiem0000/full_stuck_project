import React,{useState} from 'react'
import './Home.css';

function Update({handelUpdate,changeView}) {
    // console.log("handel update",handelUpdate);
    // console.log("ellement update",element);
    
 const [name,setName]=useState("")
     const [imageUrl,setImage]=useState("")
     const [quantité,setquantities]=useState(0)
     const [price,setPrice]=useState(0)
     const [idd,setid]=useState(null)
    //  console.log(name);
   return (
    <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',minHeight: '100vh',backgroundColor: '#f0f0f0'}}>
    <div style={{backgroundColor: 'pink',borderRadius: '10px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',width: '300px'}}>
<h1>UPDATE :</h1>
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Update your article name" onChange={(e)=>{setName(e.target.value)}}/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">imageURL</label>
  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Update your image" onChange={(e)=>{setImage(e.target.value)}}/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Quantity</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Update your article quantity" onChange={(e)=>{setquantities(e.target.value)}}/>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Price</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Update your price PLEASE" onChange={(e)=>{setPrice(e.target.value)}}/>
</div>
      <div>
      <button onClick={()=>{handelUpdate({name:name,imageUrl:imageUrl,quantity:quantité,price:price}),changeView("home")}}>update</button>
 </div>
 
 
     </div>
     </div>
     
   )
   
}

export default Update
