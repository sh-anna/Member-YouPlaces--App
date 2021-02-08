# Member-YouPlaces--App

React,Node.js, Express & MongoDB 

Getting the Project Up and running
In the project root directory Member-YouPlaces--App/
run
npm i

in the client directory Member-YouPlaces--App/frontend/
run
npm i

Start the development react server 
----------------------------------
(hosting development frontend) + express server (hosting backend) by running both servers manually in two different terminals. (from project root directory):
- client
Member-YouPlaces--App/frontend
npm run 
-server
Member-YouPlaces--App/backend
npm run 

Also, start the mongoDB server for connecting server with database.

Available Scripts
--------------------
In the project directory, you can run:

npm run dev
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm run backend
runs only the express server.http://localhost:8080

npm run frontend
runs only the react-app server.http://localhost:3000

npm build (in /frontend)
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
