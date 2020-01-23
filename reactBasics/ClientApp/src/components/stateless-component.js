import React from 'react'


export default function StatelessComponent(props) {
    console.log(props)
    return(
        <ul>
            {
                props.items.map(item => <li> {item} </li>)
            }
        </ul>
        )
}