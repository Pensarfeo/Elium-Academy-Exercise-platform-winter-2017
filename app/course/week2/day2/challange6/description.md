#### Simple Server

A server is a function that returns resources on each request; which can be nothing more than a simple function call.
Continuing Exercise 3 create a simple server for creating bank accounts. Added to the old functions the server needs to have a ```createAccount``` function that returns an id to use to adentify the client and a ```destroyAccount``` function that returns nothing but deletes the reference to the user from our memory. The all methods now have to take one additional argument, that is the id of the account, to only operate on the correct account. Finally if these argument is not passed then the transaction will be refused.

Example:
```jsx
serverInstance = new Server()

// we can create an arbitrary number of accounts
userId = serverInstance.createAccount(5) // 1
userId2 = serverInstance.createAccount() // 2


// we can operate on each accoun independently
serverInstance.withdraw(2, userId)  // 2 euros taken from account nr 1
serverInstance.withdraw(5, userId)  // 5 euros taken from account nr 1

serverInstance.withdraw(2, userId2)  // 2 euros taken from account nr 2
serverInstance.withdraw(5, userId2)  // 5 euros taken from account nr 2


serverInstance.deposit(4, userId)  // 4 euros taken from account nr 1
serverInstance.deposit(1, userId)  // 1 euros taken from account nr 1

serverInstance.balance(userId)  // your balance is: -2 euros
serverInstance.balance(userId2)  // your balance is: -7 euros

// If the account is closed no transaction for that account will be allowed
userId2 = serverInstance.destroyAccount(userId2) // Account with nr 2 closed

serverInstance.balance(10, userId2) // Account not found
serverInstance.withdraw(2, userId2) // Account not found

serverInstance.withdraw(5, userId)  // 5 euros taken from account nr 1

// new accounts will allways have a growing id and never repeated even if a previous account with that id was deleted.
userId3 = serverInstance.createAccount() // 3
```


