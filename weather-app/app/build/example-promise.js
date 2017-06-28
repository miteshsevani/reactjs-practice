function addPromise(a,b) {
    return new Promise(function(resolve,reject) {
        resolve(a + b);
        reject("not a number");
    })
}

addPromise(2,4).then(function);