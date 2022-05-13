import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/dashboard", { replace: true });
  };

  useEffect(() => {
    if (window.localStorage.getItem("username")) {
      goToDashboard();
    }
  }, []);

  const submit = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username.startsWith("admin_") && password === "1234") {
      window.localStorage.setItem("username", username);
      goToDashboard();
    }
  };

  return (
    <>
      <div>Login</div>
      <input ref={usernameRef} placeholder="username" />
      <input ref={passwordRef} placeholder="password" type="password" />
      <button onClick={submit}>submit</button>
    </>
  );
};

export default Login;