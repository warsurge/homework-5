
var crClockInit1 = null;
var crClockInterval = null
function crStartClockNow() {
    crClockInterval = setInterval(function () {
        $('#currentDay').html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000);
}
$(crStartClockNow).text('#currentDay');


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
function timeBlocks() {

}

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
//  if (put in code for past){
    //  then put color here.
//  } 

// if (time is in the present)

// if (time is in the future)



// WHEN I click into a timeblock
// THEN I can enter an event

// input box for event box

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


// event listner(.on) save to local storage

// WHEN I refresh the page
// THEN the saved events persist