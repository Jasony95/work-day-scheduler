
// Declaring the Variables
var saveBtn = $('#Btn1');
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
var timeHour = 0;

$(function () {

  function setTime(numHour) {
    if (numHour > 12) {
      numHour = numHour - 12;
      numHour = numHour.toString();
      numHour = numHour + " PM";
      return numHour;
    }
    else if (numHour < 12) {
      numHour = numHour.toString();
      numHour = numHour + " AM";
      return numHour;
    }
    else {
      numHour = numHour.toString();
      numHour = numHour + " PM";
      return numHour;
    }
  }

  var currentHour = today.hour();

  for (var i = 0; i < eventArr.length; i++) {
    if (currentHour > eventArr[i].hour) {
      addPastTimeBlock();
    }
    else if (currentHour < eventArr[i].hour) {
      addFutureTimeBlock();
    }
    else {
      addPresentTimeBlock();
    }
  }

  function addPastTimeBlock() {
    container.append(`<div id=card${i} class=\"row time-block past\">`);
    $(`#card${i}`).append(`<div id=hour${i} class=\'col-2 col-md-1 hour text-center py-3\'>`);
    $(`#hour${i}`).text(setTime(eventArr[i].hour));
    $(`#card${i}`).append(`<textarea class=\'col-8 col-md-10 description\' rows=3 id=textarea${i}>`);
    $(`#card${i}`).append(`<button class=\'btn saveBtn col-2 col-md-1\' id=Btn${i} aria-label=save>`);
    $(`#Btn${i}`).append('<i class=\'fas fa-save\' aria-hidden=\'true\'>');
  }

  function addPresentTimeBlock() {
    container.append(`<div id=card${i} class=\"row time-block present\">`);
    $(`#card${i}`).append(`<div id=hour${i} class=\'col-2 col-md-1 hour text-center py-3\'>`);
    $(`#hour${i}`).text(setTime(eventArr[i].hour));
    $(`#card${i}`).append(`<textarea class=\'col-8 col-md-10 description\' rows=3 id=textarea${i}>`);
    $(`#card${i}`).append(`<button class=\'btn saveBtn col-2 col-md-1\' id=Btn${i} aria-label=save>`);
    $(`#Btn${i}`).append('<i class=\'fas fa-save\' aria-hidden=\'true\'>');
  }

  function addFutureTimeBlock() {
    container.append(`<div id=card${i} class=\"row time-block future\">`);
    $(`#card${i}`).append(`<div id=hour${i} class=\'col-2 col-md-1 hour text-center py-3\'>`);
    $(`#hour${i}`).text(setTime(eventArr[i].hour));
    $(`#card${i}`).append(`<textarea class=\'col-8 col-md-10 description\' rows=3 id=textarea${i}>`);
    $(`#card${i}`).append(`<button class=\'btn saveBtn col-2 col-md-1\' id=Btn${i} aria-label=save>`);
    $(`#Btn${i}`).append('<i class=\'fas fa-save\' aria-hidden=\'true\'>');
  }

  
  $('#currentDay').text(today.format('dddd[,] MMMM DD[th]'))
  //Monday, December 13th

  $('#Btn0').on("click", saveText0);

  function saveText0(event) {
    event.preventDefault();
    console.log("Click success.");
    eventArr[0].description = $('#textarea0').val();
    console.log(eventArr[0].description);
    localStorage.setItem("event0", eventArr[0].description);
  }

  $('#Btn1').on("click", saveText1);

  function saveText1(event) {
    event.preventDefault();
    console.log("Click success.");
    eventArr[1].description = $('#textarea1').val();
    console.log(eventArr[1].description);
    localStorage.setItem("event1", eventArr[1].description);
  }

  $('#Btn2').on("click", saveText2);

  function saveText2(event) {
    event.preventDefault();
    console.log("Click success.");
    eventArr[2].description = $('#textarea2').val();
    console.log(eventArr[2].description);
    localStorage.setItem("event2", eventArr[2].description);
  }

  $('#Btn3').on("click", saveText3);

  function saveText3(event) {
    event.preventDefault();
    console.log("Click success.");
    eventArr[3].description = $('#textarea3').val();
    console.log(eventArr[3].description);
    localStorage.setItem("event3", eventArr[3].description);
  }

  $('#Btn4').on("click", saveText4);

  function saveText4(event) {
    event.preventDefault();
    console.log("Click success.");
    eventArr[4].description = $('#textarea4').val();
    console.log(eventArr[4].description);
    localStorage.setItem("event4", eventArr[4].description);
  }

  $('#Btn5').on("click", saveText5);

  function saveText5(event) {
    event.preventDefault();
    console.log("Click success.");
    eventArr[5].description = $('#textarea5').val();
    console.log(eventArr[5].description);
    localStorage.setItem("event5", eventArr[5].description);
  }

  $('#Btn6').on("click", saveText6);

  function saveText6(event) {
    event.preventDefault();
    console.log("Click success.");
    eventArr[6].description = $('#textarea6').val();
    console.log(eventArr[6].description);
    localStorage.setItem("event6", eventArr[6].description);
  }

  $('#Btn7').on("click", saveText7);

  function saveText7(event) {
    event.preventDefault();
    console.log("Click success.");
    eventArr[7].description = $('#textarea7').val();
    console.log(eventArr[7].description);
    localStorage.setItem("event7", eventArr[7].description);
  }

  $('#Btn8').on("click", saveText8);

  function saveText8(event) {
    event.preventDefault();
    console.log("Click success.");
    eventArr[8].description = $('#textarea8').val();
    console.log(eventArr[8].description);
    localStorage.setItem("event8", eventArr[8].description);
  }

  for (var k = 0; k < eventArr.length; k++) {
    $(`#textarea${k}`).text(localStorage.getItem(`event${k}`));
  }

});
