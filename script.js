// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var cardGroup = $("#card-group");
// Below: dayjs is an object.
var currentTime = dayjs();
var currentHour = 0;
var numbHr = 0;

var toDoList = [

  {
  time: 9,
  description: "" 
},

{
  time: 10,
  description: "" 
},

{
  time: 11,
  description: "" 
},

{
  time: 12,
  description: "" 
},

{
  time: 13,
  description: "" 
},

{
  time: 14,
  description: "" 
},

{
  time: 15,
  description: "" 
},

{
  time: 16,
  description: "" 
},

{
  time: 17,
  description: "" 
},

]

$(function () {
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

  //Below: creating a variable called const pastBlock and assigning it to the past head block. (`) is a unique kind of function similar to quotation marks (used to read it as a html instead of "string"). Below jquery is being used. 

  // Below: taking the current time and changing it into a 24 hour mat.
  var currentHour = currentTime.hour();
  // currentHour = 13;

 //  Below: append one block onto the browser. 
 //  cardGroup.append(pastBlock);

 //  Below: 9 can be used as a value in the for-loop.
 for (var k = 9; k < 18; k++) {
 numbHr = k; 
 //  Below: changeTime function is being used inside the for-loop.
 // (Below: what is the purpose of the changeTime????)
 changeTime();
 if (currentHour > k ) {
 
 //  Below: changeTime was placed before the time block.
 //  changeTime();

 // Below: the k has to be in the for loop in order to make multiple blocks.
//  (Below: explain the scenario variable below????)
 const pastBlock =$(`<div id="hour-${k}" class="row time-block past">
 <div class="col-2 col-md-1 hour text-center py-3" id="hour${k}">${numbHr}</div>
 <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
 <button class="btn saveBtn col-2 col-md-1" aria-label="save">
   <i class="fas fa-save" aria-hidden="true"></i>
 </button>
 </div>`)
 cardGroup.append(pastBlock);
 }

 else if (currentHour < k) {
  const futureBlock =$(`<div id="hour-${k}" class="row time-block future">
  <div class="col-2 col-md-1 hour text-center py-3" id="hour${k}">${numbHr}</div>
  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
  </button>
  </div>`)
  cardGroup.append(futureBlock);
 }

 else {
  const presentBlock =$(`<div id="hour-${k}" class="row time-block present">
  <div class="col-2 col-md-1 hour text-center py-3" id="hour${k}">${numbHr}</div>
  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
  </button>
  </div>`)
  cardGroup.append(presentBlock);
  }
 }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

 //  Below: changeTime function is to switch from military time to normal time.
 function changeTime () {
  if (numbHr > 12) {
    numbHr = numbHr - 12
    // Below: toString convert the number into a string. Number cannot add with strings so that is why we have to do this below.
    numbHr = numbHr.toString()
    // Below: space have to be place between the " and PM in order for space to appear between PM and the hour in the browser. 
    numbHr = numbHr + " PM"
    
  }
  
  else if (numbHr < 12) {
    numbHr = numbHr.toString()
    numbHr = numbHr + " AM"
    
  }

  else {
    numbHr = numbHr.toString()
    numbHr = numbHr + " PM"
    
  }

 }
 //  Below: is the button to save the info into the local storage and the input data onto the calendar in the web browser. jquery version of event listener.
 $(".btn").on("click", saveInfo);

 // Below: is the function to save the data into the local storage. 
 // Below: what is the (event)?????
 function saveInfo(event) {
  event.preventDefault(); 
  // Below: ????????????
  localStorage.setItem($(this).siblings(".hour").text(),$(this).siblings(".description").val());
  
 }

//  Below: render save button. 
// Below: explain the whole process??????
for (var k = 9; k < 17; k++ ) {
  // var key = $(`#hour${k}`).text();
  var key = $(`#hour-${k} div:first-child`).text();
  console.log(key);
  // toDoList [j].description.text(localStorage.getItem(`.hour`));
  $(`#hour-${k}`).children(`textarea`).text(localStorage.getItem(key));
}


 var date = dayjs();
 $("#currentDay").text(date.format("dddd[,] MMMM DD[th]"))


});


