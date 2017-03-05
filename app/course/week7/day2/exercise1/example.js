var toReactRender = function() {
    class HelloWorld extends React.Component{
        constructor(){
            super()
        }

        render(){
            return (
                <div> Hello World </div>
            )
        }
    }
    reactRender = ReactDOM.render(<HelloWorld/>, document.getElementById("tryMe"))
}

toReactRender()