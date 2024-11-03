import App from "@/components/app/app";
import Login from "@/components/login/loginForm";
import { checkTokenWithServer } from "@/components/login/loginUtils";
import SignupForm from "@/components/signUp/signupForm";
import { useEffect, useState } from "react";

const LoginState = {
  NOT_LOGGED_IN: 0,
  TRYING_LOGIN: 1,
  LOGGED_IN: 2,
};

export default function Home() {
  const [loginStatus, setLoginStatus] = useState(LoginState.NOT_LOGGED_IN);
  const [token, setTokenState] = useState(null);

  // Set token in localStorage and in the app. May not be the best tbh
  const setToken = (value) => {
    if (value === null) {
      window.localStorage.removeItem("accessToken");
    } else {
      window.localStorage.setItem("accessToken", value);
    }
    setTokenState(value);
  };

  const tryLogin = async () => {
    const isValidToken = await checkTokenWithServer(token);
    if (isValidToken) {
      setLoginStatus(LoginState.LOGGED_IN);
    } else {
      setToken(null);
      setLoginStatus(LoginState.NOT_LOGGED_IN);
    }
  };

  // Set this
  useEffect(() => {
    setToken(window.localStorage.getItem("accessToken"));
  }, []);

  useEffect(() => {
    if (!!token) {
      setLoginStatus(LoginState.TRYING_LOGIN);
      tryLogin();
    } else {
      setLoginStatus(LoginState.NOT_LOGGED_IN);
    }
  }, [token]);

  return (
    <div>
      {loginStatus === LoginState.NOT_LOGGED_IN && (
        <>
          <h1>Login</h1>
          <Login
            setToken={(value) => {
              setToken(value);
            }}
          ></Login>
          <h1>Signup</h1>
          <SignupForm
            setToken={(value) => {
              setToken(value);
            }}
          ></SignupForm>
        </>
      )}
      {loginStatus === LoginState.LOGGED_IN && (
        <App
          setToken={(value) => {
            setToken(value);
          }}
        ></App>
      )}
    </div>
  );
}
