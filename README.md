# TALKING - A Simple Chat App for Everyone

![HTML](https://img.shields.io/badge/HTML-5.2-blue)
![CSS](https://img.shields.io/badge/CSS-3.15-orange)
![Javascript](https://img.shields.io/badge/JavaScript-ES6%2B-yellowgreen)
![Socket.io](https://img.shields.io/badge/SocketIO-v4.3.1-lightgrey)
![Javascript](https://img.shields.io/badge/NodeJS-v14.17.6-green)
<br>
<br>

A simple chat app built on [Node.js](https://nodejs.org/) and [Socket.io](https://socket.io/).

<h3>Preview Images:</h3>

![picture alt](https://github.com/umanique/talking-chat-app/blob/main/Preview%20Images/1.png)

   

## Pre-requisites

To setup and run the project for local development / testing, you will need to use Node.js and NPM. I don't explicitly specify a minimum Node.js/NPM version for the app but I recommend going with whatever the latest LTS version is at the point in time you are setting things up. The minimum vesion of Node.js that I have tested this app on is **v14.17.6**.


Installers can be found latest version here: [https://nodejs.org/en/download](https://nodejs.org/en/download/)

Another option for installing Node is the **Node Version Manager** (**nvm**), which is a POSIX-compliant bash script to manage multiple active Node.js versions. Instructions for installing and using nvm to install Node and NPM can be found at [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).

## Installation

The code for the chat app can be found at the public [GitHub](https://github.com/) repo [https://github.com/umanique/talking-chat-app](https://github.com/umanique/talking-chat-app). Either clone the repo to a local folder on your machine or download and extract the archive if you don't have [Git](https://git-scm.com/) installed.

Open a terminal window session, or the equivalent on your machine, and enter the following command to install or pull in the dependencies defined in the *package.json* file which are the Node modules needed to run the app:

```sh
npm install
```

Browse to the project directory on your Terminal or Command Prompt:(for example)

```sh
PS E:\My Web Development Bootcamp\Web Projects\Chat App> $ cd nodeServer
```

## Run the app in development mode

After doing an `npm install` enter the following `npm run` command:

```sh
npm run dev
```

This will start the app and set it up to listen for incoming connections on port 8000. Open up your browser of choice and go to the url [http://localhost:8000/](http://localhost:8000/) to start using the app itself. The `npm run dev` command automatically runs the app using the `nodemon` script so any changes you make to the app's javascript, CSS or HTML code will automatically restart it.

## Features

- User must enter your name. This will inform all the connected users that individual of this name 'Join the chat'.
- On the other hand, If user leave the chat environment. All the connected users will get message as individual of this name 'left the chat'.
- This chat app built with good and real user interface design with incoming+outgoing message sound notification.
- You can send meassage by just press 'Enter' button also. 

### Support or Contact ###

Having trouble with Pages? Feel free to send me a mail at imailumanali@gmail.com

