import DisplayNames from "./DisplayNames";
import DisplayTask from "./DisplayTask"
import ProductList from "./ProductList";
import UserList from "./UserList";
import ShoppingList from "./ShoppingList";


function App() {

  const name=["john","raj","mohan"];
  return (
    <>
    <DisplayNames list={name}/>
    <DisplayTask/>
    <ProductList/>
    <UserList/>
    <ShoppingList/>
    </>
  )
}

export default App
