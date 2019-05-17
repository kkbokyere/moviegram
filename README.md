# MovieGram App

A simple movie listing app.

## Current Version
1

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. Currently, no live deployment pipeline has been catered for.

### Prerequisites

The whole app is based off Create React App, so a lot of the initial setup is boilerplated. Less time configuring webpack, more time writing code! See the README file in /web directory for any further info.

### Installing

The main website needs to be run from the web directory.

```
$ cd /web
```

Run the install script

```
$ yarn install
```

Assuming all dependencies downloaded okay, run the start script and the service should start working!

```
$ yarn run start
```

If its all good, check http://localhost:3000

## Running the tests

Test are built using [Jest](https://jestjs.io/). you can run them by using the following command:

```
$ yarn run test
```

## Deployment

If it were to be deployed to live, It would use Docker to create a container on the deployment server.

## Built With

* [ReactJS](https://facebook.github.io/react/) - UI component library
* [Redux](http://redux.js.org/) - Flux state management
* [Create React App](https://github.com/facebookincubator/create-react-app) - ReactJS Bootstrap

## Improvements

Some improvements, I would have made, if I had more time.

### Higher Order Components

I would have used High Order Components in a more efficient way. I would have kept all reusable logic, especially the calls to grab data from the Redux Store.

### Async Actions

I created some async actions, that don't really call any end points. They just return the movies.json. Yes, technically this is overkill, but as part of this test, just to prove how i would have implemented a real API endpoint with the application, I just created these. Ideally, I would have used fetch or axios to make the request, then passed the response to the synchronus actions.