import { useEffect, useState } from "react";
import "../../styles/pagestyles.css";
import { CSVLink } from "react-csv";
import {
  GetAllUserDepositAsync,
  GetAllUserTransactionAsync,
} from "../../api/userApi";

function Geo() {
  const [depositData, setDepositData] = useState([]);
  const [transactionData, setTransactionData] = useState([]);
  const [choice, setChoice] = useState("Transaction");

  const headersDeposit = [
    { label: "Id", key: "depositId" },
    { label: "Date", key: "date" },
    { label: "Amount", key: "amount" },
  ];

  const headersTransaction = [
    { label: "Id", key: "transactionId" },
    { label: "Date", key: "date" },
    { label: "Amount", key: "amount" },
    { label: "Name", key: "gameName" },
  ];

  useEffect(() => {
    async function handleGetUserInfo() {
      const deposit = await GetAllUserDepositAsync();
      if (deposit) {
        setDepositData(deposit);
      }
      const transaction = await GetAllUserTransactionAsync();
      if (transaction) {
        setTransactionData(transaction);
        // setTransactionData([]);
      }
    }
    handleGetUserInfo();
  }, []);

  return (
    <main className="stuff">
      <h2>User page</h2>
      <div className="export">
      <select
        className="picker-select"
        value={choice}
        onChange={(e) => setChoice(e.target.value)}
      >
        <option>Deposit</option>
        <option>Transaction</option>
      </select>
      <CSVLink
        data={choice === "Deposit" ? depositData : transactionData}
        headers={choice === "Deposit" ? headersDeposit : headersTransaction}
        filename={choice === "Deposit" ? "Deposit.csv" : "Transaction.csv"}
      >
        <button onClick={(e)=>
        {
          const cond = choice === "Deposit" ? (depositData.length === 0) : (transactionData.length === 0) 
          if(cond)
            { e.preventDefault();
              alert("No data available to export");
            }
          }
        }
          >Export</button>
      </CSVLink>
      
      </div>
    </main>
  );
}

export default Geo;
