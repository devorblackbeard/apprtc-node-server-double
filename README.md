# AppRTC - NodeJS implementation of the Google WebRTC Demo
## Setup
Setting up the environment just requires the following:

```
git clone https://github.com/ISBX/apprtc-node-server.git ./apprtc-node-server
cd ./apprtc-node-server
npm install
```

## Running the AppRTC Node Server
The apprtc-node-server uses ExpressJS. To run the node server after setup just execute:

```
node ./bin/www
```

Navigate to `http://localhost:3000` to run the WebRTC Demo

## Double Modifications
The AppRTC server has been modified to control the Double robot. There are no changes to the server itself, but there are changes in the public folder to the web application. A new script, drive.js, has been added. This sends controls over a WebSockets connection on port 8443 to the Double Control Server. The controls are as follows:

* Arrow keys move Double left/right, back/forward
* R retracts the kickstand
* D deploys the kickstand
* N begins navigation
* F begins following

Any other controls can be added and will be forwarded to the iOS application. It is up to the iOS application how they are interpreted.

This server requires port 3000 to be open, as well as 8443 for Double controls.

By navigating to the server, currently at http://csse-s402g2.canterbury.ac.nz, followed by entering a room number, then the same room number on the iOS application, a call will setup and the Double will be able to be controlled.

Unless an SSL certificate is installed, a Google Chrome workaround must be used to enable video. On macOS, Chrome must be started with this command:

sudo open -a Google\ Chrome --args --unsafely-treat-insecure-origin-as-secure="http://csse-s402g2:3000" --user-data-dir=/test/only/profile/dir

Or similarly in Linux using:

sudo open -a Google\ Chrome --args --unsafely-treat-insecure-origin-as-secure="http://csse-s402g2:3000" --user-data-dir=/test/only/profile/dir

However, this command may vary on different distros.
