import { SIGNUP_URL } from "@/util/constants";
import { useState } from "react";
import { tryLogin } from "../login/loginUtils";

export default function SignupForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState(false);

  const handleLogin = async () => {
    setSignupError(false);
    const response = await fetch(SIGNUP_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      setSignupError(true);
      return;
    }

    const loginResponse = await tryLogin(username, password);
    if (!loginResponse.ok) {
      setSignupError(true);
      return;
    }
    const data = await loginResponse.json();

    if (!data.accessToken) {
      setSignupError(true);
    } else {
      setToken(data.accessToken);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={handleLogin}>Submit</button>
    </div>
  );
}
