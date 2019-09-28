import React, { Component } from '../../node_modules/react';
import Product from './Product';

export default class Products extends Component {
    users = [
        { username: 'dat', fullname: 'to van thanh dat'},
        { username: 'de', fullname: 'to van thanh de'},
        { username: 'khanh', fullname: 'to van thanh khanh'}
    ]
    render(){
        return(
            <div>
                {this.users.map(user => (
                    // <Product username={user.username} fullname={user.fullname}key={`info-user-${user.username}`}/>
                    <Product
                    key={`info-user-${user.username}`}
                    {...user}
                    />
                ))}
            </div>
        )
    }
}