import React from 'react'


export default function StatelessComponent(props) {
    console.log(props)
    return(
    <ul>
        <li>{props.props_1} </li>
        <li>{props.props_2} </li>
        <li>{props.props_3} </li>
        <li>{JSON.stringify(props.props_4)} </li>
    </ul>
        )
}