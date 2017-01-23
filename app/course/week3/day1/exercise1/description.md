#### Hallo, नमस्ते, Bonjour, Hola, Ciao,  今晩は, 你好, مرحبا, Hello :)

Write a multy language HelloWorld app with express. To do so you need to user the ```req.originalUrl``` property to get the lanaguage the user wants the message to be printed in. Make sur that if the url does not specify any language then the app will default to english.
For this test and all the tests to come your app will listen to localhost:3001 instead of checking for a file in a folter like we have done so far. Unfortunately, the Hotreload of the exerecise is also unavaliable, so you will need to reload your browser.

Example of usage:

URL | Hessage
----|---------
/NL | Hallo Wereld
/HI | नमस्ते दुनिया
/FR | Bonjour le monde
/ES | Hola Mundo
/IT | Ciao Mondo
/CH | 你好，世界
/JP | こんにちは世界
/AR | مرحبا بالعالم
/EN | Hello world
/   | NL: Hello world, HI: नमस्ते दुनिया, ..., EN: Hello world.


**Set Up Steps:**
1. npm init
2. npm install --save express (you might need to do sudo)
3. in package.json add the following 
```jsx
  "scripts": {
    "start": "nodemon server.js",
  },
```
4. now, when your code is ready, you should be able to use ```npm start``` to launch your app.
5. remember to set the app to listen to ```localhost:3001```

**Notes:** There are many ways to make the test pass, one of the is to use ```req.params```, you can find more info in the [express documentation](https://expressjs.com/en/guide/routing.html#route-parameters)
