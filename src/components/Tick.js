import React, { Component } from '../../node_modules/react';
export default class Tick extends Component{

    constructor(){
        super();
        this.state = {
            seconds: 0,
            currentTime: new Date()
        }
    }

    inTick = () => {
       this.runInterVal = setInterval(() => {
            this.setState(state => ({
                seconds: state.seconds + 1,
                currentTime: new Date()
            }))
        }, 1000)
    }
    componentDidMount(){
        this.inTick();
    }
    componentWillMount(){
        clearInterval(this.runInterVal)
    }

    render(){
        const { seconds, currentTime } = this.state;
        return(
            <>
            <h1>Mount Time: {seconds}</h1>
            <h2>Time {currentTime.toLocaleTimeString()}</h2>
            </>     
        )
    }
}