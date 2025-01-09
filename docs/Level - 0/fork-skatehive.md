---
title: Fork Skatehive Guide
sidebar_position: 1
---

# How to Fork Skatehive 🛹

We are going to make this tutorial to anyone that wants to create his own skatehive powered portal like https://skatehive.app

You are going to have to install some stuff in your machine to get your development enviroment ready. 

The code is still a little messy but I invite you to be part of this learning journey with us. This doc will always be updated at: https://docs.skatehive.app

## Index

- Install Git and set Github account
- Set up Github SSH Keys
- Forking the Repository 
- Clone/Download the Repository
- Download and Install NodeJs
- Install pnpm 
- Install Dependencies with `pnpm`
- Change .env variables
- Run it with `pnpm dev`
- Made some modification just 4 fun
- Push your changes to github 
- Putting it online, deploy your version with vercel 


## Install Git and set Github account

Download and install Git in your local machine. That will enable you to execute git commands in your terminal, like `git clone`  and other wizardlies 


[Download Git](https://git-scm.com/downloads)
[Learn More about git and its instalation](https://www.youtube.com/results?search_query=what+is+git+how+to+install)

## Create a Github Account

Just sign up 

## Set up Github SSH keys 

In order to make the process more smooth we are going to set up an SSH connection by generating SSH keys. 


1. Open you terminal 

2. Type the following command
> use the same email you used to create the github account

```
ssh-keygen -t ed25519 -C "your_email@example.com"
``` 
> This creates a new SSH key, using the provided email as a label.

3. Start the ssh-agent in the background

```
eval "$(ssh-agent -s)"
```

4. Copy the contents of the id_ed25519.pub file to your clipboard

- For Mac users: 
`pbcopy < ~/.ssh/id_ed25519.pub`

- For Windows users: 
`clip < ~/.ssh/id_ed25519.pub`



and give it a Title and paste the contet in Key
![Alt ​​text](../../src/assets/Tuto-Dev/1.png)



> [Full SSH Tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

## Fork the repository

 **[Click Fork Button](https://github.com/SkateHive/nextskateapp)** 

![Alt ​​text](../../src/assets/Tuto-Dev/2.png)

This will create your own version of the repo in your account: 

![Alt ​​text](../../src/assets/Tuto-Dev/3.png)

Ok, now you are going to clone the repository of files into your machine, which is basically download the app: 

```
git clone git@github.com:<your-username>/<your-fork>.git
```

![Alt ​​text](../../src/assets/Tuto-Dev/4.png)


Now navigate to the cloned repository by: 

```
cd <your-fork>
```

In this case, 

```
cd nextskateapp
``` 

For the next step we are going to need to install some more programs in your machine to complete your enviroment and finally install and run the application. 


## [Download and install Node.Js](https://nodejs.org/en)

> Nothing fancy here, just install and make sure you leave the `add to path` option marked.

## [Install pnpm Here](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) or 

```
npm install -g pnpm
```

> [More ways to install Yarn](https://www.youtube.com/results?search_query=install+yarn)


If you got Nodejs, npm, yarn and weed/coffee you can now install and and run it on your local machine. 

## Back to Terminal... 

In the repository folder

```
pnpm i
```
> Note: This command will automatically install all the required JavaScript packages and dependencies for your project, as specified in the package.json file. Yarn will download and configure everything needed to run your Skatehive portal.
This step ensures that you have all the necessary libraries and tools in your development environment to build and run the application.


![Alt ​​text](../../src/assets/Tuto-Dev/5.png)
Wait a little, drink some "coffee"...

You should see that when its over: 
![Alt ​​text](../../src/assets/Tuto-Dev/6.png)

> If you get an error in any step you can throw it in chat-gpt or ask us in [skatehive discord](https://discord.gg/skatehive) and see which one helps you faster 


## Rename .env.example to .env 

Rename .env.example and choose the hive community you want to get/upload content from/to. For example, if you use hive-173115 you get skatehive, if you use hive-141964 in community field you get surfhive 

## .env.example
NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000/
NEXT_PUBLIC_HIVE_COMMUNITY_TAG=xxxxxxxxxxx
NEXT_PUBLIC_PINATA_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_PINATA_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_PINATA_GATEWAY_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_CRYPTO_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_OPENAI_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_ETHERSCAN_API=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Now run the application you just installed: 

```
pnpm dev
```
![Alt ​​text](../../src/assets/Tuto-Dev/7.png)


Now open https://localhost:3000 and you are going to see the same app as https://skatehive.app 

![Alt ​​text](../../src/assets/Tuto-Dev/8.png)

That means that you are running the app using your own computer as a server through the port 3000 

You can now try to edit your code in a code editor, I recommend [VSCode](https://code.visualstudio.com/), but my Jedi Master recommends [JetBrains](https://www.jetbrains.com/) 

I usually use `code .` command in the terminal folder to easily open the folder I am working in VScode

Make a silly change, like change the footer of it. 

![Alt ​​text](../../src/assets/Tuto-Dev/9.png)


This project is built with TypeScript and incorporates Chakra UI for the frontend. For Hive-related tasks, we rely on the [Keychain SDK](https://play.hive-keychain.com/) and dhive libraries. Additionally, to facilitate interactions with Ethereum, Bitcoin, and various other blockchains, we leverage the capabilities of [Pioneer-React](https://github.com/BitHighlander/pioneer-react#readme).


**Stage Changes:**

Before sending to github its good to: 

```
pnpm build:turbo 
```

and test its build locally !

```
git add .
````
> to prepare your changes for commit.

**Commit Changes:**

```
git commit -m "Changed header color".
```
> Commit with a message 

**Push to GitHub:**
```
git push origin main
```
> Push your changes 

Now you can go to your github account and check if the it was updated 

## Putting your website online 

## Go to vercel.com 

1. Make an account with your github account 
![Alt ​​text](../../src/assets/Tuto-Dev/10.png)

2. Install Github Extension it offers 
3. Select the repository 
![Alt ​​text](../../src/assets/Tuto-Dev/11.png)

4. Click in Deploy

You should see something like this: 

![Alt ​​text](../../src/assets/Tuto-Dev/12.png)
 

You can navigate now to: 

https://your-repo.vercel.app 

and see your own hive community. 

Congrats! That's so cool, you put a permissionless website online! Go show your mama, say that I miss her. 

--- 
