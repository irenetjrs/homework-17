let text = 'You can ignore single and double quotes like this:  \\\' \\\'  \\\"  \\\"'
console.log(text);
alert('Please enter your data');
let userName = prompt(
   'Enter your name', 
   'Name'
);
alert(`Your name is: ${userName}`);
let userSurname = prompt(
   'Enter your surname', 
   'Surname'
);
alert(`Your full name is: ${userName} ${userSurname}`);
let age = prompt(
   'How old are you?', 
   'Age'
);
alert(`Your full name is: ${userName} ${userSurname}, your age is: ${age}`);
let admin = confirm(`Are you admin?`);
alert(`Your full name is: ${userName} ${userSurname}, your age is: ${age} admin status: ${admin}`);
