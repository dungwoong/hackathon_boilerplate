import { useState } from "react";
import { LOGIN_URL, NEXT_SERVER_URL } from "@/util/constants";

// Take functions for setting login state, setting token
export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setShowError(false);
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      setShowError(true);
      setIsLoggingIn(false);
    }

    const data = await response.json();

    if (!data.accessToken) {
      setShowError(true);
      setIsLoggingIn(false);
    } else {
      setToken(data.accessToken);
    }
  };

  return (
    <div>
      {!isLoggingIn && (
        <>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button onClick={handleLogin}>Submit</button>
        </>
      )}
      {showError && <p>Login Failed!</p>}
    </div>
  );
}
