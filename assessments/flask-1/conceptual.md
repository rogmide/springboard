### Conceptual Exercise

### Answer the following questions below:

- **What are important differences between Python and JavaScript?**
  
  - Python is commonly used more for server-side, back-end.
  Javascript most common use for client-side scripting, front-end.

  - For loop Python vs Javascript:

	    iterable = ['Pink', 'Green', 'Blue']

    
   	> Python:

		  for i in range(0, len(iterable)):	
     	      print(iterable[i])
  
  	 > Javascript:

		  for (let i = 0, i < iterable.lenght; i ++) {
   			console.log(iterable[i])
  		  }

  > In the previous for loop sample you can see a key difference
  Python use indentation to define code blocks
  Javascript use curly braces ( { } ) to group statements that belong to the same code block

  - Variable declaration:

  	> Python:

		variable_name = 1
      	variable_name = '1'

  	> Javascript:
  		
	 Use the word **let** or **const**

  		let variable-that-will-change = 'String' // 'Some String That Change in the future';
  		const pi = 3.14159265359; // constant that never change

  - Comments
  
	> Python:
 
		'#' is use for single line comment

  		''' comment here ''' is use for multiple line comments

  	> Javascript

		// is use for single line comment
  		/* comment here */ is use for multiple line comments



- **Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you**
  can try to get a missing key (like "c") *without* your programming
  crashing.

	> Solution
	
  	  variable = {"a": 1, "b": 2}

      # 1 Way
      if there is a C c = c or c = default

        c = variable.get('c', 'default') // Default can be anything

      # 2 Way
	  Using a if statement 

  	   if 'c' in variable:
          c = variable['c']


- **What is a unit test?**

  > Unit testing is a way to make sure that your code is working after you made a change or to catch more bugs by implementing a test  before deploying their code,
  python has a Unit testing framework by default and for javascript we can use Jasmine framework for testing

- **What is an integration test?**

  > Integration tests check the combinations of the different units, their interactions and how the subsystems come together in a common system.

- **What is the role of web application framework, like Flask?**

  >They support the development of web apps, automate the overhead associated with common activities and often promote code reuse.

- **You can pass information to Flask either as a parameter in a route URL**
  > (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?

  > I will use /foods/pretzel when I need to access a route or doing a POST where I don't need anyone to see the parameters
  And for 'foods?type=pretzel' I will use a query string in need to pass multiple parameter, visible parameters

- **How do you collect data from a URL placeholder parameter using Flask?**

	  @app.route('/index<parameter>')
  	  def get_parameter(parameter):
         return f'<h1>{parameter}</h1>'

      @app.route('/index/<parameter>')
      def get_parameter(parameter):
         return f'<h1>{parameter}</h1>'

- **How do you collect data from the query string using Flask?**

      @app.route('/index')
      def parameter():
         id = request.args.get('id', 1)
         username = request.args.get('username', 'Name_Default')
         return f'<h1 id="{id}">Hello {username}</h1>'    

- **How do you collect data from the body of the request using Flask?**

  Using:

      request.form key/value pairs in the body, from a HTML post form

      first_name = request.form.get('first_name')
      last_name = request.form.get('last_name')
      age = request.form.get('age')

- **What is a cookie and what kinds of things are they commonly used for?**

  > Cookies are text files with small pieces of data stored locally on the computer.
  Cookies help the website remember information about your visit. For future use of that information 
  when you come back to the same website: like amazon if you have something in your cart and leave the
  website, when you come back your cart still has the same items.

- **What is the session object in Flask?**

  > Session object is used to track the session data which is a dictionary object that 
  contains a key-value pair of the session variables and their associated values. 

- **What does Flask's `jsonify()` do?**

  > jsonify() is a function in flask, help serializes data to javascript in JSON format