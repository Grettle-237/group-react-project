import Profilecard from "../components/profilecard/ProfileCard";

const products =[
    {id: 1, name: "laptop Bag", price: 1200, stock: 4},
    {id: 2, name: "Wireless Mouse", price: 6500, stock: 0},
    {id: 3, name: "USB-C Hub", price: 1500,stock:7},
];
function Demo(){
    return(
        <div className="grid">
            {products.map((product) => (
               < Profilecard
                key={product.id}
              name={product.name}
                price={product.price}
                stock={product.stock}
            />
           ) )}
        </div>
    )
}


export default Demo