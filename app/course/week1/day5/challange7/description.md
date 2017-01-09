### Complete Model

In web programming the Model  determines the logical structure of a database and fundamentally determines in which manner data can be stored, organized, and manipulated. For our model to be usable we need to define more operations and upgrade our schema. Let the schema take one more property for each key that is called condition. Condition is a function that takes 3 arguments, the current object we pass for updating or creating a new record, the db and the data of the current record we are operating on. The condition callback can only return true or false; if true the operation will continue, if false it will fail.

Also create the functionalities to update, delete and retrive a specific record with a key/value pair as specified.

___
**API:**
```jsx
model("add", new)
```
*@new:* new data to be added to the db as a completely separate and new object

```jsx
model("update", searchPropety, new) 
```
*@searchPropety:* property that we have to match the current saved records agains. If one or more records that match that condition are present update all of them. If no match is found no update will occur.
*@new:* new properties to be used on the already present recod. This update is non destructive, it only modifies propetiesa that are included in new.

```jsx
model("delete", searchPropety) 
```
*@searchPropety:* property that we have to match the current saved records agains. If one or more records that match that condition are present delete all of them.

___
**Example:**

```jsx

// we define a condition function
ageCondition(newRecord, db, oldRecord ){
    // if new Record is not a number no update or add of this property is allowed
    if (typeof newRecord.age !== "number" ) return false 
    if (oldRecord) {
        // we are currently defining the rules to allow updating
        // we asume that people can only get older
        if (oldRecord.age) {
            return ((newRecord.age <= oldRecord.age) ? false : true)
        }
    }
    return true
}

schema = {
    name: {type: "string", default: "NoBody"},
    age: {condition: ageCondition},
    married: {type: "string", defaul: false}

    }
DB = []

model("add", {id: 1, name: "pedro", age: "32"})
DB // [{id: 1, name: "Pedro"}] => age is not a number and the condition returns false


model("update", {name: "pedro"}, {age: 35})
DB // [{id: 1, name: "Pedro", age: 35}]

model("update", {name: "pedro"}, {age: 32})
DB // [{id: 1, name: "Pedro", age: 35}] => new age cannot be smaller than old one

model("add", {id: 2, name: "juan", age: 25})
DB // [{id: 1, name: "Pedro", age: 35}, {id: 2, name: "juan", age: 25}]

model("delete", {name: "pedro"})
DB // [{id: 2, name: "juan", age: 25}]


```