// UI EventsListeners

// display counter
var displayCounter = function () {
  document.getElementById('counter').innerHTML = store.counter
}

// EventListener for button clicks
var bindEvents = function () {
  document.getElementById('increase').addEventListener('click', function () {
    increaseCount()
    displayCounter()
  })
  document.getElementById('decrease').addEventListener('click', function () {
    decreaseCount()
    displayCounter()
  }) 
  document.getElementById('reset').addEventListener('click', function () {
    clearCount()
    displayCounter()
  })
}

// Functions & Objects

// Store Object
var store = {
  counter: 0  
}

// increase counter by 1
var increaseCount = function () {
  store.counter++
}

// reduce counter by 1
var decreaseCount = function () {
  store.counter--
}

// clear count
var clearCount = function () {
  store.counter = 0 
}

// Initialize Count
var init = function () {
  bindEvents()
  displayCounter()  
}

init()