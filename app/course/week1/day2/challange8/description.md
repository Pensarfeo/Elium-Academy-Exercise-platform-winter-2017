### advancedRunOnRange

Extend the functionality of the previous function defined in Exercise 6 to include the possibility of passing functions with multiple variables.
Example:

```jsx
var sum = function(num1, num2) {return num1 + num2}
runOnRange(addOne, {0: {start: -1, end: -3, step: -1}, 1: {start: 4, end: 8, step: 3}})
// 3
// 6
// 2
// 5
// 1
// 4
```

Note: the function should be able to accept an arbitrary number of ranges to loop on