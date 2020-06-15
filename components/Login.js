import React, { useState } from "react";
import { login } from "../utils";
import { useHistory } from "react-router-dom";

const initialState = {
  username: "",
  password: ""
};

const Login = props => {
  const { push } = useHistory();
  const [formState, setFormState] = useState(initialState);
  const [error, setError] = useState("");
  const inputHandler = e => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  const submitHandler = e => {
    e.preventDefault();
    login(formState)
      .then(res => {
        console.log(res);
        push("/users");
      })
      .catch(err => {
        setError(err.message);
      });
  };
  return (
    <div className="Login">
      <form onSubmit={submitHandler}>
        <legend>Login:</legend>
        <div>
          <label>
            Username:&nbsp;
            <input
              type="text"
              name="username"
              value={formState.username}
              onChange={inputHandler}
            />
          </label>
        </div>
        <div>
          <label>
            Password:&nbsp;
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={inputHandler}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <div className="error">{error}</div>
    </div>
  );
};

export default Login;
