import QuoteProduce from "./QuoteProduce"
import MathTest from "./MathTest"
import Paragraph from "./Paragraph"
import Product from "./Product" 

function App() {
  const date= new Date().toDateString()
  return(
    <>
      <div>{date}</div>
      <QuoteProduce/>
      <MathTest/>
      <Paragraph/>
      <Product/>
    </>
  )
 
}

export default App
