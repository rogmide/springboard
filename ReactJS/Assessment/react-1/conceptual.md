### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

	- React.js is an open-source JavaScript library that is used to build user interfaces by creating reusable UI components. Developers can create large web applications that can change data, without reloading the page. React is fast, scalable, and straightforward. 
	- I will use ReactJS because is simple to grasp right away. The component-based approach, well-defined lifecycle, and use of just plain JavaScript make React very easy to learn, is simple to learn but with time and practice I know I can make very complex applications in the future.  

- What is Babel?

	- Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

- What is JSX?

	- JSX (JavaScript Syntax Extension) is a React extension to the JavaScript language syntax which provides a way to structure component rendering using syntax familiar to many developers.

- How is a Component created in React?

	 - Write a JavaScript function using normal JS function except that it return a JSX React Element. 

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

- Describe useEffect.  What use cases is it used for in React components?

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

- When would you use a ref? When wouldn't you use one?

- What is a custom hook in React? When would you want to write one?
