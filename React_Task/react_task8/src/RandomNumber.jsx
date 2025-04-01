import { useState, useEffect } from "react";

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.random());
  }, []);

  return <div>Random Number: {randomNumber}</div>;
}

export default RandomNumber;
