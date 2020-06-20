import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Feather, AuthenticationForm } from "feather-client-react";

const config = {
  signIn: {
    title: "Sign in to your account",
    inputs: {
      email: {
        title: "Email"
        // placeholder: "janedoe@email.com"
      },
      // username: {},
      password: {
        // title: "Password",
        // placeholder: "p4ssw0rd",
        // forgotPasswordButtonTitle: "I forget!"
      }
    },
    submitButtonTitle: "Next"
  },
  signUp: {
    title: "Create an account",
    subtitle: "Please provide ...",
    inputs: {
      email: {
        title: "Email",
        placeholder: "janedoe@email.com"
      },
      password: {
        title: "Password"
        // placeholder: "password"
      },
      confirmPassword: {
        title: "Confirm password"
        // placeholder: "password"
      }
    },
    submitButtonTitle: "Next"
  },
  forgotPassword: {
    title: "Reset password",
    inputs: {
      email: {}
    },
    cancelButtonTitle: "Cancel"
  }
};

const styles = {
  container: provided => ({
    ...provided,
    backgroundColor: "#f00",
    fontFamily: "Courier",
    padding: "0px",
    ":hover": {
      background: "#0f0"
    }
  }),
  title: provided => ({
    fontSize: "5em"
  }),
  inputTitle: provided => ({
    ...provided,
    fontFamily: "Arial"
  })
};

function App() {
  const apiKey = "live_ZkPKKTbXR2MkJ0RIiueGVWGZA9yBJM";
  const config = { host: "localhost", port: "8080", protocol: "http" };
  const feather = Feather(apiKey, config);

  feather.onStateChange((session, user) => {
    console.log("On state change: ");
    console.log(session);
    console.log(user);

    // feather
    //   .signIn({
    //     type: "email|password",
    //     email: "asdf@test.com",
    //     password: "password"
    //   })
    //   .catch(error => console.log(error));

    // const email = "asdfg@test.com";
    // const redirectUrl = "https://localhost:3000/verify";
    // feather
    //   .sendForgotPasswordLink({ email, redirectUrl })
    //   .catch(error => console.log(error));

    // feather
    //   .confirmForgotPasswordLink(
    //     "localhost:3000?code=crSSXCUyNt2DiCp458wh",
    //     "newpass"
    //   )
    //   .catch(error => console.log(error));

    // feather.sendEmailVerificationLink().catch(error => console.log(error));

    // feather
    //   .confirmEmailVerificationLink(
    //     "http://localhost:3000/verify?code=6YBMKlSQdudEiuhuM3Lo"
    //   )
    //   .catch(error => console.log(error));

    // const email = "asdfg@test.com";
    // const redirectUrl = "https://localhost:3000/verify";
    // feather
    //   .sendSignInLink({ email, redirectUrl })
    //   .catch(error => console.log(error));

    // feather
    //   .confirmSignInLink("https://feather.id/verify?code=52tYfIh0aoRqfaouS1cc")
    //   .catch(error => console.log(error));

    // feather
    //   .signInAnonymously()
    //   .then(() => {})
    //   .catch(error => {
    //     console.log(error);
    //   });
  });

  return (
    <div className="App">
      <h1>DEMO</h1>
      <AuthenticationForm />
    </div>
  );
}

export default App;
