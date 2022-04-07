# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Mongodb connection
create .gitignore
## on cmd
git init
npm init-- initialise package.json
## install regular dependencies
npm i
express
express-validator  --for server side validation
bcryptjs --for password encryption
config  --for storing global variables
gravatar  --for profile avatar images. a user at signup can use a profile associated with the avatar and it will automatically show
jsonwebtoken  --cos we are using jwt to pass along token for validation 
mongoose  -- is a layer that sits on top of mongo db and allows us interact with mongodb
request -- module that allows us make http request for github repository


## install dev dependencies
npm i -D
nodemon  --auto restarts server everytime theres a change
concurrently  --allows us run backend express server and front end dev react server at same time with one single command



### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
