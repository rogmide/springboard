### Conceptual Exercise

Answer the following questions below:

- ### What is Redux? Why might you use it?

	 - Redux is a state management library that you can use with any JS library or framework like React, Angular, or Vue.

	 - Redux allows you to manage your app’s state in a single place and keep changes in your app more predictable and traceable. It makes it easier to reason about changes occurring in your app.


- ### What are three features of the Redux developer tool in Chrome?

	 - Allows you to inspect each payload for status and action

	 - You can "cancel" actions going back in time

	 - If the gearbox code is changed, each action will be evaluated again "in stages"


- ### What is a store?

	- A store is an immutable object tree in Redux. A store is a state container which holds the application’s state. Redux can have only a single store in your application. Whenever a store is created in Redux, you need to specify the reducer.


- ### What is a reducer?

	- Reducers are a pure function in Redux. Pure functions are predictable. Reducers are the only way to change states in Redux. It is the only place where you can write logic and calculations. Reducer function will accept the previous state of app and action being dispatched, calculate the next state and returns the new object.

- ### What is an action?

	-  Actions are plain JavaScript object that must have a type attribute to indicate the type of action performed. It tells us what had happened. Types should be defined as string constants.

- ### What is an action creator?

	- Action creators are the functions that encapsulate the process of creation of an action object. These functions simply return a plain Js object which is an action. It promotes writing clean code and helps to achieve reusability.

- ### How does data flow in a React/Redux application?

	- The flow of data in a React-Redux application begins at the component level when the user interacts with the application UI. This interaction leads to the action creators dispatching an action. When an action is dispatched, it is received by the root reducer of the application and is passed on to all the reducers.

- ### What is the purpose of the `<Provider>` component?

	- The <Provider> component makes the Redux store available to any nested components that need to access the Redux store. Since any React component in a React Redux app can be connected to the store, most applications will render a <Provider> at the top level, with the entire app’s component tree inside of it.

- ### What is the purpose of the `useSelector` hook? What does it return?

	- React Redux useSelector is a custom hook introduced in React Redux v7.1.0. Combined with other custom hooks such as useDispatch, it enables developers to manage state in Redux while writing fast, performant, and easy-to-read code in as few lines as possible.

- Describe the `useDispatch` hook. What do you use it for?

	- It enables you to dispatch any action to the store by adding the action as an argument to the dispatch variable.

- ### What is redux-thunk and why would you use it?

	- Middleware that allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

- ### What are propTypes?

	- PropTypes exports a range of validators that can be used to make sure the data you receive is valid. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.


- ### Describe the `useCallback` hook.  What is it used for?

	- useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed. Memoization is a way to cache a result so that it doesn’t need to be computed again. This can boost performance.

- ### Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?

	- useReducer is one of the additional Hooks that shipped with React. An alternative to the useState Hook, useReducer helps you manage complex state logic in React applications. When combined with other Hooks like useContext, useReducer can be an excellent alternative to Redux.

	- While Redux is usually the best option for managing global states in large React applications, many React developers jump into state management libraries more often than necessary when they could have effectively handled their state with Hooks.

	- When you consider the complexity of getting started with a third-party library like Redux, which is made much easier with Redux Toolkit, and the excessive amount of boilerplate code needed, managing state with React Hooks and the Context API becomes a pretty appealing option. There’s no need to install an external package or add a bunch of files and folders to manage the global state of our application.