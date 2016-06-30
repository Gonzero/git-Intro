// Create a variable called msg to hold a new message
 // var msg = 'Sign up to receive our newsletter for 10% off!';
​
// Create a function to update the content of the element whose id attribute has a value of message

var msg1 = "I hope to get a good understanding of how to create web pages using concepts and knowledge of coding."
var msg2 = "I want to be adept at switching between different languages and interfaces to complete a project"
var msg3 = "I want to have experience working in a team environment"

function updateMessage() {
​
​var el1 = document.getElementById("message1");
var el2 = document.getElementById("message2");
var el3 = document.getElementById("message3");


el1.textContent = msg1;
el2.textContent = msg2;
el3.textContent = msg3;
}
​
// Call the function
updateMessage();



