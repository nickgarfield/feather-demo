import React from "react";
import {
  PasswordAuthenticationForm,
  PasswordlessAuthenticationForm,
  withFeather
} from "feather-client-react";

function SignIn(params) {
  return (
    <PasswordlessAuthenticationForm
      feather={params.feather}
      redirectUrl="http://localhost:3000/v"
    />
  );
}

export default withFeather(SignIn);
