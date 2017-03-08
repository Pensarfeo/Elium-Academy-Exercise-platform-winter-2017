#### Detail


Create a more general version of the previous exercise. This time; instead of having a single component for each line of information; we create one component to which we pass information through props and display the given information as in the example

**Example:**

```jsx
<Profile>
    <div><Detail detail={{Name: "Pedro"}} /></div>
    <div><Detail detail={{Email: "pedro@pedro.pedro"}} /></div>
    <div><Detail detail={{Address: "PedroStraat 21, 3000 Pedroland"}}/></div>
</Profile>
// displays:
<div>
    <div> Name: Pedro </div>
    <div> Email: pedro@pedro.pedro </div>
    <div> Address: PedroStraat 21, 3000 Pedroland </div>
</div>

<Profile>
    <div><Detail detail={{Name: "Sophie"}} /></div>
    <div><Detail detail={{Email: "Sophie@Sophie.Sophie"}} /></div>
    <div><Detail detail={{Address: "SophieStraat 21, 3000 Pedroland"}}/></div>
</Profile>
// displays:
<div>
    <div> Name: Sophie </div>
    <div> Email: Sophie@Sophie.Sophie </div>
    <div> Address: SophieStraat 21, 3000 Pedroland </div>
</div>
```

**Notes:** You don't need to import any script or render the component. the React class is already avaliable withing the platform.