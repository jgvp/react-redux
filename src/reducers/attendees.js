import Data from '../data/data'


export default function attendees (state = [], action) {
	switch (action.type) {
		case 'ADD_ATTENDEE':
			// Return a new array with old state and added attendee.
			return [{
					name: action.name,
					color: action.color
				},
				...state
			];
		case 'REMOVE_ATTENDEE':
			return [
				// Grab state from begging to index of one to delete
				...state.slice(0, action.index),
				// Grab state from the one after one we want to delete
				...state.slice(action.index + 1)
			];
		case 'RECEIVE_LIST':
			return [
				...state,
				...action.list
			]

		default:
			return state;
	}
}
