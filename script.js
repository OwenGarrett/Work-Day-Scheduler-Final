// display current time and date 

const currentDay = dayjs().format('dddd, MMMM D');
/* const currentDayTextEl = document.getElementById('currentDay');

currentDayTextEl.innerText = currentDay; */
// $("#currentDay").text(currentDay);


 
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

 // $(function () {

$("#currentDay").text(currentDay);

// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

document.addEventListener("click", saveText)
console.log(this.saveText); 
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  if (time === past){
    display = grey; 
  } else if (time === future) {
    display = green;
  } else{
    display = red;
  }
   
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
   
   
   $("#hour-09 .description").val(localStorage.getItem("hour-09"));
   $("#hour-10 .description").val(localStorage.getItem("hour-10"));
   $("#hour-11 .description").val(localStorage.getItem("hour-11"));
   $("#hour-12 .description").val(localStorage.getItem("hour-12"));
   $("#hour-01 .description").val(localStorage.getItem("hour-01"));
   $("#hour-02 .description").val(localStorage.getItem("hour-02"));
   $("#hour-03 .description").val(localStorage.getItem("hour-03"));
   $("#hour-04 .description").val(localStorage.getItem("hour-04"));
   $("#hour-05 .description").val(localStorage.getItem("hour-05"));
   



