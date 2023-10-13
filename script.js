// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveButton = $(".saveButton");
var nineAmTasks = $("nineAmTasks");
// Below: #card-group is an id for the div tag in html on line 31. 
var cardGroup = $("#card-group");
// Below: initializing the present hour to 0. 
var presentHour = 0; 
// Below: the current time using dayjs(). dayjs() is an API. API is use for showing and manipulating time and date.
var todayTime = dayjs();
var timeCurrent;

// Below: below is an object. The stuff inside the curly brackets are the description or characteristics of the object.
var tasks = {
  time: 0,
  taskDescription:""
};

// Below: array of objects. Essential for when there is a lot of objects is present. Use this array to connect with the local storage.
var taskArray = [
{
  // Below: the time starts at 9am. No need of comma after the object characteristic.
    time: 9,
    taskDescription: ""
},

{
  time: 10,
  taskDescription: ""
},

{
  time: 11,
  taskDescription: ""
},

{
  time: 12,
  taskDescription: ""
},

{
  time: 13,
  taskDescription: ""
},

{
  time: 14,
  taskDescription: ""
},

{
  time: 15,
  taskDescription: ""
},

{
  time: 16,
  taskDescription: ""
},

{
  time: 17,
  taskDescription: ""
}


]

$(function () {

// Below: jquery version of eventListener.
saveButton.on("click", saveInfo);

// Below: (event) is a unique variable and is needed it for line 23 to work.
function saveInfo(event){
  event.preventDefault();

// Below: going to the local storage to set up the key into "tasks" and the tasks.taskDescription into the value.
  localStorage.setItem("tasks", tasks.taskDescription());
  alert(nineAmTasks.val());
  console.log(localStorage.getItem("tasks") + "progressing");
}


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // Below: below is the for loop.
  // Below: taking the current time and changing it into a 24 hour mat. 
  var presentHour = todayTime.hour();
  
  // Below: below is a for loop. Use to iterate all the object hours and compare with the present hour to determine whether or not if its a past, present or future time block. 
  for (var k = 0; k < taskArray.length; k++) {
    if (presentHour > taskArray[k].time) {
      createPastTime();
    }
    else if (presentHour < taskArray[k].time) {
      createFutureTime();
    }
    else {
      createPresentTime();
    }
  }

  function createPastTime() {
    // Below: append (create the child element of cardGroup) the cardGroup with the div tag. The id=group is to append the children element to the div (creating another child element into the div tag). The purpose of the class is that it will modify the style of the element in the css.
    cardGroup.append(`<div id=group${k} class=\"row time-block past\">`);
    // Below: the append is to add it to the div tag of an id=timeHr.
    $(`#group${k}`).append(`<div id=timeHr${k} class=\"col-2 col-md-1 hour text-center py-3\">`);
    // Below: change the display text to the time.
    $(`#timeHr${k}`).text(taskArray[k].time);
    // Below: adding a text area element as a child element as a id=group (where the div tag is at).
    $(`#group${k}`).append(`<textarea class=\"col-8 col-md-10 description\" rows=3 id=inputData${k}>`);
    // Below: append the textarea child element to the group parent element.
    $(`#group${k}`).append(`<button class=\"btn saveBtn col-2 col-md-1\" id=submitSave${k} aria-label=save>`);
    // Below: append the textarea child element to the submitSave button.
    $(`#submitSave${k}`).append(`<i class="fas fa-save" aria-hidden="true">`);
  }

  function createPresentTime() {
    
    cardGroup.append(`<div id=group${k} class=\"row time-block present\">`);
    $(`#group${k}`).append(`<div id=timeHr${k} class=\"col-2 col-md-1 hour text-center py-3\">`);
    $(`#timeHr${k}`).text(taskArray[k].time);
    $(`#group${k}`).append(`<textarea class=\"col-8 col-md-10 description\" rows=3 id=inputData${k}>`);
    $(`#group${k}`).append(`<button class=\"btn saveBtn col-2 col-md-1\" id=submitSave${k} aria-label=save>`);
    $(`#submitSave${k}`).append(`<i class="fas fa-save" aria-hidden="true">`);

  }

  function createFutureTime() {
    
    cardGroup.append(`<div id=group${k} class=\"row time-block future\">`);
    $(`#group${k}`).append(`<div id=timeHr${k} class=\"col-2 col-md-1 hour text-center py-3\">`);
    $(`#timeHr${k}`).text(taskArray[k].time);
    $(`#group${k}`).append(`<textarea class=\"col-8 col-md-10 description\" rows=3 id=inputData${k}>`);
    $(`#group${k}`).append(`<button class=\"btn saveBtn col-2 col-md-1\" id=submitSave${k} aria-label=save>`);
    $(`#submitSave${k}`).append(`<i class="fas fa-save" aria-hidden="true">`);

  }

  // if (time[k] > 12){
  //   primetime = time[k] - 12
  // }
  // else if (time[k] < 12){
  //   primetime = time[k]
  //   prime = "AM"
  // }
  // else {
  //   primetime = time[k]
  //   prime = "PM"
  // }

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  // Below: dayjs() represent the current date. 
  var date = dayjs();
  $("#currentDay").text(date.format("dddd[,] MMMM DD[th]"))

});

// How to store multiples of something and how to store something that has different data elements. Have to combine those 2 together. The thing to look for is the array of objects to be used. How to get it store into local storage and then get it out of local storage. Don't keep the 3 blocks of code in the index.html.

var storedData = localStorage.getItem("calendar")

// for (var i = 9; i< 17; i++ ) {

//   const currentClass = "past"
//   const hourName = "9am"
//   const newBlock = $("
//   <div id="hour-${i}" class="row time-block ${currentClass}">
//    <div class="col-2 col-md-1 hour text-center py-3">${hourName}</div>
//    <textarea class="col-8 col-md-10 description" rows="3">

//     </textarea>
//     <button class="btn saveBtn col-2 col-md-1" aria-label="save">
//       <i class="fas fa-save" aria-hidden="true"></i>
//     </button>
//   </div>
// ")
// }

