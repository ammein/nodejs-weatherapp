console.log('Starting App');


setTimeout(() => {
    console.log("Inside of Callback");
}, 2000); // 2secs

setTimeout(() => {
    console.log("0 miliseconds");
}, 0);

console.log("Finishing Up");