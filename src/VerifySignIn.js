import React, { useState, useEffect } from "react";
import { withFeather } from "feather-client-react";

function VerifySignIn(params) {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    params.feather
      .confirmSignInLink(window.location.href)
      .then(() => params.feather.currentUser())
      .then(user => {
        setError(null);
        setUser(user);
      })
      .catch(error => {
        // TODO show something went wrong message
        setError(error.message);
        console.log(error);
      });
  });

  return (
    <div>
      <p>{error ? error : "Verifying..."}</p>
      <p>{user && JSON.stringify(user)}</p>
    </div>
  );
}

export default withFeather(VerifySignIn);
