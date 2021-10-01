
# Overview
- [React Suspense](https://reactjs.org/docs/concurrent-mode-suspense.html) “wait” for anything else, including data.
- [React Lazy](https://reactjs.org/docs/code-splitting.html) help you “lazy-load” just the things that are currently needed by the user.
- [Handle network errors](https://github.com/natserract/react-walkthrough/blob/main/src/api/httpError.ts) handle network errors using Axios with the usual HTTP error status codes, and show error from the global state (context).
- [Dispatch Context from useCallback](https://github.com/natserract/react-walkthrough/blob/main/src/store/configureStore.tsx) using dispatch without reducer and prevent the re-creation of a function (small-apps).
- [useMemo inside Context](https://github.com/natserract/react-walkthrough/blob/main/src/store/configureStore.tsx#L97) prevent re-render the child tree if all useMemo inputs are the same.
- [Multiple requests using Axios](https://github.com/natserract/react-walkthrough/blob/main/src/pages/home/index.tsx#L36)  use `Axios.all()` to make multiple HTTP requests in parallel.
## Create React App

<img alt="Logo" align="right" src="https://create-react-app.dev/img/logo.svg" width="20%" />

Create React apps with no build configuration.

- [Creating an App](#creating-an-app) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

Create React App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/facebook/create-react-app/issues/new).<br>
If you have questions or need help, please ask in [GitHub Discussions](https://github.com/facebook/create-react-app/discussions).

## Running locally

```sh
npx create-react-app my-app
cd my-app
npm start
```

If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that npx always uses the latest version.

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) comes with npm 5.2+ and higher, see [instructions for older npm versions](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f))_

Then open [http://localhost:3000/](http://localhost:3000/) to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

<p align='center'>
<img src='https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg' width='600' alt='npm start'>
</p>
