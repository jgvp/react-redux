import React, { Component } from 'react';

export default class Badge extends Component {
	render() {
		var style = {backgroundColor: this.props.attendee.color};

		return (
			<div className="hello-badge" style={style}>
				<p className="hello-badge__title"><span className="hello-badge__hello">Hello</span><br /> my name is</p>
				<p className="hello-badge__name">{this.props.attendee.name}</p>
			</div>
		)
	}
}
