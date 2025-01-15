import React from 'react'
import './Home.css';

function search({products,ktibaserach}) {
    console.log(products,"hey there");
    console.log(ktibaserach,"ktibaaaaa");
   const filterr= products.filter((element)=>(element.name.includes(ktibaserach))) 
    console.log("filter",filterr);
    
  return (
    <div>
      {filterr.map((element)=>(
<div key={element.id}>
<h1>{element.name}</h1>
<img style={{width:"100px"}} src={element.imageUrl} />
<p>{element.price}</p>

</div>
      ))
      
      }

    </div>
  )
}

export default search
