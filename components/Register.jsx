import React from "react";
import Link from "next/link";
import useHttp from "../hooks/http-hook";
import useForm from "../hooks/form-hook";
import * as Validators from "../util/validators";

const { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } = Validators;

const Register = () => {
  const { isLoading, error, clearError, sendRequest } = useHttp();
  const [formState, inputHandler, setFormData] = useForm(
    {
      firstName: {
        value: "",
        isValid: false,
      },
      lastName: {
        value: "",
        isValid: false,
      },
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
      const formData = new FormData();
      formData.append("email", formState.inputs.email.value);
      formData.append("firstName", formState.inputs.firstName.value);
      formData.append("lastName", formState.inputs.lastName.value);
      formData.append("password", formState.inputs.password.value);

      const responseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/users/signup",
        {
          method: "POST",
          body: formData,
        }
      );
    } catch (err) {}
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
        <h1>Register</h1>
        <h3>Let's get you started here! Start with setting up an account.</h3>
      </div>
      <div style={{ flex: 4 }}>
        <form onSubmit={authSubmitHandler}>
          <div className="input">
            <p className="title">Username</p>
            <input
              id="firstName"
              type="text"
              label="Your FirstName"
              element="input"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
              errorText="Please enter a firstName."
              onInput={inputHandler}
              placeholder="e.g., Karan Johr"
            />
          </div>
          <div className="input">
            <p className="title">Email</p>
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
          </div>
          <div className="input">
            <p className="title">Confirm Password</p>
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
          </div>
          <button className="btn" type="submit" disabled={!formState.isValid}>
            Register
          </button>
        </form>
      </div>
      <span>
        Have an account? <a className="link">Login</a> here!
      </span>
    </div>
  );
};

export default Register;
