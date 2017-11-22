import React, { Component } from 'react'

export default class InputForm extends Component {
    constructor(props){
        super(props)
    }

    handleChange = e => {
        this.props.changeState(this.props.id, e.target.value)
    }


    render(){
        return (
            <input
            type={this.props.type}
            className="form-control"
            id={this.props.id}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
          />
        )
    }
}