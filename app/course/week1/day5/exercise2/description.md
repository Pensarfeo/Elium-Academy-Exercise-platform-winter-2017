### Schema

Create a function called ```model```. the model function allows you to control how you interact with a collection of objects that we call ```collection``` that are stored in the DB. Model imposes conditions on the properties of the collection, for example which keys are allowed.
In this exercise create a model function. This model uses the definitions of a predefined object called ```schema``` (youn don't need to define it) to assert the keys that each object in a collection that are allowed. The model function can take 2 arguments: the first is an object with the type of the operation we want to execute on the db and the second is the data we need to execute it. For now we only define an operation called 'add'

**Example:**

```jsx
schema = ["id", "name", "age"]
DB = []

model("add", {id: 1, name: "pedro", age: 32, address: "Rue de la Science 23, Brussels"})
DB // [{id: 1, name: "Pedro", age: 32}] => Address was not added because not allowed by the schmea

model("add", {id: 1, age: 32, address: "Rue de la Science 23, Brussels"})
DB // [{id: 1, age: 32}] => Address was not added because not allowed by the schmea



```