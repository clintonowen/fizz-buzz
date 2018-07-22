'use strict';
/* global $ */

function handleFormSubmit() {
  // listen for form submission
  $('#number-chooser').submit(function(event) {
    event.preventDefault();
    
    // store submitted number as variable `n`
    const n = $('#number-choice').val();

    // create empty html
    let fizzBuzzDivs = item(0);

    // loop `n` number of times, create a div based on current count
    // (w/ conditionals), and append it to `fizzBuzzDivs`
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) {
        fizzBuzzDivs += fizzBuzz();
      } else if (i % 3 === 0) {
        fizzBuzzDivs += fizz();
      } else if (i % 5 === 0) {
        fizzBuzzDivs += buzz();
      } else {
        fizzBuzzDivs += item(i);
      }
    }

    // reset form
    $('#number-choice').val('');

    // insert `fizzBuzzDivs` into DOM
    $('.js-results').html(fizzBuzzDivs);
  });
  
  
}

// function to create 'fizzbuzz' div
function fizzBuzz() {
  return `
  <div class="fizz-buzz-item fizzbuzz">
    <span>fizzbuzz</span>
  </div>`;
}

// function to create 'fizz' div
function fizz() {
  return `
  <div class="fizz-buzz-item fizz">
    <span>fizz</span>
  </div>`;
}

// function to create 'buzz' div
function buzz() {
  return `
  <div class="fizz-buzz-item buzz">
    <span>buzz</span>
  </div>`;
}

// function to create normal number div
function item(num) {
  return `
  <div class="fizz-buzz-item">
    <span>${num}</span>
  </div>`;
}

// load event listener after DOM is loaded
$(handleFormSubmit);