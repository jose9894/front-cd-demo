import { useState } from "react";

function Balance() {
  const [number, setNumber] = useState(0);

  function formatCompactNumber(n) {
    if (n < 1000) return n;
    if (n < 1_000_000) return (n / 1000).toFixed(1) + "K";
    if (n < 1_000_000_000) return (n / 1_000_000).toFixed(1) + "M";
    if (n < 1_000_000_000_000) return (n / 1_000_000_000).toFixed(1) + "B";
    return (n / 1_000_000_000_000).toFixed(1) + "T";
  }

  return (
    <div>
      <label htmlFor="balance">{formatCompactNumber(number)}$</label>
      <button onClick={() => setNumber(prev => prev + 100000)}>Increase</button>
    </div>
  );
}

export default Balance;
