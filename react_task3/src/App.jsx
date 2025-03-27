import { useState } from 'react'
import "./App.css"
import Header from './header'
import Footer from './Footer'

function App() {


  return (
    <>

      <Header/>
      <ul>
        <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROYH-uaHxJxZllD4i4p-a6Jx_gDHTAudnBxQ&s" alt="StrawBerry image"/>
          <h4>StrawBerry</h4>
        </li>
        <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3AUZIG7oN1CmrsWnfqSDhsU3snSxS4Od2ZA&s" alt="Custard Apple" />
          <h4>Custard Apple</h4>
        </li>
        <li>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiriSaQSLx0wVzVaS0sOAWTAOdaak2tqtNJw&s" alt="Star Fruit" />
          <h4>Star Fruits</h4>
        </li>
      </ul>

      <a href="https://www.kediaorganic.com/collections/juicy-fruits?srsltid=AfmBOoqoMsb6L8kcDWunPJ5em2qyDzf2GyZL35ppewyfxo5vhW6zjR8X">Fruit Shop</a>
      <Footer/>
    </>
  )
}

export default App
