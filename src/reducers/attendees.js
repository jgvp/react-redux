const initialState = {
    isFetching: false,
    attendees: []
};

export default function attendees(state = initialState, action) {
    switch (action.type) {
    case 'ADD_ATTENDEE':
        return Object.assign({}, state, { attendees: [action.payload, ...state.attendees] });
    case 'REMOVE_ATTENDEE':
        return Object.assign({}, state, { attendees: state.attendees.filter(attendee => attendee.id !== action.id) });
    case 'REQUEST_LIST':
        return Object.assign({}, state, { isFetching: true });
    case 'RECEIVE_LIST':
        return Object.assign({}, state, { attendees: [...state.attendees, ...action.payload], isFetching: false });
    default:
        return state;
    }
}
