### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  It is a standard library for routing in react. Enable navigation among views of various components, allowing the browser to change the URL and keeps the UI in sync with the URL.
 
     
  `React v6 had some changes` from the previous version, here are the main component:
   		
	- `BrowserRouter`
   	- `Routes`: This is a change in v6 previous versions used `<Switch></<Switch>`
		
		> Relative s and s

		> Improve: Routes are chosen based on the best match instead of being traversed in order.

	- `Route` 
	- `Link`

- What is a single page application?

	- A single-page application is a website that dynamically re-writes a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. 

- What are some differences between client side and server side routing?

	- `Client-side` routing is handled by JavaScript. Whenever a user clicks on a link, the URL bar changes and a different view is rendered on the page. This view could be anything—JSX or HTML. Single-page applications give a smooth sense of navigation as they don't refresh the whole page when a route is performed.

	- `Server-side` is the most common approach to handling routes.  Is still the most common form of handling routes. With server side routing, a user clicks a link that requests a new page or new data from the server. And then new data or document is served to the user.

- What are two ways of handling redirects with React Router? When would you use each?

	- The `Redirect` component was usually used in previous versions of the `react-router-dom` package to quickly do `redirects` by simply importing the component from `react-router-dom` and then making use of the component by providing the to prop, passing the page you desire to redirect to.
	
	> With the release of `React Router v6`, the `Redirect` component was removed and replaced with the `Navigate` component, which operates just as the `Redirect` component does by taking in the to prop to enable you redirect to the page you specify.
	
	- React Router v5 useHistory to redirect that change with the release of React Router v6, now we need to change useHistory to useNavegate and changing the `history.push` or `history.replace` with

	- Sample

		  import { useNavigate } from "react-router-dom";
		  
		  function App() { let navigate = useNavigate(); 
	
		  function handleClick() { 
		 	 navigate("/home"); 
		  } 
		  return ( 
		     <div> 
			   <button onClick={handleClick}>go home</button> 
			 </div> 
		   );
		  }

- What are two different ways to handle page-not-found user experiences using React Router? 

   - Use a wildcard placeholder to handle 404 page not found in React router, e.g. <Route path="*" element={<PageNotFound />} />. A route that has an asterisk path * serves as a catch all route. It only matches when no other routes do.

	- Sample

	   		<Routes>
      			<Route exact path="/colors" element={<Colors />}></Route>
      			<Route exact path="/colors/new" element={<NewColorForm />}></Route>
      			<Route exact path="/colors/:color" element={<ColorDetail />}></Route>
				<!--- Redirect when all the other matches routes fail -->
	    	    <Route path="*" element={<Navigate exact="true" to="/colors" />}></Route>
        	</Routes>

- How do you grab URL parameters from within a component using React Router?

	- The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>. Child routes inherit all params from their parent routes.

- What is context in React? When would you use it?

- Describe some differences between class-based components and function
  components in React.

- What are some of the problems that hooks were designed to solve?