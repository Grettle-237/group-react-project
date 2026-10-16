import React from "react"
function Profilecard({ name, price, stock}){
    return(

<div className="grid">
    
    <h2>name: {name}</h2>
    <h2>price: {price}</h2>
    <h2>stock: {stock}</h2>
    
</div>
)
}
export default Profilecard