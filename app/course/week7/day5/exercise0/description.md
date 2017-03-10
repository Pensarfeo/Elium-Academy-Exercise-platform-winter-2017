#### Preparation
Today we are going to look at how to use bootstrap with react, how to style a react component and finally we are going to take a look at react devTools.

##### React Dev tools
Install React devTool on (chrome)[https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en]

##### React bootstrap
React bootstrap provides lots of usefull components that can be used out of the box with react. To do so you need to load bootstrap css in your html and also load the ReactBootstrap Components at the following URL (https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.30.8/react-bootstrap.min.js)
There are tons of Components that you can use.

```jsx


```

#### React and html Classes.

To set an html class attribute for a react component we need to use a special prop called ```className``` like in the following example.

```jsx
class HelloWorldComponent extends {
    render(){
      return <div className = 'myClass'> Hello World! </div>;
    }
}
```

#### Styling react components

A way of doing styling with react is by keepking the component's style withing the component itself and passing it inline. However we cannot pass it with the same css syntax we use so far. When styling, inline styles need to be written with cammel case, and a complete list of all the avaliable inline styling for react components can be found (here)[http://www.w3schools.com/jsref/dom_obj_style.asp]

```jsx
class HelloWorldComponent extends {
    constructor(){
        super()
        this.ownStyle = {
              color: 'blue',
              backgroundColor: 'red',
        }
    }
    render(){
      return <div style={this.ownStyle}>Hello World!</div>;
    }
}
```
