/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  // Your code here 
  let arr = []
  let key1 = Object.keys(obj1)
    for (let i = 0; i < key1.length; i++){
    // console.log(key1)
      if (key1[i] == key) {
      // console.log(obj1[key1[i]])
        arr.push(obj1[key1[i]])
      }
    }
  let key2 = Object.keys(obj2)
    for (let j = 0; j < key2.length; j++){
      // console.log(key2)
      if (key2[j] == key) {
      // console.log(obj2[key2[j]])
        arr.push(obj2[key2[j]])
      }
    }
  return arr
}
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
