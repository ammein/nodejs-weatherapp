var asyncAdd = (a,b) => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            }else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
}
// we can use then after passing arguments, its fine
asyncAdd(5,7).then((result)=>{
    console.log("Results : " , result);
    return asyncAdd(result , 33);
} , (errorMessage)=>{
    console.log(errorMessage);
}).then((result)=> {
    console.log("Should be 45 : " , result);
},(errorMessage)=>{
    console.log(errorMessage);
});

// // It takes one arguments
// var somePromise = new Promise((resolve , reject)=>{
//     // in callback arguments , there's two possibility , a resolve and reject for sure
//     // If we run both together , we'll never see the rejects one. WE CAN"T DO BOTH
//     setTimeout(() => {
//         resolve('Hey , it worked !');
//         reject('Unable to fullfill promise');
//     }, 2500);
// });

// somePromise.then((message) => {
//     // resolve argument printing
//     console.log('Success : ' , message);
// }, (errorMessage) => {
//     // reject argument printing
//     console.log("Error" , errorMessage);
// })