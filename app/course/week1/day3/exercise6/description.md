### runOnRange

Write a function, called ```runOnRange``` that runs a function through a range of numbers and console.logs the result for the passed function but returns nothing. The function takes 2 arguments, the first is a function that can take one argument (that must be a number), and a second argument which is an object with 3 properties, start, end and an optional step. If step is missing the step will be set to 1.

Example

```jsx
var addOne = function(num) {return num + 1}
runOnRange(addOne, {start: 10, end: 17, step: 3})
// => 11
// => 14
// => 17

runOnRange(addOne, {start: -6, end: -4})
// => -5
// => -4
// => -3


runOnRange(addOne, {start: 12, end: 12})
// nothing should be console.logged in this case!

runOnRange(addOne, {start: 23, end: 26, step: -1})
// nothing should be console.logged in this case!

runOnRange(addOne, {start: 23, end: 26, step: 0})
// nothing should be console.logged in this case!


runOnRange(addOne, {start: 26, end: 23, step: -2})
// 27
// 25

```