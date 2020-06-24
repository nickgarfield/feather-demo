# Feather React Demo

Add authentication to your app in 5 minutes.

### 1. Get an API key

Go the https://feather.id and create an account to get your project's API key.

### 2. Initialize the client

```sh
yarn add feather-client-react
```

```js
import { Feather } from "feather-client-react";

const feather = Feather("pk_test_....");

feather.onStateChange((currentSession, currentUser) => {
  // Get updates anytime the current authentication state changes
});
```

### 3. Add a sign-in flow

```js
import { PasswordAuthenticationForm } from "feather-client-react";

function SignIn() {
  return (
    <PasswordAuthenticationForm
      feather={feather}
      redirectUrl="http://yourapp.com/resetPassword"
    />
  );
}
```

### 4. Add password-reset flow

```js
feather
  .confirmForgotPasswordLink(window.location.href, "new_p4ssw0rd")
  .catch(error => {
    // Display an error message
  });
```
