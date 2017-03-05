#### Hello Class

Write a react commonent (stateless function) called helloClass, whose props will be an array with few names. The components render a list (```ul```) with all the names (```li```)

**Example:**

```jsx
<helloClass names = {["Nicole", "Antonello", "Kirsten", "Waseem"]}/>
// displays:
<div>
    <h3> The names of the students are </h3>
    <ul>
        <li>Nicole</li>
        <li>Antonello</li>
        <li>Kirsten</li>
        <li>Waseem</li>
    </ul>
</div>

<helloYou names = {["Sadre", "Daniel", "Yiorgos", "Jothi"]}/>
// displays:
<div>
    <h3> The names of the students are </h3>
    <ul>
        <li>Sadre</li>
        <li>Daniel</li>
        <li>Yiorgos</li>
        <li>Jothi</li>
    </ul>
</div>
```

**Notes:** You should not change the prop object passed!

