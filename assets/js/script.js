// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Declaring the Variables
var saveBtn = $('.saveBtn');
var hourText = $('.hour');
var description = $('.description');
var pastText = $('#pastText');
var eventTime = {
  hour: 0,
  descriptionEvent: ''
};
var eventArr = [
  {
    hour: 9,
    description: ''
  },
  {
    hour: 10,
    description: ''
  },
  {
    hour: 11,
    description: ''
  },
  {
    hour: 12,
    description: ''
  },
  {
    hour: 13,
    description: ''
  },
  {
    hour: 14,
    description: ''
  },
  {
    hour: 15,
    description: ''
  },
  {
    hour: 16,
    description: ''
  },
  {
    hour: 17,
    description: ''
  }
];
var today = dayjs();
var container = $('#container');

//Past
var pastTimeBlockDiv = $('<div>');
var pastTimeHour = $('<div>');
var pastTimeText = $('<textarea>');
var pastTimeBtn = $('<button>');
var pastTimei = $('<i>');

//Present
var presentTimeBlockDiv = $('<div>');
var presentTimeHour = $('<div>');
var presentTimeText = $('<textarea>');
var presentTimeBtn = $('<button>');
var presentTimei = $('<i>');

//Future
var futureTimeBlockDiv = $('<div>');
var futureTimeHour = $('<div>');
var futureTimeText = $('<textarea>');
var futureTimeBtn = $('<button>');
var futureTimei = $('<i>');

// Setting the Element tags for Past Time Block
pastTimeBlockDiv.attr('id', 'hour-9');
pastTimeBlockDiv.addClass('row time-block past');
pastTimeHour.addClass('col-2 col-md-1 hour text-center py-3');
pastTimeText.addClass('ol-8 col-md-10 description');
pastTimeText.attr('rows', '3');
pastTimeText.attr('id', 'pastText');
pastTimeBtn.addClass('btn saveBtn col-2 col-md-1');
pastTimeBtn.attr('aria-label', 'save');
pastTimei.addClass('fas fa-save');
pastTimei.attr('aria-hidden', 'true');

// Setting the Element tags for Present Time Block
presentTimeBlockDiv.attr('id', 'hour-10');
presentTimeBlockDiv.addClass('row time-block present');
presentTimeHour.addClass('col-2 col-md-1 hour text-center py-3');
presentTimeText.addClass('ol-8 col-md-10 description');
presentTimeText.attr('rows', '3');
presentTimeText.attr('id', 'presentText');
presentTimeBtn.addClass('btn saveBtn col-2 col-md-1');
presentTimeBtn.attr('aria-label', 'save');
presentTimei.addClass('fas fa-save');
presentTimei.attr('aria-hidden', 'true');

// Setting the Element tags for Future Time Block
futureTimeBlockDiv.attr('id', 'hour-11');
futureTimeBlockDiv.addClass('row time-block future');
futureTimeHour.addClass('col-2 col-md-1 hour text-center py-3');
futureTimeText.addClass('ol-8 col-md-10 description');
futureTimeText.attr('rows', '3');
futureTimeText.attr('id', 'futureText');
futureTimeBtn.addClass('btn saveBtn col-2 col-md-1');
futureTimeBtn.attr('aria-label', 'save');
futureTimei.addClass('fas fa-save');
futureTimei.attr('aria-hidden', 'true');

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  saveBtn.on("click", saveText);

  function saveText(event) {
    event.preventDefault();
    eventTime.descriptionEvent = pastText.val();

    localStorage.setItem("description", eventTime.descriptionEvent);
    alert(pastText.val());
    console.log(localStorage.getItem("description") + " working");
  }
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  var currentHour = today.hour();
  console.log(currentHour)
  var currentHour = 12;
  console.log(currentHour);

  for (var i = 0; i < eventArr.length; i++) {
    if (currentHour > eventArr[i].hour) {
      console.log("Past Hours: " + eventArr[i].hour);
      addPastTimeBlock();
    }
    else if (currentHour < eventArr[i].hour) {
      console.log("Future Hours: " + eventArr[i].hour);
      addFutureTimeBlock();
    }
    else {
      console.log("Current Hour: " + eventArr[i].hour);
      addPresentTimeBlock();
    }
  }

  function addPastTimeBlock() {
    // container.append(pastTimeBlockDiv);
    container.append(`<div id=past-card-${i} class=\"row time-block past\">`);
    // pastTimeBlockDiv.append(pastTimeHour);
    $(`#past-card-${i}`).append(`<div id=past-text-${i} class=\'col-2 col-md-1 hour text-center py-3\'>`);
    // pastTimeHour.text(eventArr[i].hour)
    $(`#past-text-${i}`).text(eventArr[i].hour);
    // pastTimeBlockDiv.append(pastTimeText);
    // need to use dayjs() to display right hour with AM/PM
    $(`#past-card-${i}`).append(`<textarea class=\'col-8 col-md-10 description\' rows=3 id=pastText${i}>`);
    // pastTimeBlockDiv.append(pastTimeBtn);
    $(`#past-card-${i}`).append(`<button class=\'btn saveBtn col-2 col-md-1\' id=pastBtn${i} aria-label=save>`);
    // pastTimeBtn.append(pastTimei);
    $(`#pastBtn${i}`).append('<i class=\'fas fa-save\' aria-hidden=\'true\'>');
  }

  function addPresentTimeBlock() {
    // container.append(presentTimeBlockDiv);
    container.append(`<div id=present-card-${i} class=\"row time-block present\">`);
    // presentTimeBlockDiv.append(presentTimeHour);
    $(`#present-card-${i}`).append(`<div id=present-text-${i} class=\'col-2 col-md-1 hour text-center py-3\'>`);
    // presentTimeHour.text(eventArr[i].hour);
    $(`#present-text-${i}`).text(eventArr[i].hour, today.format('H A'));
    // presentTimeBlockDiv.append(presentTimeText);
    $(`#present-card-${i}`).append(`<textarea class=\'col-8 col-md-10 description\' rows=3 id=presentText${i}>`);
    // presentTimeBlockDiv.append(presentTimeBtn);
    $(`#present-card-${i}`).append(`<button class=\'btn saveBtn col-2 col-md-1\' id=presentBtn${i} aria-label=save>`);
    // presentTimeBtn.append(presentTimei);
    $(`#presentBtn${i}`).append('<i class=\'fas fa-save\' aria-hidden=\'true\'>');
  }

  function addFutureTimeBlock() {
    // container.append(futureTimeBlockDiv);
    container.append(`<div id=future-card-${i} class=\"row time-block future\">`);
    // futureTimeHour.text(eventArr[i].hour);
    $(`#future-card-${i}`).append(`<div id=future-text-${i} class=\'col-2 col-md-1 hour text-center py-3\'>`);
    // futureTimeBlockDiv.append(futureTimeHour);
    $(`#future-text-${i}`).text(eventArr[i].hour);
    // futureTimeBlockDiv.append(futureTimeText);
    $(`#future-card-${i}`).append(`<textarea class=\'col-8 col-md-10 description\' rows=3 id=futureText${i}>`);
    // futureTimeBlockDiv.append(futureTimeBtn);
    $(`#future-card-${i}`).append(`<button class=\'btn saveBtn col-2 col-md-1\' id=futureBtn${i} aria-label=save>`);
    // futureTimeBtn.append(futureTimei);
    $(`#futureBtn${i}`).append('<i class=\'fas fa-save\' aria-hidden=\'true\'>');
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  
  $('#currentDay').text(today.format('dddd[,] MMMM DD[th]'))
  //Monday, December 13th
});
