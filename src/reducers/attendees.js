import Data from '../data/data';
import OrderAttendeesByColor from '../Attendees/common/ColorsOrganizer';


export default function attendees (state = [], action) {

	//This should be always an array.
	let attendeesOrderedByColor = [];

	switch (action.type) {
		case 'ADD_ATTENDEE':				
			const attendeesWithNewAttendee = [{ name: action.name, color: action.color }, ...state];
			const attendeesOrderedByColorPlusOldState = OrderAttendeesByColor(attendeesWithNewAttendee);
			//I don't return attendeesOrderedByColorPlusOldState() directly because we are returning an array not an action to execute something.
			return attendeesOrderedByColorPlusOldState;
		
		case 'REMOVE_ATTENDEE':
			return [
				// Grab state from begging to index of one to delete
				...state.slice(0, action.index),
				// Grab state from the one after one we want to delete
				...state.slice(action.index + 1)
			];

		case 'RECEIVE_LIST': 
			//I think it is better to create a variable instead of just returning
			//orderAttendeesByColor along with state because it clarifies what it is
			//being returned, we are returning a noun not a verb.
			attendeesOrderedByColor = OrderAttendeesByColor(action.list);

			return [
				...state,
				...attendeesOrderedByColor
			]

		default:
			return state;
	}
}
