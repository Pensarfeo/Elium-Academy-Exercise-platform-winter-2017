#### Moving Components 

**Attention:** This exercise is fun but it is quite hard; You can move on to tomorrow exercises in you would like to have something simpler!

Create a react component that manages several other components. Each child component will be create at a interval of more or less 2 seconds and each created component should move from left to right of the parent box.

```css
    .game {
        display: inline-block;
        background-color: red;
        width: 500px;
        height: 200px;
        position: relative;
        border-bottom: 2px solid black
    }

    .moving-box {
        display: inline-block;
        background-color: black;
        position: absolute;
        bottom: 0px;
        left: 250px;
        width: 25px;
        height: 25px;
        -webkit-transition: left 0.1s; 
        transition: left 0.1s;
    }
```

This Styling is already presend in the document so no extra should be needed