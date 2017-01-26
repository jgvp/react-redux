import React, { Component } from 'react';

export default class RemoveAttendee extends Component {
	handleOnClick() {
		let index = this.props.index;

		this.props.removeAttendee(index);
	}
	render() {
		return (
			<button className="alert button tiny" onClick={this.handleOnClick.bind(this)}> &times; Remove attendee</button>
		)
	}
}
