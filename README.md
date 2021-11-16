# React Calculator

Create a React app that mimics a simple calculator

## Overview

- Please use `create-react-app` to generate your project
- Break your application down to necessary components

## UI

Example project: https://www.coreyladovsky.com/calculator/

Feel free to make the design your own.  Here are some real calculator UIs that you can use for inspiration.

<img src="./images/exampleScreenshotOne.png" alt="Example One" width="400">
<img src="./images/exampleScreenshotTwo.png" alt="Example Two" width="400">
<img src="./images/exampleScreenshotThree.png" alt="Example Three" width="400">

## User Stories, Acceptance Criteria, and Code Quality Rubric

You must implement all of the user stories and acceptance criteria below. After those are completed, look at and implement as many of the stretch features as you want to.

### User Stories

1. I can see a calculator UI.
1. I can enter and see positive and negative integers.
1. I can add, subtract, multiply, and divide.
1. I can clear my input to reset everything.
1. I can visit the calculator on the Internet.

### Acceptance Criteria

**I can see a calculator UI.**

- I can see a number keypad on the calculator with the numbers 0-9.
- I can see keys for the plus, subtract, multiple, and divide operators.
- I can see an equals `=` key.
- I can see a `+/-` key.
- I can see an all clear key `AC`.
- I can see a "screen" which shows a default value of 0.

**I can enter readable positive and negative integers.**

- I can click a number key and see the number on the screen.
- I can enter multi-digit numbers on the keypad and see them on the screen.
- When I enter a number of 1,000 or more, I see commas appear in the right place to format the number. (Example: 14,563,024)
- I can make a positive number negative (or vice versa) with the `+/-` key.

**I can add, subtract, multiply, and divide.**

- I can enter a number, `+`, another number, then `=` and see the correct addition result.
- I can enter a number, `-`, another number, then `=` and see the correct subtraction result.
- I can enter a number, `x`, another number, then `=` and see the correct multiplication result.
- I can enter a number, `x`, another number, then `=` and see the correct division result _rounded to the nearest integer_.

**I can clear my input to reset everything.**

- When I click the clear key, the number on the screen is removed.
- When I click the clear key, I see a default number `0` on the screen.
- When I click the clear key during a calculation in progress, the full state is reset. (When I push `=`, the screen should still say `0`)

**I can visit the calculator on the Internet.**

- A working public URL is submitted that loads the project.

### Code Quality Rubric

- Use JSX to create components
- Use create-react-app to build React applications
- Respond to user input to update the views in a React app
- Use state to build stateful React applications
- Use Flexbox and/or Grid to lay out a page

### Stretch Features

- `.` button that adds a decimal point to the current number
- `%` button that converts the current value into a percentage
- Support exponentiation and square roots
- Support geometric operations (`sin`, `cos`, `tan`, etc.)

### Stretchier Stretch Features
- Write Cypress tests for your calculator!
- Support large and small numbers with [scientific notation](https://en.wikipedia.org/wiki/Scientific_notation#E_notation)
- Change the clear button to toggle between:
    - AC Clears all of the data in the screen and all the history
    - C: Clears only what is being displayed
- Chain together multiple operands
    - ex:  5 + 5 + 5

### Super-Stretch Features
- Chain together multiple equals sign button pushes
    - ex: `5` `+` `5` `=` `=` `=` should display `20`
- `()` buttons to support order of operations
- Implement [Dijkstra's famous two-stack algorithm](https://youtu.be/0sixdU-cehs?t=395) to calculate expressions with `()`


Helpful Libraries for Decimals:
- [decimal.js](https://mikemcl.github.io/decimal.js/)
- [math.js](https://mathjs.org/)


## State

State will be an important component of your application.  It may be helpful to think about incorporating the following elements into your state:

- displayValue (What the screen currently displays)
- previousValue (What value the user selected before pressing an operation button)
- operation (What operation the user is performing (+/-/÷/x))

## Deploy 
Deploy your app following these [instructions](https://github.com/joinpursuit/Pursuit-Core-Web/tree/master/react/react_deployment)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
