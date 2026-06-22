import React, { useState } from 'react'
import UserContext from "../Context/UserContext";
function Login() {
  const { setUser } = React.useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); 
    setUser({ username, password });
  };

  return (
    <div style={ { display: "flex", flexDirection: "column", gap: "10px", width: "400px", margin: "20px auto" , marginTop: "200px", border: "1px solid #ccc", padding: "20px" } }>
      <h2>Login page</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
