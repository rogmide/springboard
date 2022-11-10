### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

	- React.js is an open-source JavaScript library that is used to build user interfaces by creating reusable UI components. Developers can create large web applications that can change data, without reloading the page. React is fast, scalable, and straightforward. 
	- I will use ReactJS because is simple to grasp right away. The component-based approach, well-defined lifecycle, and use of just plain JavaScript make React very easy to learn, is simple to learn but with time and practice I know I can make very complex applications in the future using React.  

- What is Babel?

	- Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

- What is JSX?

	- JSX (JavaScript Syntax Extension) is a React extension to the JavaScript language syntax which provides a way to structure component rendering using syntax familiar to many developers.

- How is a Component created in React?

	 - Write a JavaScript function except that it return a JSX React Element. 

	- Sample		
	
		  import React from "react";
		  function myComponent(){
  			return <div> Hello World!!! </div>;
		  }

- What are some difference between state and props?


	> Props are used to pass data from one component to another.
The state is a local data storage that is local to the component.

	- Props

		- The data is passed from one component to another 
		- Is immutable 
		- Props are read-only

	- State 

		 - The Data is passed within the component only.
		 -  It is Mutable
		 - State is both read and write.

- What does "downward data flow" refer to in React?

	- Downward data flow is a simple concept that refers to the passing of data and/or functions via props from parent to child components.

- What is a controlled component?

	- Controlled Component is under the control of the component's state, they are predictable as are controlled by the state of the component. It accepts the current values as props and has better control over the form data and values. 

- What is an uncontrolled component?

	- Uncontrolled Component is under the control of the DOM so in order to access any values we need the help of refs. During his life cycle, the data may be lost and has very limited control over form values and data

- What is the purpose of the `key` prop when rendering a list of components?

	- `Key:` is used in React to identify which items in the list are changed, updated, or deleted. We can say that `keys` give an identity to the elements. Is recommended to use a unique `key` like an `ID` in a database, you can use the index of a list but this is not recommended instead, we can use libraries like `UUID` to generate unique `keys`.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

	- Index doesn't uniquely identify your elements if the array change the index will change this will results in unnecessary renders hitting performance and data mapping issues.

- Describe useEffect.  What use cases is it used for in React components?

	- useEffect run after every complete render, but we can choose to fire them only when certain values have changed. useEffect uses an array of dependencies that are basically variables or states that useEffect listen for changes that trigger an execution of the main body of the useEffect 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

	- useRef is a react hook, short for reference, which allows us to persist data across renders without triggering a component rerender, for some cases, we can use this to store a DOM element

- When would you use a ref? When wouldn't you use one?

	- useRef gives the ability to perform certain operations and directly manipulate the DOM, In the general rule of thumb is to avoid using refs unless you absolutely have to. There are some cases where refs are entirely considered useful like:
	
		- Managing focus, text selection, or media playback
		- Triggering imperative animations
		- Integrating with third-party DOM libraries
 

- What is a custom hook in React? When would you want to write one?

	- Custom Hook in react as standard starts with the name "use",  this type of hook offers reusability which makes the code cleaner and reduces the time to write the code also enhances the rendering speed.
	- I will use React hooks if I have one or multiple repeated logic that will be used at multiple locations in a code, this helps in making the code more readable and cleaner 
