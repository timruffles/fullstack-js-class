"use strict";

main();

function main() {
  clicker({
    button: $(".counter"),
    count: $(".count"),
  });
}

//
// EXERCISE START
//

function clicker(setup) {

  // TODO handle clicks on the button, with handleClick

  getCount()
    .then(updateCount, handleError);

  function updateCount(counter) {
    setup.count.html(counter.count); 
  }

  function handleClick() {
    increment()
     .then(updateCount, handleError); 
  }

  function handleError(e) {
    console.error(e);
  }
}

function getCount() {
  return $.getJSON("/api/counter"); 
}

function increment() {
  // TODO implement POSTing to the endpoint you wrote to
  // increment the counter
  //
  // look at getCount(), and you'll get the idea. Different method tho!
}
