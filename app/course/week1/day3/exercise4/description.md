### Insideout
write a function called insideOut that takes two arguments, both objects, and returns an other object where the property/value pairs of the first object have been swapped according to what it's indicated in the second object. If the second object does not contain an indication for the swapping, then it will default to false. the values of the second object must be booleans. If any of the values is not a boolean then console.log "improperly formatted swapping map" and make sure you return an object where no keys where modified. If a key is missing then we will assume that specific pair should not be swapped.

Example:

```jsx

// badly formatted map
var obj = {a: 1, b: 2}
var map = {a: 1, b: false}

var newObje = insideOut(obj, map)
// => "improperly formatted swapping map"
// {a: 1, b: 2}

// properly formatted map
var obj = {a: 1, b: 2, d: 4}
var map = {a: true, b: false}

var newObje = insideOut(obj, map)
// => "improperly formatted swapping map"
// {1: "a", b: 2, d: 4}

```

