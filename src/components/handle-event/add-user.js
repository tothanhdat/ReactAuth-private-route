import React, { Component } from 'react'
export default class AddUser extends Component {

    constructor() {
        super()

        this.state = {
            items: [],
            username: ''
        }
    }
    _handleChangeInput = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }
    _handleSubmit = (e) => {
        e.preventDefault()
        const { items, username } = this.state
        var itemsNew = [...items, username]

        this.setState({
            items: itemsNew,
            username: ''
        })
    }

    render() {
        const { items, username } = this.state
        return (
            <>
                <h2>Add Items</h2>
                <form onSubmit={e => this._handleSubmit(e)}>
                    <input name="username" type="text" value={username} onChange={e => this._handleChangeInput(e)} />
                    <button type="submit" >
                        @Add items
                    </button>
                </form>
                ---------
            <ul>
                    {items.map((item, index) => (
                        <li>#{index + 1} - {item}</li>
                    ))}
                </ul>
            </>
        )
    }
}
