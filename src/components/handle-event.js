import React, { Component } from 'react'
export default class HandleEventAddUser extends Component {

    constructor() {
        super();
        this.state = {
            users: [],
            fullname: '',
            email:''
        }
    }

    _handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        }, () => {
            console.log(this.state);
        })
    }

    _handleSubmitForm = e => {
        e.preventDefault();

        const {users, fullname, email } = this.state;

        let newArr = [...users, {fullname, email}];
        this.setState({
            users: newArr, fullname:'', email: ''
        }, () => {
            console.log(this.state);
        })

    }

    render() {
        const { users } = this.state;
        return (
            <>
                <br /><br /><br />
                <strong>Handle Event</strong>
                <br />
                <form onSubmit={e => this._handleSubmitForm(e)}>
                    <input type="text" name="fullname" placeholder='Fullname'
                        onChange={e => this._handleChange(e)}
                        value={this.state.fullname} //clear fullname in input
                    /> <br/>
                    <input type="text" name="email" placeholder='Email'
                        onChange={e => this._handleChange(e)}
                        value={this.state.email} //clear email in input
                />
                    <br/>
                    <button>@Add User</button>
                </form>
                <br />
                {/* {this.state.email} */}
                <h3>List User</h3>
                <ul>
                    {users.map((item) => (
                        <li key={`${item.fullname}`}> 
                        {item.fullname} - {item.email} </li>
                    ))}
                </ul>
            </>
        )
    }
}