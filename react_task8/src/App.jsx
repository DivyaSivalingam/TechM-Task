import Clock from "./Clock"
import RandomNumber from "./RandomNumber"
import Timer from "./Timer"
import Profile from "./Profile"


function App() {
  return(
    <>
    <RandomNumber/>
    <Clock/>
    <Timer/>
    <Profile userId={1}/>
    </>
  )
  
}

export default App
