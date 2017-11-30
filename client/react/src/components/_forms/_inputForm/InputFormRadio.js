import React, { Component } from 'react'

export default class InputFormRadio extends Component {
    constructor(props){
        super(props)
    }

    handleChange = option => {
        this.props.changeState(this.props.index, this.props.id, option)
    }

    capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render(){
        
        return (
            <div className="form-group">
            <label className="control-label col-sm-2" htmlFor={this.props.id}>
            {this.capitalizeFirstLetter(this.props.id)}
            </label>
            <div className="col-sm-9">
                { 
                    this.props.options.map((option,i) => {
                        return (<label key={i} className="radio-inline">
                        <input key={i} onClick={() => this.handleChange(option)} type={this.props.type} className="radio-btn" name={this.props.id} value={option} />{this.capitalizeFirstLetter(option)}
                      </label>)
                    })
                }
            </div>  
            </div>       
        )
    }
}