---
title: Login using dhive
sidebar_position: 1
---

In this tutorial, we will create a custom React hook `useAuthUser` to handle user authentication using the Hive blockchain. We will use the `dhive` library to interact with the Hive blockchain and `hive_keychain` to sign transactions.

## Step 1: Import necessary dependencies

First, we need to import the necessary dependencies. We will use `useState` and `useEffect` from React to manage our component state and side effects. We will also import the `dhive` library to interact with the Hive blockchain.

```jsx
import { useState, useEffect } from "react";
import * as dhive from "@hiveio/dhive";
```

## Step 2: Create the `useAuthUser` hook

Next, we will create the `useAuthUser` hook. This hook will manage the user authentication state and provide functions to login and logout.

```jsx
export default function useAuthUser() {
  const dhiveClient = new dhive.Client([
    "https://api.hive.blog",
    "https://api.hivekings.com",
    "https://anyx.io",
    "https://api.openhive.network",
  ]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = sessionStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);
```

## Step 3: Implement the `loginWithHive` function

The `loginWithHive` function will be used to authenticate the user. It will request the user to sign a buffer using their Hive Keychain. If the signature is valid, it will retrieve the user's account data from the Hive blockchain and save it in the session storage.

```jsx
  const loginWithHive = async (username) => {
    if (typeof window === "undefined" || !window.hive_keychain) {
      alert("Please install Hive Keychain first");
      return;
    }

    if (!username) {
      alert("Please enter your username");
      return;
    }

    const memo = username + Date.now();

    window.hive_keychain.requestSignBuffer(
      username,
      memo,
      "Posting",
      async (response) => {
        if (response.success === true) {
          console.log(response)
          const publicKey = response.publicKey;
          try {
            const val = await dhiveClient.keys.getKeyReferences([publicKey]);
            const accountName = val.accounts[0][0];
            if (accountName === username) {
              const sig = dhive.Signature.fromString(response.result);
              const key = dhive.PublicKey.fromString(publicKey);
              if (key.verify(dhive.cryptoUtils.sha256(memo), sig) === true) {
                const val2 = await dhiveClient.database.getAccounts([accountName]);

                setUser(val2[0]);
                sessionStorage.setItem("user", JSON.stringify(val2[0]));
              }
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
    );
  };
```

## Step 4: Implement the `logout` and `isLoggedIn` functions

Finally, we will implement the `logout` and `isLoggedIn` functions. The `logout` function will clear the user data from the session storage and the component state. The `isLoggedIn` function will check if the user is logged in.

```jsx
  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
  };

  const isLoggedIn = () => {
    return !!user;
  };

  return {
    user,
    loginWithHive,
    logout,
    isLoggedIn,
  };
}
```

That's it! You now have a custom React hook to handle user authentication using the Hive blockchain.

