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

  setup.button.on("click", handleClick);

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
  return $.post("/api/counter");
}
