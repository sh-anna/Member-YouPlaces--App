# Member-YouPlaces--App

React,Node.js, Express & MongoDB 

Getting the Project Up and running
In the project root directory Member-YouPlaces--App/
run
npm i

in the client directory Member-YouPlaces--App/frontend/
run
npm i

Start the development react server (hosting development frontend) + express server (hosting backend) by running this in project root directory Member-YouPlaces--App/
npm run dev

OR

run both servers manually in two different terminals. (from project root directory)
/frontend    npm run 
/backend    npm run 

Also, start the mongoDB server for connecting server with database.

(OPTIONAL) To run the project in production mode. (as will be deployed)

build the react project (in Member-YouPlaces--App/frontend//)
run : npm run build

a new build/ folder will be created in the client directory.

add this line to out .env file

NODE_ENV=production

finally in the project root directory run
npm run server

Available Scripts
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
