import React, { Component } from 'react'
import { Link, Route, Redirect, withRouter } from 'react-router-dom'

export default class AuthDemo extends Component {

    render() {
        return (
            <>
                <h1>Demo Auth</h1>
                <ul>
                    <li>
                        <Link to='/public'>Public</Link>
                    </li>
                    <li>
                        <Link to='/dashboard'>Dashboard</Link>
                    </li>
                </ul>
                <hr/>
                <PublicRoute path='/public' component={Public} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <Route path='/login' component={Login} />
            </>
        )
    }
}
const Public = () => <h1>Public site</h1>
const Dashboard = withRouter( 
    ({history}) =>
            <>
                <h1>Dashboard site</h1>
                <h2>Welcome!!</h2>
                <button onClick={() => fakeAuth.logout(() => history.push('/public'))}>Logout</button>
            </>
) 

const fakeAuth = {
    isAuth: false,
    login(cb) {
        this.isAuth = true;
        cb()
    },
    logout(cb) {
        this.isAuth = false;
        cb()
    }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route
        {...rest}
        render={props =>
            fakeAuth.isAuth ?
                <Component {...props}/> :
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
        }
    />
}
const PublicRoute = ({ component: Component, ...rest }) => {
    return <Route
        {...rest}
        render={props => <Component {...props} />
        }
    />
}
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoginRedirect: false
        }
    }
    _login = () => {
        fakeAuth.login(() => {
            return this.setState({ isLoginRedirect: true })
        })
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { isLoginRedirect } = this.state
        if(isLoginRedirect) return <Redirect to={from.pathname}/>
        return (
            <>
            <strong>You must login for view page</strong> 
            <br/>
            <button onClick={() => this._login() }>Login</button>
            </>
        )
    }
}
