export default function ShoppingList(){
    const shops=[
        {id:1,item:"Powder",price:"140"},
        {id:2,item:"Pencil",price:"12"},
        {id:3,item:"Eraser",price:"5"},
        {id:4,item:"ink",price:"130"},
        {id:5,item:"Box",price:"60"},
    ]
    return(
        <>
        <h1>Shopping Cart</h1>
        <ul>{shops.map((shopitem)=>(<li>{shopitem.item} - {shopitem.price}</li>))}</ul>
        </>
    )
}