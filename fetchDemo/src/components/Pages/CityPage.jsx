import { useEffect, useState } from "react";
import { login } from "../../api/authApi";
import { jwtDecode } from "jwt-decode";
import "../../styles/pagestyles.css";

function City() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

 
async function handleLogin() { 
    if (!name || !password) return;

      try {
        const respone = await login(name, password);
        setData(JSON.stringify(respone));
          const decode = jwtDecode(respone.jwTtoken);
        console.log(decode);
        const role = decode["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        console.log(role);
      } catch (err) {
        console.error("Error logging in:", err);
      }
    }
   

  

  return (
    <main className="stuff">
      <h2>Login page</h2>
      <div className="info">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="username"/>
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"/>
        <br />
        <button onClick={() => handleLogin()}>Confirm</button>
      </div>
      <p>Tokens:</p>
      <p>{data}</p>
    </main>
  );
};

export default City;
