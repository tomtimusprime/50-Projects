//Dom Manipulation Notes
//There are 5 ways to select items in the DOM

//1. getElementById();
//2. getElementByClassName();
//3. getElementsByTagName(); Returns an HTMLElement List
//4. querySelector();
//5. querySelectorAll(); Returns a nodelist

//First DOM technique to master DOM manipulation - web dev simplified https://www.youtube.com/watch?v=y17RuWkWdn8 (Learn DOM Manipulation in 18 minutes)

//1. Adding elements to a page:
const body = document.body;
//The append() method can add a plain o'l string to the page
body.append('Hello World'); 
//The appendChild() method requires a node or an element like divs, or spans or anchor tags to add to the page.
const div = document.createElement("div");
const p = document.createElement("p");
p.innerText = "This is a paragprah tag."
div.appendChild(p);
body.appendChild(div);
//The append() method is much more versatile because you can add multiple things to the page with one method call.

//2. Creating elements to add to a page;
const newElement = document.createElement('span'); //This only creates the element, it doesn't actually add it to the page yet.
body.appendChild(newElement);

//3. Manipulating the text of an element
//innerText vs textContent - textContent shows the spacing and formatting of the text within an element. innerText ignores everything
//except for the string value
console.log(p.textContent);
console.log(p.innerText);

//4. Removing an element
p.remove();
console.log(`p tag removed.`);

//created a random quote generator in Angular
//Worked on C# all day
//Worked on C# all day at work
//Worked on SQL all day at work.
//Worked on SQL and C# all day at work.
//work on C# today
//Worked on SQL today and C# - continued working on my file reader and writer.
//worked on C# all day at work.
//Worked on C# all day at work.
//Worked on C# all day at work and some sql.
//Worked on C# all day at work and some sql.
//Worked on C# all day and some sql stored procedures.
//worked on some Angular doing a simple javascript project in stackblitz.
//Worked on some Javascript
//worked on C# and SQL at work - worked on fixing PR comments
//worked on C# and SQL at work - worked on fixing PR comments
//Studied Javascript today
//Studied javascript today.
//studied javascript today.
//studied javascript today.
//worked on React today on stackblitz
//worked on sql and SSIS today
//worked on sql and SSIS today
//worked on sql and SSIS today
//Worked on SQL and SSIS today
//Worked on SQL and SSIS today