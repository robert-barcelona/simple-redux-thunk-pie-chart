<p align="center">


  <h3 align="center">Breed Pictures</h3>

<!-- ABOUT THE PROJECT -->

## About The Project

A simple React/Redux that loads data about the number of images from a variety of different dog breeds and displays the top 10.

## Design Considerations
- The application uses Redux for state management, allowing each to rely on a "universal source of truth" and to avoid distractions such as prop-passing.  This allows greater modularity of the components.
- Redux-Thunk is used to handle asynchronous calls to the API, as well as synchronous calls that occur in conjunction with the async calls, acting here as a type of event-dispatching system
- SASS is used for styling -- minimally here -- allowing greater modularity.



### Built With

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
- [Sass](https://sass-lang.com/)
- [Axios](https://github.com/axios/axios)
- [Parcel](https://parceljs.org/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/)
- [Victory Charts](https://formidable.com/open-source/victory/)

<!-- GETTING STARTED -->

## Prerequisites

This application was built and tested with Node version 11. If you do not have that installed you may use Node Version Manager ([https://github.com/nvm-sh/nvm]), or Docker ([https://www.docker.com/]) or simply install the correct version ([https://nodejs.org/en/])

### Installation

1. Clone the repo

```sh
git clone https://github.com/robert-barcelona/simple-redux-thunk-pie-chart.git
```

2. Install NPM packages

```sh
cd simple-redux-thunk-pie-chart
yarn
```

3. Start the development server

```sh
yarn dev
```

4. The application will be served on localhost:1234


## Environment

The application runs under Node v11.

## Considerations for Future Development
With further development time, the following areas would be addressed:
- Testing -- at present there is no testing
- Better styling -- the chart labels cut off at the edges (this was left as is in the interests of time), and in general more refined and parameterized styling would make the application a more modularized component.
- Parameterized chart type: the component would be more versatile if there were a way to determine what type of chart would be displayed based on a parameter or variable.



## License

Distributed under the MIT License.
