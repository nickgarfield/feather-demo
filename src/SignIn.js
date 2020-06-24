import React from "react";
import {
  PasswordAuthenticationForm,
  PasswordlessAuthenticationForm,
  withFeather
} from "feather-client-react";

function SignIn(params) {
  return (
    <div>
      <PasswordAuthenticationForm
        feather={params.feather}
        redirectUrl="http://localhost:3000/v"
      />
    </div>
  );
}

export default withFeather(SignIn);
