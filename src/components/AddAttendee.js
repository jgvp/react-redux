import React, { Component, PropTypes } from 'react';

export default class AddAttendee extends Component {

	handleSubmit(e) {
		// Stop page refreshing
		e.preventDefault();

		let refs = this.refs;
		let name = refs.name.value;
		let color = refs.color.value

		// Trigger action
		this.props.addAttendee(name, color);

		// Reset form
		refs.addAttendee.reset();
	}

	render() {
		return (
			<div className="row">
				<div className="medium-6 medium-offset-3 columns">
					<form ref="addAttendee" onSubmit={this.handleSubmit.bind(this)}>
						<label>Name</label>
						<input id="name" type="text" ref="name" placeholder="John Doe" />
						<label>Favourite color</label>
						<input id="color" type="text" ref="color" placeholder="#2e2e2e" />
						<button type="submit" className="button">Add attendee</button>
					</form>
				</div>
			</div>
		)
	}
}
