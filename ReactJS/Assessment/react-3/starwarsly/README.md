
## Redux store shape

	The store holds the State for films, planets, and people it will fill up when the user starts exploring the app and discovering new films, planets, and people.

	INITIAL_STATE = {}
	{ 
	  films: {…}, 
	  planets: {…}, 
	  people: {…}, 
	  _persist: {…}
	}

	AFTER_EXPLORATION_SAMPLE
	{
	  films:
	        {id: '1', name: 'A New Hope', director: 'George Lucas', etc...},
	  people:
		{id: '2', name: 'C-3PO', gender: 'n/a', birthYear: '112BBY', homeworld: '1', …},
	  planets:	
		{id: '1', name: 'Tatooine', population: '200000', climate: 'arid', residents: Array(10), …},
	  _persist: {…}
	}


## Components 

	app.js
	Film.js
	FilmList.js
	HomePage.js
	ItemList.js
	NavBar.js
	Person.js
	PersonList.js
	Planet.js
	PlanetList.js
	Routes.js
	Sublist.js


### Code Splitting

### Analyzing the Bundle Size

### Making a Progressive Web App

### Advanced Configuration

### Deployment

### `npm run build` fails to minify
