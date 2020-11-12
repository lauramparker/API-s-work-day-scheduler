//VARIABLES

var currentDay = $("#currentDay");

var timeBlocks = $("#timeblocks");

var main = $("#maincontainer");

var hourly = $("#hourly");

var timeofday = [9,10,11,12,13,14,15,16,17];

var entryText = []; //set to an empty array 



//FUNCTIONS


//PART 1 - Create the elements & append


//update today's date and append to header

var todaysDate = moment().format('MMMM Do[,] YYYY'); //NEED Day of Week
    $("#currentDay").append(todaysDate);


//append entry field (input) to each hour in class row

var hour = $("<input>");
    hour.addClass("col-md-7 border border-dark");
    hour.addClass("entrynote hourblock hourblock-color"); //class for identifying the note source, hour field, and background color
    $(".row").append(hour);


//append a save button to each hour field

let save = $("<button>");
    save.addClass("col-md-1 border border-dark rounded-right");
    save.addClass("savebtn");
    save.attr("style","background-color:lightblue");
    save.text("Save");
    $(".row").append(save);

    

//PART II - Assign hours and compare real time

//function that assigns hours to each element of hourblock class

for (var i = 0; i < timeofday.length; i++) {
    var hourcode = $("<div>"); //create non-displayed div to store the hourcode
    hour.attr("data-time", timeofday[i]);
    hour.append(hourcode);
    };


//and then compares those indices to the function below that changes colors    
//function to iterate through the input fields and change colors

$(".hourblock").each(function(hourcode) { 
    var presentHour = moment().hour();
        if (presentHour > hourcode)  {     //time is past
            this.style.backgroundColor = "lightgrey"; //is this referring to .hourblock??

        } else if (presentHour == hourcode) {    //time is present
            this.style.backgroundColor = "red";

        }  else  {   //time is future
            this.style.backgroundColor = "lightgreen";
        };
    });


//PART III - Save (using an array to save instead of local storage)

//assigns text value to each key for input/hour/hourblock & stores in Object

for (var i = 0; i < 10; i++) {
    var note = $("<p>"); //create non-displayed div to store the users entry text
//$(".entrynote").each(function(hour) {   
    var note = $(this).val();
    hour.attr("data-entry", note);
    var note= entryText(i); 
    };


$(".savebtn").on("click", function (){
// turn a JQuery object into an array
    var inputElem = $("entrynote");
    var entryText = $.makeArray(inputElem);
    console.log(entryText);
    //var userEntry = localStorage.setItem("data-entry", )

});




// // //save the information that the user enters into hour (click event)
// $(".savebtn").on("click", function (){
//     // let userEntry = text.$(hour); //text value of the "hour" input
//     var userEntry = localStorage.setItem("data-entry", ); //key name
//     if (userEntry === null) {
// //     
// //     }
// // // //};



//     // WHEN I click the save button for that time block
//         //event handler
//     // THEN the text for that event is saved in local storage



//     // WHEN I refresh the page
// // THEN the saved events persist
