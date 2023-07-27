---
title: Display Hive Blog Posts with Earnings
sidebar_position: 3
---

In this tutorial, we will create a React component to display blog posts from the Hive blockchain along with their earnings. We will use the `@hiveio/dhive` package to interact with the Hive blockchain.

## Step 1: Import Dependencies

First, we need to import the necessary dependencies.

```jsx
import { useEffect, useState } from "react";
import { Client } from "@hiveio/dhive";
import styles from "./HiveFeed.module.css";
import PostModal from "../post/PostModal";
import LoadingBar from "../fx/LoadingBar.jsx";
```

## Step 2: Define Constants

Next, we define some constants that we will use in our component.

```jsx
const nodes = [
  "https://rpc.ecency.com",
  "https://api.deathwing.me",
  "https://api.hive.blog",
  "https://api.openhive.network",
  "https://api.hive.blog",
  "https://anyx.io",
  "https://api.pharesim.me",
];

const defaultThumbnail = "https://images.ecency.com/u/hive-173115/avatar/large";
const placeholderEarnings = 69.42; // Replace with actual placeholder value
```

## Step 3: Create the HiveBlog Component

Now, we create the `HiveBlog` component. This component fetches posts from the Hive blockchain and displays them along with their earnings.

```jsx
export default function HiveBlog(query) {
  const [posts, setPosts] = useState([]);
  const [tag, setTag] = useState("hive-173115"); // set the default search author to "skatehive"
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [client, setClient] = useState(new Client(nodes[0]));
  const [nodeIndex, setNodeIndex] = useState(0);
```

## Step 4: Define Helper Functions

We define some helper functions to fetch post earnings and posts.

```jsx
  const fetchPostEarnings = async (author, permlink) => {
    // Fetch post earnings code here...
  };

  const fetchPosts = async () => {
    // Fetch posts code here...
  };
```

## Step 5: Use the useEffect Hook

We use the `useEffect` hook to fetch posts when the `tag` state changes.

```jsx
  useEffect(() => {
    fetchPosts();
  }, [tag]);
```

## Step 6: Define Event Handlers

We define some event handlers for when a post is clicked and when the modal is closed.

```jsx
  const handlePostClick = (post) => {
    setSelectedPost(post);
    console.log(post.body);
    console.log(post)
  };

  const handleModalClose = () => {
    setSelectedPost(null);
  };
```

## Step 7: Render the Component

Finally, we render the component.

```jsx
  return (
    <div>
      {/* Render code here... */}
    </div>
  );
}
```

That's it! You now have a React component that fetches and displays blog posts from the Hive blockchain along with their earnings.