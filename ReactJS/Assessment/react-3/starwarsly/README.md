## Project Title

Starwarsly

## Description

App to explore an unknown universe of Starwars the more you explore you will reveal films, persons, and planets with details for each one.

## Getting Started

### Installing 
Clone the project then run in terminal on the project folder:
	
	npm install
	

### Executing program
	
	npm start
	Runs the app in the development mode.
	Open http://localhost:3000 to view it in your browser.
	

## Architecture

	.
	└── /src
		└──/actions
		   └──films.js
		   └──people.js
		   └──planets.js
		   └──reset.js
		   └──types.js
		└──/reducers
		   └──films.js
		   └──people.js
		   └──planets.js
		   └──root.js
    	└── /components
        	├── /App.js
        	│   ├── /NavBar.js
        	│   ├── /Router.js
        	│   │   ├── HomePage.js
        	│   │   ├── FilmList.js
        	│   │   │ 	└──ItemList.js  
        	│   │   ├── PlanetList.js
        	│   │   │ 	└──ItemList.js
        	│   │   ├── PersonList.js
        	│   │   │ 	└──ItemList.js
        	│   │   ├── Film.js
        	│   │   │ 	└──SubList.js
        	│   │   ├── Planet.js
        	│   │   │ 	└──SubList.js
        	│   │   ├── Person.js
        	│   │   │ 	└──SubList.js
        	├── /routing
        	│   └── /Routes.js
        	└── /layout
            	└── /navigation
                	└── /NavBar
                    	└── NavBar.js

## Libraries

- React
- Axios
- React-router-dom
- Redux (data-flow architecture)
- React-redux

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

## Redux store shape

##### The store holds the State for films, planets, and people it will fill up when the user starts exploring the app and discovering new films, planets, and people.

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

