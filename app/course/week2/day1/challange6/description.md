#### Simple Server

A server is a function that returns resources on each request; particularly web servers expect instructions in the form of strings; that are usually called URL. The server has only one method called router, that takes care of analizing the URL and called the appropriate method.
Use the ```createAccount``` class constructor with its associated methods you defined in execise 3 to create a server that allows you to do all the bank account operations plus keep track of multiple accounts at the same time.
To succeffully pass the test you should make use of the following API

---
**API**

URL (String)                  | return (String)                                  | comments
-                             | -                                                | -
/account/new/:ammount         | account nr :accountID create with :ammount euros | It must unique, no matter the number of calls
/:accountID/withdraw/:ammount | :ammount euros taken from account nr :accountID  | if :accountID not found return "Account not found"
/:accountID/deposit/:ammount  | :ammount euros added to account nr :accountID    | if :accountID not found return "Account not found"
/:accountID/balance           | The balance of account nr :accountID is ## euros | if :accountID not found return "Account not found"
/:accountID/delete            | Account nr :accountID deleted                    | if :accountID not found return "Account not found"
/*                            | 404 resource not found                           | what to do in case we match to anything else

**Example:**
```jsx

serverInstance = new Server()

// we can create an arbitrary number of accounts
userId = serverInstance.router("/account/new/10") // account nr 1 create with 10 euros
userId2 = serverInstance.router("/account/new/0") // account nr 2 create with 0 euros

// we can operate on each accoun independently
serverInstance.router("/1/withdraw/2")  // 2 euros taken from account nr 1
serverInstance.router("/2/withdraw/5")  // 5 euros taken from account nr 2

serverInstance.router("/1/deposit/2")  // 2 euros added to account nr 1
serverInstance.router("/2/deposit/8")  // 5 euros added to account nr 2

serverInstance.router("/1/balance")  // The balance of account nr 1 is 10 euros
serverInstance.router("/2/balance")  // The balance of account nr 2 is 3 euros

//we should be able to destroy accounts
serverInstance.router("/2/delete") // Account nr 2 deleted

serverInstance.router("/1/balance")  // The balance of account nr 1 is 10 euros
serverInstance.router("/2/balance")  // Account not found

// we can keep creating accounts allways with unique ids
userId = serverInstance.router("/account/new/10") // account nr 3 create with 10 euros

```


