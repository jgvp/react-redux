import uuid from 'uuid';
import Data from '../data/data';
import * as firebase from 'firebase'


const configFirebaseDevelop = {
    apiKey: "********",
    authDomain: "******",
    databaseURL: "*****",
    storageBucket: "*****",
    messagingSenderId: "***"
}

firebase.initializeApp(configFirebaseDevelop);

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
		list: attendeeList
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
	const attendee = {
        id: uuid.v4(),
        name: name,
        color: color
	}
    firebase.database().ref('/attendees').push(attendee);

	return {
		type: 'ADD_ATTENDEE',
		id: uuid.v4(),
		name: name,
		color: color
	}
}

export const removeAttendee = (index) => {
	return {
		type: 'REMOVE_ATTENDEE',
		index: index
	}
}
