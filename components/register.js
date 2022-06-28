import React, { Fragment } from "react";
// import { useDispatch } from "react-redux";
// import { authActions } from "../store/auth-slice";

import useHttp from "../hooks/http-hook";
import useForm from "../hooks/form-hook";
import PrimaryButton from "./Buttons";
import Input from "./Input";
import Card from "./Card";
// import ErrorModal from "../shared/UI/ErrorModal";
import LoadingSpiner from "./LoadingSpinner";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../util/validators";

import classes from "./Auth.module.css";

const Auth = () => {
  //   const dispatch = useDispatch();

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
      //   dispatch(
      //     authActions.login({
      //       userId: responseData.userId,
      //       token: responseData.token,
      //     })
      //   );
    } catch (err) {}
  };

  return (
    <Fragment>
      {/* <ErrorModal error={error} onClear={clearError} /> */}
      <Card className={classes.authentication}>
        {isLoading && <LoadingSpiner asOverlay />}
        <form onSubmit={authSubmitHandler}>
          <h2>Register</h2>
          <hr />

          <Input
            id="firstName"
            type="text"
            label="Your FirstName"
            element="input"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
            errorText="Please enter a firstName."
            onInput={inputHandler}
          ></Input>

          <Input
            id="lastName"
            type="text"
            label="Your LastName"
            element="input"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(2)]}
            errorText="Please enter a LastName."
            onInput={inputHandler}
          ></Input>

          <Input
            id="email"
            type="text"
            label="E-Mail"
            element="input"
            validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
            errorText="Please Provide a valid Email."
            onInput={inputHandler}
          ></Input>

          <Input
            id="password"
            type="password"
            label="Password"
            element="input"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please provide a valid password, at least 6 character."
            onInput={inputHandler}
          ></Input>

          <PrimaryButton type="submit" disabled={!formState.isValid}>
            Register
          </PrimaryButton>
        </form>
      </Card>
    </Fragment>
  );
};

export default Auth;
