#### Custom Profile

Create a react component (stateless function) called Profile that lists your name, address and email and others. Each field should be controlled by a single component called detail that renders the approprieate detail according to the prop passed.

**Example:**

```jsx
<Profile>
    <div><Detail detail={{Name: "Pedro"}} /></div>
    <div><Detail detail={{Email: "pedro@pedro.pedro"}} /></div>
    <div><Detail detail={{Address: "PedroStraat 21, 3000 Pedroland"}}/></div>
</Profile>
// displays:
<div>Profile
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
<div>Profile
    <div> Name: Sophie </div>
    <div> Email: Sophie@Sophie.Sophie </div>
    <div> Address: SophieStraat 21, 3000 Pedroland </div>
</div>
```