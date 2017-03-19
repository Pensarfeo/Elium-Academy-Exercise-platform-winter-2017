// presentation stuff
import React from 'react'
import {Thumbnail} from 'react-bootstrap'

class Picture extends React.Component{
    constructor(){
        super();
        this.show = this.show.bind(this)

    }
    show() {
        browserHistory.push(`/profiles/${this.props.profile.id}/show`)
    }
    render(){
        const profile = this.props.profile
        const src = this.props.src || "https://cdn2.iconfinder.com/data/icons/ui-1/60/05-512.png"
        return(
            <Thumbnail src={src} alt={this.props.alt}>
                {this.props.children}
            </Thumbnail>
        )
    }
}

export default Picture