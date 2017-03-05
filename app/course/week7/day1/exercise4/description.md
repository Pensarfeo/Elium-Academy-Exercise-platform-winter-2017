#### Bigger than

Create a react commonent (stateless function) called greaterThanTen. This components returns a div with text True or False if if a number is passed as a prop. Else, if we pass a prop with the wrong key or the value is not a number it renders ```<h3>Wrong prop Type or expected prop missing</h3>```.

**Example:**

```jsx
<greaterThanTen value = {4}/>
// displays:
<div>False</div>


<greaterThanTen value = {10}/>
// displays:
<div>False</div>

<greaterThanTen value = {11}/>
// displays:
<div>True</div>

<greaterThanTen value = {"11"}/>
// displays:
<h3>Wrong prop Type or expected prop missing</h3>

<greaterThanTen bananas = {11}/>
// displays:
<h3>Wrong prop Type or expected prop missing</h3>
```