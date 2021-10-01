
# Overview
- [React Suspense](https://reactjs.org/docs/concurrent-mode-suspense.html) “wait” for anything else, including data.
- [React Lazy](https://reactjs.org/docs/code-splitting.html) help you “lazy-load” just the things that are currently needed by the user.
- [Handle network errors](https://github.com/natserract/react-walkthrough/blob/main/src/api/httpError.ts) handle network errors using Axios with the usual HTTP error status codes, and show error from the global state (context).
- [Dispatch Context from useCallback](https://github.com/natserract/react-walkthrough/blob/main/src/store/configureStore.tsx) using dispatch without reducer and prevent the re-creation of a function (small-apps).
- [useMemo inside Context](https://github.com/natserract/react-walkthrough/blob/main/src/store/configureStore.tsx#L97) prevent re-render the child tree if all useMemo inputs are the same.
- [Multiple requests using Axios](https://github.com/natserract/react-walkthrough/blob/main/src/pages/home/index.tsx#L36)  use `Axios.all()` to make multiple HTTP requests in parallel.
## Create React App

<img alt="Logo" align="right" src="https://create-react-app.dev/img/logo.svg" width="20%" />

## Running locally

```sh
npx create-react-app my-app
cd my-app
npm start
```

If you've previously installed `create-react-app` globally via `npm install -g create-react-app`, we recommend you uninstall the package using `npm uninstall -g create-react-app` or `yarn global remove create-react-app` to ensure that npx always uses the latest version.