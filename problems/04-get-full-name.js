/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/

function getFullName(person) {
  // Your code here 
  let firstname = ''
  let lastname = ''
  let key = Object.keys(person)
  for (let i = 0; i < key.length; i++){
    if (key[i] == 'firstName') {
      firstname += person[key[i]]
    }
    else if (key[i] == 'lastName') {
      lastname += person[key[i]]
    }
  }
  return firstname + ' ' + lastname
}
let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
