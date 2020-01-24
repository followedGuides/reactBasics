import React from 'react'

class StatefullComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: props.items
        }
    }

    addItem(item) {
        this.setState({
            items: [...this.state.items, item ]
        })
    }

    render() {
        return (
            <div>
        <ul>
            {
                this.state.items.map(item => <li> {item} </li>)
            }
        </ul>
                <input type="text" placeholder="type a new item in here" />
                <button> add item to list</button>
            </div>
    )}
}


export default StatefullComponent