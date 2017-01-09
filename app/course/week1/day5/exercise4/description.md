### Schema force with Default

We can now make sure that missing values are defaulted to a given value. In this case the value of a given property of the schema object will now be formed by an object with keys ```"type"``` and ```"default"```. If not default key is added then the given property willnot be addedd unless specified. If the default is set then, if no present or breaking an other of the schema roules, the value will be set to the default

**Example:**

```jsx
schema = {
    name: {type: "string", default: "NoBody"},
    age: {type: "number"},
    married: {type: "boolean", default: false}
    }
DB = []

model("add", {id: 1, name: "pedro", age: "32", address: "Rue de la Science 23, Brussels")
DB // [{name: "Pedro", married: false}] => married set to default even if missing

model("add", {name: 43, married: "asdfasdf"))
DB // [{name: "NoBody", married: false}] => married and name set to default even wrong type

model("add", {name: "43", married: true, age: 20))
DB // [{name: "43", married: true, age: 20}]


```