// Exercise #1: Using template literals instead of concatenation, write a function that takes 
//      firstName and lastName and returns ‘fistName lastName’
function makeFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(`Calling function makeFullName("John", "Smith") returns ${makeFullName("John", "Smith")}`);

// Exercise #2: Write the same function as above as an arrow function with a different name.
let makeFullNameAlt = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(`Calling function makeFullNameAlt("John", "Smith") returns ${makeFullNameAlt("John", "Smith")}`);

// Exercise #3
// a.	Using setTimeout, write an inline, anonymous (has no named assigned to it) arrow 
//      function in the callback parameter position. The function should alert ‘Time is up!’. 
//      Choose whatever length of time you want for the timeout.
console.log("Setting one second timeout that displays alert 'Time is up!'"); 
setTimeout(() => alert("Time is up!"), 1000);

// b.	Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using 
//      setInterval, pass askAreWeThereYet into the callback parameter position. Choose whatever 
//      length of time you want for the interval.
let askAreWeThereYet = () => alert("Are we there yet?");
console.log(`Setting one second interval that calls function ${askAreWeThereYet}`);
// setInterval(askAreWeThereYet, 1000);

// Exercise #4: In this step you are going to write a function that takes a callback to better understand 
//      how callbacks work.
// a.	Write a function named processSplicedValue that takes 3 parameters – an array, the index of 
//      the element to be spliced from the array, and a callback that will process the sliced element.
// b.	Inside the function, use the first two parameters to splice an element from the array.
// c.	Call the callback function and pass the spliced value into it.
function processSplicedValue(array, index, cb) {
    console.log(`Calling function processSplicedValue with array ${array} and index ${index} and callback ${cb}`);
    cb(array.splice(index, 1));
}

// d.	Outside of your function, create an array of strings, call processSplicedValue, and pass 
//      the array, an index number, and console.log into it.
let arrNames = ["John", "Sally", "Marie", "Thomas"];
processSplicedValue(arrNames, 0, console.log);

// e.	Call the processSplicedValue function again but this time pass in the alert method instead of 
//      console.log.
processSplicedValue(arrNames, 0, alert);

// f.	Call the processSplicedValue function again, but this time pass in an anonymous arrow function 
//      that alerts the spliced value.
processSplicedValue(arrNames, 0, (val) => alert(val));

// g.	Call the processSplicedValue function one more time, but this time, pass in a custom function 
//      of your choice that you should create and name.
function customFunc(val) {
    alert(`${val} ${val} ${val}`);
}
processSplicedValue(arrNames, 0, customFunc);