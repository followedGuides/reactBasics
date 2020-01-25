import React from 'react'

class StatefullComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: props.items,
            newItem: '',
        }
        this.addItem = this.addItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        console.log(e.target)
        this.setState({
            newItem: e.target.value
        })
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
                <input type="text" placeholder="type a new item in here" value={this.state.newItem} onChange={this.handleChange}
                    />
                <button> add item to list</button>
            </div>
    )}
}


export default StatefullComponent