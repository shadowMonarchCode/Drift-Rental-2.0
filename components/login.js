import React, { Fragment} from "react";
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

  return (
    <Fragment>
      {/* <ErrorModal error={error} onClear={clearError} /> */}
      <Card className={classes.authentication}>
        {isLoading && <LoadingSpiner asOverlay />}
        <form onSubmit={authSubmitHandler}>
          <h2>Login</h2>
          <hr />

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
            LOGIN
          </PrimaryButton>
        </form>
      </Card>
    </Fragment>
  );
};

export default Auth;
