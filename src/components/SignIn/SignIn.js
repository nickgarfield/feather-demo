import React from "react";
import { AuthenticationForm, withFeather } from "feather-client-react";

function SignIn(params) {
  return (
    <AuthenticationForm
      feather={params.feather}
      redirectUrl="http://localhost:3000/v"
      factors="email_verification"
    />
  );
}

export default withFeather(SignIn);
