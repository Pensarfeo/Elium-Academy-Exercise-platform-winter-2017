#### Cypher

Build a symple cypher. Assuming that you can use all letters in the alphabet, only lowercase characters, point commas and question marks, build a cypher that turns readable text into unreadable coded text and then back to your original readable text. 

**Example:**

```jsx
var sample = "hello class, how are you? this text is going to be encrypted in few seconds"

var encripted = encrypt(sample);    // "85==#Q3=1&&:Q8#_Q1^5Q<#(GQ*89&Q*5+*Q9&Q7#9@7Q*#Q25Q5@3^9$*54Q9@Q65_Q&53#@4&"
var decripted = decrypt(encripted); // "hello class, how are you? this text is going to be encrypted in few seconds"
sample === decripted;               //  true

```

**Notes:** to succefully solve the problem use the following map of characters

```jsx
var characters = "abcdefghijklmnopqrstuvwxyz.?,' " 
var encription = "1234567890-=!@#$%^&*()_+<>HG:DQ" 
```
