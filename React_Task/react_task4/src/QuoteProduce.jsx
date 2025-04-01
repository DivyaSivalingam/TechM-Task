import { useState } from "react";


function QuoteProduce()
{
    const quotes = [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Do not wait to strike till the iron is hot, but make it hot by striking.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "In the middle of every difficulty lies opportunity."
      ];
    // const getRandomQuote=()=> quotes[Math.floor(Math.random()*quotes.length)];
    // const handleNewQuote = () => {
      //setQuote(getRandomQuote());
    // };
    function getRandomQuote() {
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
    
    const [quote, setQuote] = useState(getRandomQuote());

    function handleNewQuote()
    {
      setQuote(getRandomQuote());
    }
    return(
      <>
      <h1>A new quote for You</h1>
      <button onClick={handleNewQuote}>New one</button>
      <p>{quote}</p> 
      </>
    )
    }

export default QuoteProduce