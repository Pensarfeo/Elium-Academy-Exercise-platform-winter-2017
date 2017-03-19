import React from 'react'

const ProfileTab = (props) => {
    const nametagStyle = {display: "inline-block", float: "right", marginTop: -66}
    return(
        <ul className="nav nav-tabs" style={nametagStyle}>
            <li role="presentation" className="active">
                <a>{props.name}</a>
            </li>
        </ul>
    )
}

export default ProfileTab