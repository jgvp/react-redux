import Colors from '../../data/colors';
import _find from 'lodash/find';
import _cloneDeep from 'lodash/cloneDeep';
import _orderBy from 'lodash/orderBy';
import _isUndefined from 'lodash/isUndefined';

export default function orderByColor(attendees) {
    return orderByWeight(attendees, Colors);
}

function orderByWeight(attendees, colorsWeights) {

    //In this case we do need 'var' because we need to take advantage of 
    //hmmm... I don't remember the name right now.
    var attendeesWithColorWeightProperty = [];

    attendees.forEach((attendeeFromAttendeesArray)=> {

        var attendee = _cloneDeep(attendeeFromAttendeesArray);

        //We grab the color object which cointains the weight of the color.
        let badgeColor = _find(colorsWeights, color => {
            return attendee.color === color.name
        });        

        //When the color doesn't exist the _find returns null.
        //Check if the color the the badge was found in the colors we have hardcoded.
        if (!_isUndefined(badgeColor)) {
            //We add a new property to the attendee object to order the badges for that property.
            attendee.colorsWeight = badgeColor.weight;            
        }

        attendeesWithColorWeightProperty.push(attendee);
    });

    //Order the attendes by the weight of its color badge, the havier ones go first.
    return _orderBy(attendeesWithColorWeightProperty, 'colorsWeight', 'desc',);
  };
