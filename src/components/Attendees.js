import React, { Component } from 'react';
import Badge from './Badge';
import RemoveAttendee from './RemoveAttendee';

export default class Attendees extends Component {
    render() {
        const { data } = this.props;
        return (
            <ul className="attendees">
                { data.map((attendee, index) =>
                    <li className="attendees__attendee" key={attendee.id}>
                        <Badge attendee={attendee} />
                        <RemoveAttendee removeAttendee={this.props.removeAttendee} id={attendee.id} />
                    </li>
                )}
            </ul>
        );
    }
}
