import React, { Component } from "react";

export default class InputFormArea extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    this.props.changeState(this.props.index, this.props.id, e.target.value);
  };

  capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    return (
      <div className="form-group">
        <label className="control-label col-sm-2" htmlFor={this.props.type}>
          {this.capitalizeFirstLetter(this.props.id)}
        </label>
        <div className="col-sm-9">
          <textarea
            type={this.props.type}
            className="form-control"
            rows={4}
            id={this.props.id}
            placeholder={this.props.placeholder}
            defaultValue={""}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
