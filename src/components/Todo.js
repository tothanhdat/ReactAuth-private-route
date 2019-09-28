import React, { Fragment } from '../../node_modules/react';
export default class Todo extends React.Component {
    constructor(){
        super()
        this.state = {
            items: [],
            username: '',
            fullname: '',
        }
    }
    _handleChangeInput = e => {
        this.setState({
            [e.target.name] : e.target.value
        }, () =>{
            console.log(this.state);
        })
                  
    }
    render(){
        const { items, username } = this.state;
        return(
            <Fragment>
                <form action="">
                    <input type="text" name="username" value = { username } onChange ={(e) => this._handleChangeInput(e)}/>
                    <button>@Add Item</button>
                </form>
            </Fragment>
        )
    }
}