import { useState } from "react";
import { formatCompactNumber } from "../utils/mathCompacter";

function Balance() {
  const [number, setNumber] = useState(0);


  return (
    <div>
      <label htmlFor="balance">{formatCompactNumber(number)}$</label>
      <button onClick={() => setNumber(prev => prev + 100000)}>Increase</button>
    </div>
  );
}

export default Balance;
