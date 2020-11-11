//VARIABLES

var currentDay = $("#currentDay");

var timeBlocks = $("#timeblocks");

var main = $("#maincontainer");

var hourly = $("#hourly");

var timeofday = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];



//FUNCTIONS


//PART 1 - Create the elements & append

        //TBD - build hourly calendar (to replace hard code in html. TBD)
            //$.each(timeofday, function(){}

//update today's date and append to header

var todaysDate = moment().format('MMMM Do[,] YYYY'); //NEED Day of Week
    $("#currentDay").append(todaysDate);


//append entry field (input) to each hour in class row

var hour = $("<input>");
    hour.addClass("col-md-7 border border-dark");
    hour.addClass("hourblock");  //adds class to all the input rows for color change function
    $(".row").append(hour);

    

//PART II - Assign hours and compare real time

//function that assigns hours to each element of hourblock class
$(".hourblock").each(function (i, hour) {
        var hourcode = 9 + (i++); ///HOW do I set i = 9, keep in 24 hour time to compare to moment output 
        $("hour").val(hourcode);
        $("hour").attr("index", hourcode); 
    }); 


//and then compares those indices to the function below that changes colors    
//function to iterate through the input fields and change colors

$(".hourblock").each(function(_index, hourcode) { 
    var presentHour = moment().hour();
        if (presentHour > hourcode)  {     //time is past
            this.style.backgroundColor = "lightgrey"; //is this referring to .hourblock??

        } else if (presentHour == hourcode) {    //time is present
            this.style.backgroundColor = "red";

        }  else  {   //time is future
            this.style.backgroundColor = "lightgreen";
        };
    });


//PART III - Save, Local Storage

//append a save button to each hour field

let save = $("<button>");
    save.addClass("col-md-1 border border-dark rounded-right");
    save.attr("style","background-color:lightblue")
    $(".row").append(save);

//add image src to the save button
    


//save the information that the user enters into hour (click event)
// $(".savebtn").on("click", function (){
     
//};



//     // WHEN I click the save button for that time block
//         //event handler
//     // THEN the text for that event is saved in local storage



//     // WHEN I refresh the page
// // THEN the saved events persist
