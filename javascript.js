
var clockInit1 = null;
var clockInterval = null
function startClockNow() {
    clockInterval = setInterval(function () {
        $('#currentDay').html(moment().format('MMMM Do YYYY, H:mm:ss a'));
    }, 1000);
}
$(startClockNow).text('#currentDay');

$("#entry1").val(localStorage.getItem("entry1"))
$("#entry2").val(localStorage.getItem("entry2"))
$("#entry3").val(localStorage.getItem("entry3"))
$("#entry4").val(localStorage.getItem("entry4"))
$("#entry5").val(localStorage.getItem("entry5"))
$("#entry6").val(localStorage.getItem("entry6"))
$("#entry7").val(localStorage.getItem("entry7"))
$("#entry8").val(localStorage.getItem("entry8"))
$("#entry9").val(localStorage.getItem("entry9"))
$("#entry10").val(localStorage.getItem("entry10"))
$("#entry11").val(localStorage.getItem("entry11"))
$("#entry12").val(localStorage.getItem("entry12"))
$("#entry13").val(localStorage.getItem("entry13"))

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
function checkUpdateColors() {
    var d = moment();
    var hourCompare = moment().format("HH");

    if ((hourCompare == 8)) {
        $("#row1").addClass("present");
    }
    else if ((hourCompare >= 8)) {
        $("#row1").addClass("past");
    }
    else {
        $("#row1").addClass("future");
    }
    if ((hourCompare == 9)) {
        $("#row2").addClass("present");
    }
    else if ((hourCompare >= 9)) {
        $("#row2").addClass("past");
    }
    else {
        $("#row2").addClass("future");
    }
    if ((hourCompare == 10)) {
        $("#row3").addClass("present");
    }
    else if ((hourCompare >= 10)) {
        $("#row3").addClass("past");
    }
    else {
        $("#row3").addClass("future");
    }
    if ((hourCompare == 11)) {
        $("#row4").addClass("present");
    }
    else if ((hourCompare >= 11)) {
        $("#row4").addClass("past");
    }
    else {
        $("#row4").addClass("future");
    }
    if ((hourCompare == 12)) {
        $("#row5").addClass("present");
    }
    else if ((hourCompare >= 12)) {
        $("#row5").addClass("past");
    }
    else {
        $("#row5").addClass("future");
    }
    if ((hourCompare == 13)) {
        $("#row6").addClass("present");
    }
    else if ((hourCompare >= 13)) {
        $("#row6").addClass("past");
    }
    else {
        $("#row6").addClass("future");
    }
    if ((hourCompare == 14)) {
        $("#row7").addClass("present");
    }
    else if ((hourCompare >= 14)) {
        $("#row7").addClass("past");
    }
    else {
        $("#row7").addClass("future");
    }
    if ((hourCompare == 15)) {
        $("#row8").addClass("present");
    }
    else if ((hourCompare >= 15)) {
        $("#row8").addClass("past");
    }
    else {
        $("#row8").addClass("future");
    }
    if ((hourCompare == 16)) {
        $("#row9").addClass("present");
    }
    else if ((hourCompare >= 16)) {
        $("#row9").addClass("past");
    }
    else {
        $("#row9").addClass("future");
    }
    if ((hourCompare == 17)) {
        $("#row10").addClass("present");
    }
    else if ((hourCompare >= 17)) {
        $("#row10").addClass("past");
    }
    else {
        $("#row10").addClass("future");
    }
    if ((hourCompare == 18)) {
        $("#row11").addClass("present");
    }
    else if ((hourCompare >= 18)) {
        $("#row11").addClass("past");
    }
    else {
        $("#row11").addClass("future");
    }
    if ((hourCompare == 19)) {
        $("#row12").addClass("present");
    }
    else if ((hourCompare >= 19)) {
        $("#row12").addClass("past");
    }
    else {
        $("#row12").addClass("future");
    }
    if ((hourCompare == 20)) {
        $("#row13").addClass("present");
    }
    else if ((hourCompare >= 20)) {
        $("#row13").addClass("past");
    }
    else {
        $("#row13").addClass("future");
    }
}

checkUpdateColors();


// WHEN I click into a timeblock
// THEN I can enter an event

// input box for event box

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


// event listner(.on) save to local storage

// WHEN I refresh the page
// THEN the saved events persist