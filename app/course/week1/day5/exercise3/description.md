### Schema force type

Continuing the previous exercise, add the posibility to force the type of the value that can be set on a given property. In this case schema is an object and no longer an array. The allowed values are only ```"string"```, ```"number"``` and ```"boolean"```. If the value of a given property does not have the appropriate type, then the property will not be added to the new object in the db.

**Example:**

```jsx
schema = {id: "number", name: "string", age: "number", married: "boolean"}
DB = []

model("add", {id: 1, name: "Pedro", age: "32", address: "Rue de la Science 23, Brussels", married: "to mian"})
DB // [{id: 1, name: "Pedro"}] => married and age not added because of the wrong type (why?)

```
**Note:** to check the type of a JS variable use ```typeof``` // (typeof "32")