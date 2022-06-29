import React from "react";
import Link from "next/link";
import useHttp from "../hooks/http-hook";
import useForm from "../hooks/form-hook";
import * as Validators from "../util/validators";

const { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } = Validators;

const Login = () => {
  const { isLoading, error, clearError, sendRequest } = useHttp();
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        }
      );
      //   dispatch(
      //     authActions.login({
      //       userId: responseData.userId,
      //       token: responseData.token,
      //     })
      //   );
    } catch (err) {}
  };

  // Error Messages
  let errorMessage = "This is an error!";

  const emailError = (errorMessage) => {
    return <p className="error">{errorMessage}</p>;
  };
  const passwordError = (errorMessage) => {
    return <p className="error">{errorMessage}</p>;
  };

  return (
    <div className="auth">
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Log In</h1>
        <h3>Welcome Back User! You are always welcomed at our Drift Rental.</h3>
      </div>
      <div style={{ flex: 4 }}>
        <form onSubmit={authSubmitHandler}>
          <div className="input">
            <p className="title">Username</p>
            <input
              id="email"
              type="text"
              label="E-Mail"
              element="input"
              validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
              errorText="Please Provide a valid Email."
              onInput={inputHandler}
              placeholder="example@gmail.com"
            />
            {errorMessage && emailError(errorMessage)}
          </div>
          <div className="input">
            <p className="title">Password</p>
            <input
              id="password"
              type="password"
              label="Password"
              element="input"
              validators={[VALIDATOR_MINLENGTH(6)]}
              errorText="Please provide a valid password, at least 6 character."
              onInput={inputHandler}
              placeholder="●●●●●●●●"
            />
            {errorMessage && passwordError(errorMessage)}
          </div>
          <button className="btn" type="submit" disabled={!formState.isValid}>
            Login
          </button>
        </form>
      </div>
      <span>
        Don't have an account yet? <a className="link">Register</a> now!
      </span>
    </div>
  );
};

export default Login;
