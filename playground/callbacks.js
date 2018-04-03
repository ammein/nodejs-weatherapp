var getUser = (id , callback) => {
    // We need an id than a callback function
    var user = {
        id : id,
        name : 'Vikrane'
    }
    setTimeout(() => {
        callback(user); 
        // we can name anything you want for the function name
    }, 3000);
};

// can do another function inside the 'call function' , that is what it MEANTS for callback
getUser(31 , (user) => {
    // get user object , and pass over any to function

    console.log(user);
});

// NOTE : the API may have to wait for HTTP endpoint to fetch the data.