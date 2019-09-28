import React, {Component} from 'react'
export default class HandleEvent extends Component{

    constructor(){
        super()
        
        this.handleClick2 = this.handleClick2.bind(this)
    }

    handleClick(){
        alert('Hello')
    }

    handleClick2(){
        alert('Hello 2')
    }

    render(){
        return(
            <>
            Hello Handle Event
            <br/>
            <button onClick = {() => this.handleClick()}>
                Click here
            </button>
            <br/>   
            <button onClick = {() => this.handleClick2()}>
                Click here 2
            </button>
            </>
        )
    }
}