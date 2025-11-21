import { useEffect, useState } from "react";
import "../../styles/pagestyles.css";
import { getAllUser } from "../../api/adminApi";
import { refresh } from "../../api/authApi";

function Country() {
  const [data, setData] = useState();
  const [token, setToken] = useState();



async function refreshTokes(){
    const tokes = await refresh();
    setToken(tokes);
  }

useEffect(()=>{
 async function handleGetUser(){
    const users = await getAllUser();
    setData(JSON.stringify(users));
  }
  handleGetUser();
},[])
 

  return (
    <main className="stuff">
      <h2>Admin page</h2>
      <button onClick={() => refreshTokes()}>refresh</button>
      <p>Users:</p>
      <pre>{data}</pre>
    </main>
  );
}

export default Country;
