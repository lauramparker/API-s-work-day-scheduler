//VARIABLES

var currentDay = $("#currentDay");

var timeBlocks = $("#timeblocks");

var main = $("#maincontainer");

var hourly = $("#hourly");

var timeofday = [9,10,11,12,13,14,15,16,17];





//FUNCTIONS


//PART 1 - Create the elements & append


//update today's date and append to header

var todaysDate = moment().format('dddd, MMMM Do[,] YYYY'); //NEED Day of Week
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
    var hourcode = timeofday[i];
    hour.append(hourcode);
    hour.attr("id", hourcode);
    console.log(hourcode); //hourcode is confirmed 9-17
};
    
//function to iterate through the input fields and change colors

$(".hourblock").each(function(hourcode) { 
    var presentHour = moment().hour();
    var adjustHour = hourcode + 9  //this is a work around as hourcode not passing the value I want
          if (presentHour > adjustHour)  {     //time is past
            this.style.backgroundColor = "lightgrey"; //is this referring to .hourblock??

        } else if (presentHour == adjustHour) {    //time is present
            this.style.backgroundColor = "red";

        }  else  {   //time is future
            this.style.backgroundColor = "lightgreen";
        };
    
});


//PART III - Save

//assigns text value to each key for input/hour/hourblock & stores in Object



$(".savebtn").on("click", function (hour, hourcode){    

    for (var i = 0; i < 10; i++) {

    var note = (".input").value.trim();

    var entryText = JSON.parse(window.localStorage.getItem("entryText")) || [];

    var userEntry = {
        hour: hourcode,
        note: note
      };
  
    entryText.push(userEntry);
    window.localStorage.setItem("entryText", JSON.stringify(entryText));

    }

});
