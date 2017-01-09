#### MongoDb Basics

This will be a long exercise with many intermediate steps. Complete each step after the other to get all the specs passing

1. write a function to connect mongoose to your local mongo instance

1. write a mongoose schema of a ```User``` including, age, name, height, address and friends, these properties have to respectively be of type ```Number```, ```String```, ```Number```, ```String``` and ```[String]```
Address neest to to have a default to "Unknown", friens must be indexed and unique. 


1. write a function called ```friendsOf``` that takes two arguments and a callback (a name) that will fetch all the records where the User has a friend with name equal to the first argument passed. only pass the names of those Users to the callback

2.  write a function called ```unfriend``` that takes two arguments, a name and a callback, that will remove then name from all the records of Users in which if found and return all those records to the callback

3.  write a function called ```obituary``` that takes two arguments, a name and a callback, that will delete the user from the collection. return the model instance to the callback 