//VARIABLES

var currentDay = $("#currentDay");

var timeBlocks = $("#timeblocks");

var main = $("#maincontainer");



// var myvar = $("#element") //setting a variable name to an existing element with an ID

// var newdiv = $("<div>") // creating an Element;
// newdiv.text("New element text") //giving the new element text (this is different from .html which creates a new HTML element with text STRING)

// $("#current-div").html("<h1>StartButton</h1>"); //creating new html element inside an existing wrapper id (div or similar)

// $("#current-div").append(newdiv) // appending the variable name of the element to the wrapper

// newdiv.attr("class", "fancy"); //grabs the fancy class from CSS to style the newDiv element in the fancy style

// $.each(arrayname, function(index, property){}  //for each item in array or object, do THIS function.. see Tues 1:35 stringing functions together!!! fluent styles



//FUNCTIONS

//EVENTS

function create () {

var hour = $("<div>");
hour.text("this is the time");
hour.attr("class", "row").attr("class", "hourly");
$("#maincontainer").append(hour);
};

create();

// $("#maincontainer").html("<div></div>"); //creating new html element inside an existing wrapper id (div or similar)

// <div class="row">
// <div class="col-md-6 col-xs-10" class="hourly"> 
//   <p>testing</p>
// </div>
// <div class="col-xs-2" class="entry">
//   <p>testing</p>

//  // appending the variable name of the element to the wrapper


// // THEN I am presented with time blocks for standard business hours
//     // time blocks in index.html (using bootstrap grid & for each.








// // GIVEN I am using a daily planner to create a schedule

// // WHEN I open the planner

// // THEN the current day is displayed at the top of the calendar
//     //index.html display date 
//     //dynamic html (with jquery to change text, line 6)

// // WHEN I scroll down






// // WHEN I view the time blocks for that day
// // THEN each time block is color-coded to indicate whether it is in the past, present, or future
//     //dynamic html (jquery that styles, line 12) based on past, present, future



// // WHEN I click into a time block
//     //event handler to generate 
// // THEN I can enter an event
//     //??? bootstrap form ??? ...

//     // WHEN I click the save button for that time block
//         //event handler
//     // THEN the text for that event is saved in local storage



//     // WHEN I refresh the page
// // THEN the saved events persist
