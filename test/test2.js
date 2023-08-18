// var promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         reject({message:"error"});
//     },2000);
// });

// promise
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("Data is rejected",error);
//     });



var isLogged=false;

function checkUserLoginStatus(){
    var promise = new Promise((resolve,reject) => {
    // wait for 1sec to check the logged in status
    setTimeout(() => {
        if(isLogged){
        resolve("User is Logged In");
    }
    else{
        reject("User is not logged In");
    }
    },1000);
})
return promise;
}

  //making the user logging out after 5sec
setTimeout(() => {
    isLogged=true;
},500);

//callback of promise
checkUserLoginStatus()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });