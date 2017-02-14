#### SignUp User

This week you will create an authentication system from stratch; that measn SignUp, SignIn, SignOut & a way to check if the user is signedIn. Today you only need to create a signUp page; Very important is that you set the validations for the email and password's.
1. The password should be at least 8 characters
2. The email should look like an email
3. Both email & password must be required
4. The email mush be unique and not shared with any other user

Once the user has been registerd, redirect him to the home page where you will show his email, password, and sessionID. You can follow the example in [http://elium-athentication-complete.herokuapp.com/]. Moreover you should allert the usser with a message if password and/or email are incorrect. Finally add a route ```/clean``` to remove all user's records from the collection. This will be called at each time we start the test to reset the initial conditions.

**API:**

Method | URL     | Action
-      | --------| ---------
GET    | /signUp | show Sign Up form
POST   | /signUp | Resiter User and redirect to "/" || show singUp form with error messages.
GET    | /       | Display User Info
GET    | /clean  | Remove all user's records from your collection

*GET  - /signUp*
1. Expected to have: A form to add new sentences. Look at the example for the full list of errors.

```html
<form action="/signUp" method="POST">
    <input type="text" name="email">
    <input type="password" name="password">
    <input type="submit" value="submit">
</form>
```

*POST  - /signUp*
In case of failure expected to have: A form to add new sentences and the errors. Look at the example for the full list of errors.
```html
<!-- if any errors then show -->
<p class = "error" for="email"> </p>
<p class = "error" for="password"> </p>

<form action="/signUp" method="POST">
    <input type="text" name="email">
    <input type="password" name="password">
    <input type="submit" value="submit">
</form>
```
2. In case of success redirect home.

*GET  - /*
Show user info. sessionID should be also stored in a cookie
```html
    YOu Made It
    <div>
        <div id = "email">email: <%= user.email %></div>
        <div id = "password">password: <%= user.password %></div>
        <div id = "sessionID">sessionID: <%= session.id %></div>
    </div>
    <form action ="/signOut" method = "post">
        <input type = "submit" value = "LogOut">
    </form>

```

**Notes:** try to fix the validation's yourself, however, if it takes to long, ask for the solution. The goal of this exercise is not to check that you can find the right settings, but that you can build the functionality.