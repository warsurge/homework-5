
var clockInit1 = null;
var clockInterval = null
function startClockNow() {
    clockInterval = setInterval(function () {
        $('#currentDay').html(moment().format('MMMM Do YYYY, H:mm:ss a'));
    }, 1000);
}
$(startClockNow).text('#currentDay');

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
// THEN the text for that event is saved in local storage

    
    
      
    function saveValue1(){
        var dataToSave1 = document.getElementById("entry1","entry2").value;
        localStorage.setItem("data1", dataToSave1); 
    }

    // function saveValue2(){
    //     var dataToSave2 = document.getElementById("entry2").value;
    //     localStorage.setItem("data2", dataToSave2); 
    // }
        
       
        function getSavedValue1  (){
            return localStorage.getItem("data1", "data2");
            return localStorage.getItem("data2");
        }

        // function getSavedValue2  (){
        //     return localStorage.getItem("data2");
            
        // }

        document.getElementById("entry1").value = getSavedValue1("txt_1");    
        console.log(document.getElementById("entry1"));
        document.getElementById("entry2").value = getSavedValue1("txt_2");
        console.log(document.getElementById("entry2"));
        // document.getElementById("entry3").value = getSavedValue3("txt_3");
        // document.getElementById("entry4").value = getSavedValue4("txt_4");
        // document.getElementById("entry5").value = getSavedValue5("txt_5");
        // document.getElementById("entry6").value = getSavedValue6("txt_6");
        // document.getElementById("entry7").value = getSavedValue7("txt_7");
        // document.getElementById("entry8").value = getSavedValue8("txt_8");
        // document.getElementById("entry9").value = getSavedValue9("txt_9");
        // document.getElementById("entry10").value = getSavedValue10("txt_10");
        // document.getElementById("entry11").value = getSavedValue11("txt_11");
        // document.getElementById("entry12").value = getSavedValue12("txt_12");
        // document.getElementById("entry13").value = getSavedValue13("txt_13"); 
 // var dataToSave3 = document.getElementById("entry3").value;
        // var dataToSave4 = document.getElementById("entry4").value;
        // var dataToSave5 = document.getElementById("entry5").value;
        // var dataToSave6 = document.getElementById("entry6").value;
        // var dataToSave7 = document.getElementById("entry7").value;
        // var dataToSave8 = document.getElementById("entry8").value;
        // var dataToSave9 = document.getElementById("entry9").value;
        // var dataToSave10 = document.getElementById("entry10").value;
        // var dataToSave11 = document.getElementById("entry11").value;
        // var dataToSave12 = document.getElementById("entry12").value;
        // var dataToSave13 = document.getElementById("entry13").value;
        
        
         
        // localStorage.setItem("data3", dataToSave3);
        // localStorage.setItem("data4", dataToSave4);
        // localStorage.setItem("data5", dataToSave5);
        // localStorage.setItem("data6", dataToSave6);
        // localStorage.setItem("data7", dataToSave7);
        // localStorage.setItem("data8", dataToSave8);
        // localStorage.setItem("data9", dataToSave9);
        // localStorage.setItem("data10", dataToSave10);
        // localStorage.setItem("data11", dataToSave11);
        // localStorage.setItem("data12", dataToSave12);
        // localStorage.setItem("data13", dataToSave13);
// WHEN I refresh the page
// THEN the saved events persist