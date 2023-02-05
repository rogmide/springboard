- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
		
API Responds	
	  
	 characters = [
			"https://swapi.dev/api/people/1/", 
			"https://swapi.dev/api/people/2/",
 			"https://swapi.dev/api/people/3/"
                   ]
Regular expression: is used to get the id from each people in the API respond

	characters = characters.map((url) => url.match(/\d+/)[0]);

Returns

	characters = ["1", "2", "3"]
  
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?

	- Persist is store in localStorage

	- Redux Persist takes your Redux state object and saves it to persisted storage. Then on app launch it retrieves this persisted state and saves it back to redux.
	
  
- What does `combineReducers` do? Why are we using it? 

	- The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

	- We are using it to combine films, planets, and people reducers into one reducer.

- How does the "Reset to Fresh Exploration" feature work?

	- Call dispatch(resetAll()) set INITIAL_STATE for films, planets and people.

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?

	- Doing it this way we don't have to make 3 more components to display film, person, and planet data, one component and we send props with titles and an array of elements that will be used to build the list.

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?

	- The application starts with the first film ID of 1, there is no need to check the other films that are not loaded yet those are meant to be discovered, the API request is done for 1 film and not multiple requests for more films.
  
- What good ideas for designing and organizing React apps have you learned from
  studying this code?

	- I will master Redux in the future looks very interesting and useful when I need to work on a bigger application.
  
- Which Star Wars character would make the best React developer, and why?

	- R2-D2 Already knows multiple languages, has never received a memory wipe or new programming, creating a well of knowledge into one unit, and with probably more processing power than a human brain, this dude is the best for the Job.