import { useState } from "react";

export default function ProductList(){
  const [products] = useState([
    { id: 1, name: "Apple", price: 5 },
    { id: 2, name: "Banana", price: 3 },
    { id: 3, name: "Grapes", price: 12 },
    { id: 4, name: "Orange", price: 8 },
  ]);
  
  const affordableProducts = products.filter((product) => product.price < 10);

  return (
    <div>
      <h1>Products Under $10</h1>
      {affordableProducts.map((product) => (
        <div key={product.id}>
          {product.name} - ${product.price}
        </div>
      ))}
    </div>
  );
};

