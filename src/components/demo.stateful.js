import React, { Component } from 'react';

export default class DemoStateFul extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const { username, email } = this.props;
        return(
            <div>
                <strong>
                    {email} - {username}
                </strong>
            </div>
        )
    }
}