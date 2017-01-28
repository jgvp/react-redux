import uuid from 'uuid';
import Data from '../data/data';


function fetchList () {
	return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(Data);
      }, 3000);
  });
}

const receiveList = (attendeeList) => {
	return {
		type: 'RECEIVE_LIST',
		payload: attendeeList
	}
}

const requestList = (attendeeList) => {
	return {
		type: 'REQUEST_LIST'
	}
}


export const addListAttendees = () => (dispatch) =>  {
	dispatch(requestList());
  fetchList().then((data) => {
		dispatch(receiveList(data))
	})
}

export const addAttendee = (name, color) => {
	return {
		type: 'ADD_ATTENDEE',
		payload: {
            id: uuid.v4(),
            name: name,
            color: color
		}
	}
}

export const removeAttendee = (id) => {
	return {
		type: 'REMOVE_ATTENDEE',
		id
	}
}
