# Description
This is an example for realtime communication between client ( Angular ) and server ( NodeJS ) via WebSockets ( SocketIO ).

You will see different variations of asynchrounous actions that are triggered with REST API and response is returned immediatelly from a server where "long" running operation continues processing in background. 

This is useful to release client by getting response immediatelly and not waiting that operation finish.

On other hand user needs to be informed what is happening on server and here that is presented with progress bar. 

User is able to start async operation, cancel it and also we are going to simulate catching an exception and stopping operation. 

# Screenshot

![Screenshot of demo application](assets/images/screenshot.png?raw=true "Title")

# Live demo

[Demo](https://angular-nodejs-realtime-app.herokuapp.com/ "Angular - NodeJS - Realtime application")

## Prerequisites

Node.js and npm are essentials.

I recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

## Installation

After project cloning go inside root directory and run:

```bash
npm install
```

## Run

After installation of all dependencies finish

```bash
npm run "[A + N] Start angular & server"
```

Above command will start nodejs and angular client. 

So you can access to demo page at:

```bash
http://localhost:5678/
```

## Licence

MIT License