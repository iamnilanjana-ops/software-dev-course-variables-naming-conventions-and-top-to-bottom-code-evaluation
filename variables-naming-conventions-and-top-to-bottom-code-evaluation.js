/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);

*/
  
 //rewrite the code with descriptive names:

let personName = "Alice";
let personAge = 5;
let isStudent = true;

console.log(personName + " is " + personAge + " years old.");
if (isStudent) {
  console.log(personName + " is a student.");
}

//Enhance the Program (add 2 new variables)

Let’s add courseName and graduationYear to make it more functional:

let personName = "Alice";
let personAge = 5;
let isStudent = true;
let courseName = "Computer Science";
let graduationYear = 2026;

console.log(personName + " is " + personAge + " years old.");
if (isStudent) {
  console.log(personName + " is a student studying " + courseName + ".");
  console.log("Expected graduation year: " + graduationYear);
}



