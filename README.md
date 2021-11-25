# TALKING - A Simple Chat App for Everyone

A simple chat app built on [Node.js](https://nodejs.org/) and [Socket.io](https://socket.io/).

## Pre-requisites

To setup and run the project for local development / testing, you will need to use Node.js and NPM. I don't explicitly specify a minimum Node.js/NPM version for the app but I recommend going with whatever the latest LTS version is at the point in time you are setting things up. The minimum vesion of Node.js that I have tested this app on is **v14.17.6**.


Installers can be found latest version here: [https://nodejs.org/en/download](https://nodejs.org/en/download/)

Another option for installing Node is the **Node Version Manager** (**nvm**), which is a POSIX-compliant bash script to manage multiple active Node.js versions. Instructions for installing and using nvm to install Node and NPM can be found at [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm).

## Installation

The code for the chat app can be found at the public [GitHub](https://github.com/) repo [https://github.com/umanique/talking-chat-app](https://github.com/umanique/talking-chat-app). Either clone the repo to a local folder on your machine or download and extract the archive if you don't have [Git](https://git-scm.com/) installed.

Open a terminal window session, or the equivalent on your machine, and enter the following command to install all the Node modules needed to run the app:

```sh
npm install
```

## Run the app in development mode

After doing an `npm install` enter the following `npm run` command:

```sh
npm run dev
```

This will start the app and set it up to listen for incoming connections on port 8000. Open up your browser of choice and go to the url [http://localhost:8000/](http://localhost:8000/) to start using the app itself. The `npm run dev` command automatically runs the app using the `nodemon` script so any changes you make to the app's javascript, CSS or HTML code will automatically restart it.




