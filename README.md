# Google Sign-In Starter Template with React & React Router

This template includes all the source code you need to start building your app in React without worrying about getting Google Sign-In to work right. Copy it, change the words, and get to hacking!

This includes a LandingPage, a Nav Bar and Dashboard, and a login page. If you try to access the dashboard and you're not signed in, you'll be kicked to the login screen. There's a little bit of CSS there to get going, but you can just as easily use Bulma, React-Bootstrap, or any other CSS theme/library to style the page.

If you run into issues, or have follow-up questions - send me an email by replying to the email where you received this package.

## Getting Started

### Get a Client ID from the Google Developer console

If you already have a client ID, skip to the next step.
If you don't, look at [my guide here](https://www.intricatecloud.io/2019/07/adding-google-sign-in-to-your-webapp-pt-1/) and skip to the section titled "Creating credentials for Sign-In".

### Install & Update the source
1. Run `npm install`
2. Open `src/gapi-utils.js`, and update `clientId` on the 1st line of the file - replace "REPLACEME" with your Client ID.
3. Run `npm run start` and get to building!

## Developing

### Create a new page
Create a new page by adding a new file `./src/components/MyNewPage.js`, then import it into App.js and drop it in the router:

```diff
+ import MyNewPage from './components/MyNewPage.js
...
<Route exact path="/">
    <LandingPage />
</Route>
<Route path="/dashboard" render={() => this.ifUserSignedIn(Dashboard, {profile: this.state.profile})}/>
+<Route path="/my-new-page" render={() => this.ifUserSignedIn(MyNewPage, {})}/>
```

### Add to the Nav bar
Edit the NavBar.js component to add a link to your new page

---
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
