import React, { Component } from 'react';

export default class RemoveAttendee extends Component {
	handleOnClick() {
		let id = this.props.id;

		this.props.removeAttendee(id);
	}
	render() {
		return (
			<button className="alert button tiny" onClick={this.handleOnClick.bind(this)}> &times; Remove attendee</button>
		)
	}
}
