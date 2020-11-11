//VARIABLES

var currentDay = $("#currentDay");

var timeBlocks = $("#timeblocks");

var main = $("#maincontainer");

var hourly = $("#hourly");

var timeofday = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];




// var myvar = $("#element") //setting a variable name to an existing element with an ID

// var newdiv = $("<div>") // creating an Element;
// newdiv.text("New element text") //giving the new element text (this is different from .html which creates a new HTML element with text STRING)

// $("#current-div").html("<h1>StartButton</h1>"); //creating new html element inside an existing wrapper id (div or similar)

// $("#current-div").append(newdiv) // appending the variable name of the element to the wrapper

// newdiv.attr("class", "fancy"); //grabs the fancy class from CSS to style the newDiv element in the fancy style

// $.each(arrayname, function(index, property){}  //for each item in array or object, do THIS function.. see Tues 1:35 stringing functions together!!! fluent styles



//FUNCTIONS

//build hourly calendar

//$.each(timeofday, function(){}



//EVENTS

//update today's date and append to header

var todaysDate = moment().format('MMMM Do[,] YYYY'); //NEED Day of Week
    $("#currentDay").append(todaysDate);


//append entry field (input) to each hour in class row

let hour = $("<input>");
    hour.addClass("col-md-7 border border-dark");
    $(".row").append(hour);
    

//FOCUS HEEEEEEEEEEEERERERE:   Need a function that assigns hours to each line
//and then compares those indices to the function below that changes colors    
hour.attr("index","9");

hour.attr("time","moment().hour()"); //???Assigning the current hour to each var hour

   

//function to iterate through the input fields and change colors
$("input").each(function( i ) {
    if  { //time is past
    this.style.backgroundColor = "lightgrey";
    } else {//time is present
    this.style.backgroundColor = "red";
    }//time is future
    this.style.backgroundColor = "lightgreen";
});

//change color of hour based on past, present, future time

var currentHour = moment().hour();
//     if (currentHour < 9) {
//         this.style.color = "blue";
//     }


// //for.each for timeblocks?

// $(document.body).click(function() {  //hover? scroll?
//     $("input").each(function( i ) {
//       if ( this.style.color !== "blue" ) {
//         this.style.color = "blue";
//       } else {
//         this.style.color = "";
//       }
//     });
//   });




//var timePassed =moment().startOf('day').fromNow();
    






//append a save button to each hour field

let save = $("<button>");
    save.addClass("col-md-1 border border-dark rounded-right");
    save.attr("style","background-color:lightblue")
    $(".row").append(save);

//add image src to the save button
    


//save the information that the user enters into hour (click event)
// $(".savebtn").on("click", function (){
     
// // };


//Store as object, set index values





// $("#maincontainer").html("<div></div>"); //creating new html element inside an existing wrapper id (div or similar)

// //* <div class="row" class="hourly"> THIS IS WHAT NEEDS TO APPEND TO THE INDIVIDUAL HOUR ID's!
//             <div class="col-md-6 col-xs-10" class="entry"> <!--parent column... 2 CLASSES???????-->
//               <p>testing</p>
//             </div>
//             <div class="col-xs-2" class="save"> <!--parent column-->
//               <p>testing</p>

//             </div>
//           </div>  *//

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
