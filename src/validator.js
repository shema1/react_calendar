import moment from "moment"


export const validator = ({startDateEvent,endDateEvent})=>{
    if (moment(endDateEvent) - moment(startDateEvent)<0) {
     
        alert('Enter corect data');
        return false
    }

    if(moment(endDateEvent).format("H")- moment(startDateEvent).format("H")>6){
        console.log(moment(endDateEvent).format("H")- moment(startDateEvent).format("H")>6 )
        alert('event can`t more 6 hours' )
        return false
    }


    if (moment(startDateEvent).format('D') < moment(endDateEvent).format('D')) {
        alert('You can  create an event only within a day');
        return false
    }
    return true
}