var past = $("#past");
var present = $("#present");
var future = $("#future");
var timeDisplay = $("#currentDay");
var saveBtn = $(".save-Btn");
var textData = $("#textInfo");
var texMes = [];
// time block 
var nineAm = $("hour-09");
var tenAm = $("hour-10");
var elevenAm = $("hour-11");
var twelvePm = $("hour-12");
var onePm = $("hour-13");
var twoPm = $("hour-14");
var threePm = $("hour-15");
var fourPm = $("hour-16");
var fivePm = $("hour-17");
// display current time and date
const currentDay = dayjs().format("dddd, MMMM D, hh:mm:ss a");

$(function () {

$("#currentDay").text(currentDay);

});

// Set Item
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("demo").innerHTML = localStorage.getItem("lastname");