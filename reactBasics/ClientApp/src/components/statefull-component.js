import React from 'react'

class StatefullComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }

    render() {
        return(
        <ul>
            {
                this.state.items.map(item => <li> {item} </li>)
            }
        </ul>
    )}
}


export default StatefullComponent