---
title: Vote with Keychain SDK
sidebar_position: 2
---

In this tutorial, we will create a function to vote on content on the Hive blockchain using the Keychain SDK. 

## Step 1: Import the Keychain SDK

First, we need to import the `KeychainSDK` from the `keychain-sdk` package.

```jsx
import { KeychainSDK } from "keychain-sdk";
```

## Step 2: Create the `voteOnContent` function

Next, we will create the `voteOnContent` function. This function will take the user's information, the author of the content, the permlink of the content, and the weight of the vote as parameters. It will then use the Keychain SDK to cast a vote on the specified content.

```jsx
const voteOnContent = async (user, author, permlink, weight) => {
  try {
    const { name } = user; // Extract the username from the user object
    const keychain = new KeychainSDK(window);
    const formParamsAsObject = {
      data: {
        username: name, // Use the extracted username
        permlink: permlink,
        author: author,
        weight: weight,
      },
    };

    const voteResult = await keychain.vote(formParamsAsObject.data);
    console.log(voteResult)
    return voteResult;
  } catch (error) {
    console.log({ error });
    throw new Error("Voting failed");
  }
};
```

## Step 3: Export the `voteOnContent` function

Finally, we will export the `voteOnContent` function so that it can be imported and used in other parts of our application.

```jsx
export default voteOnContent;
```

That's it! You now have a function that can be used to vote on content on the Hive blockchain using the Keychain SDK.

