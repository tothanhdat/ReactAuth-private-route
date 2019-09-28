import React from '../../node_modules/react';

export default function DemoStateless(props) {
    const { username, email } = props;
    return (
        <div>
            {email} - {username}
        </div>
    )
}