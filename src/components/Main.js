import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AttendeesActions from '../actions'
import AddAttendee from './AddAttendee';
import Attendees from './Attendees';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sortAsc: true,
            sortString: ''
        };
    }

    componentDidMount() {
        this.props.addListAttendees();
    }

    render() {
        const { sortAsc, sortString } = this.state;
        const { attendeesState } = this.props;
        const attendeesList = attendeesState.attendees
            .filter(attendee => attendee.name.toLowerCase().indexOf(sortString.toLocaleLowerCase()) >= 0)
            .sort((a, b) => {
                if (sortAsc) {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                }

                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
            });
        return (
            <div>
                <h1>Attendees</h1>
                <hr />
                <AddAttendee addAttendee={this.props.addAttendee} />
                <hr />
                <div className="medium-6 medium-offset-3 columns">
                    <label>Filter</label>
                    <input
                        type="text"
                        value={sortString}
                        onChange={e => this.setState({ sortString: e.target.value })}
                    />
                    <button className="button" onClick={() => this.setState({ sortAsc: !sortAsc })}>
                        Sort {sortAsc ? 'Desc' : 'Asc'}
                    </button>
                </div>
                <hr />
                {attendeesState.isFetching && (<h4>Loading...</h4>)}
                <Attendees data={attendeesList} removeAttendee={this.props.removeAttendee} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    attendeesState: state.attendees
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(AttendeesActions, dispatch)
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
