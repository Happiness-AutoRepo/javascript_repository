

//synchronous

//function first(){
//    console.log("first one");
//}
//
//function second(){
//    console.log("second one");
//}
//
//function third(){
//    console.log("third one");
//}
//
//first();
//second();
//third();

//asynchronous
//function first(){
//    setTimeout(function(){
//        console.log("first one");
//    },1000)
//}
//
//function second(){
//    console.log("second one");
//}
//
//function third(){
//    console.log("third one");
//}
//
//first();
//second();
//third();

// callbacks

//function first(callback){
//    setTimeout(function(){
//        console.log("first one");
//        callback(third);  //second(third)
//    },3000)
//}
//
//function second(callback){
//    console.log("second one");
//    callback();  //third()
//}
//
//function third(){
//    console.log("third one");
//}
//
//first(second);


//const async = function (number, callback){
//    const result = number + 2;
//    callback(result);
//}
//
//async(2,function(result){
//    console.log(result);
//    async(4,function(result){
//        console.log(result);
//        async(6,function(result){
//            console.log(result);
//        })
//    })
//});


//function prepareTea(){
//    
//    setTimeout(function(){
//        console.log("1.Find Vessel");
//        
//        setTimeout(function(){
//            console.log("2.Put water,sugar and tea");
//            
//            setTimeout(function(){
//                console.log("3.Bring the mixture to a boil");
//                
//                setTimeout(function(){
//                    console.log("4.Filter the tea");
//                    
//                    setTimeout(function(){
//                        console.log("5.Serve the tea");
//                    },2000)
//                    
//                },2000)
//                
//                
//            },2000)
//            
//            
//        },2000)
//        
//        
//    },2000)
//}
//
//prepareTea();

//////////////////////////////////////////

//let promiseToCleanTheRoom = new Promise(function(resolve,reject){
//    
//    //clean the rr=oom
//    let isClean = false;
//    if(isClean){
//        resolve("Clean");
//    }else{
//        reject("Not Clean");
//    }
//    
//})
//
//
//promiseToCleanTheRoom.then(function(fromResolve){
//    console.log("the room is " + fromResolve)
//}).catch(function(fromReject){
//    console.log("the room is " + fromReject )
//})


//Now we have dependencies

//let cleanRoom = function(){
//    return new Promise(function(resolve,reject){
//        resolve(" Cleaned the room");
//    })
//}
//
//let removeGarbage = function(msg){
//    return new Promise(function(resolve,reject){
//        resolve(msg + " Removed Garbage");
//    })
//}
//
//let winIceCream = function(msg){
//    return new Promise(function(resolve,reject){
//        resolve(msg + " Won icecream");
//    })
//}
//
//cleanRoom().then(function(result){
//    return removeGarbage(result);
//}).then(function(result){
//    return winIceCream(result);
//}).then(function(result){
//    console.log("finished" + result);
//})


//const async = () =>{
//    return new Promise((resolve,reject)=>{
//        resolve("Everything is good");
//    })
//};
//
//async()
//   .then((data)=>{
//        console.log(data);
//        return 1;
//    })
//    .then((data)=>{
//        console.log(data)
//        return 2;
//    }) 
//    . then((data)=>{
//        console.log(data);
//    })


//const async = () =>{
//    return new Promise((resolve,reject)=>{
//        reject("Everything is good");
//    })
//};
//
//async()
//   .then((data)=>{
//        console.log(data);
//        return 1;
//    })
//    .then((data)=>{
//        console.log(data)
//        return 2;
//    }) 
//    . then((data)=>{
//        console.log(data);
//    })
//    .catch((data)=>{
//        console.log(data);
//    })


//const async = (number) =>{
//    return new Promise((resolve,reject)=>{
//        if(number == 4){
//            resolve("everything is good");
//        }else{
//            reject("Everything is not good");
//        }
//       
//    })
//};
//
//async(5)
//   .then((data)=>{
//        console.log(data);
//        return 1;
//    })
//    .then((data)=>{
//        console.log(data)
//        return 2;
//    }) 
//    . then((data)=>{
//        console.log(data);
//    })
//    .catch((data)=>{
//        console.log(data);
//    })

    
//Async/Await

function doubleAfter2Seconds(x){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(x*2);
        },2000)
    })
}

//doubleAfter2Seconds(10).then((r)=>{
//    console.log(r);
//})

//let sum = doubleAfter2Seconds(10) + doubleAfter2Seconds(20) + doubleAfter2Seconds(30);
//console.log(sum);




//function doubleAfter2Seconds(x){
//    return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//            resolve(x*2);
//        },2000)
//    })
//}
//
////promise chain
//function addPromise(x){
//    return new Promise(resolve=>{
//        doubleAfter2Seconds(10).then((a)=>{
//            doubleAfter2Seconds(20).then((b)=>{
//                doubleAfter2Seconds(30).then((c)=>{
//                    resolve(x+a+b+c);
//                })
//            })
//        })
//    })
//}
//
//
//addPromise(10).then((sum)=>{
//    console.log(sum);
//})



function doubleAfter2Seconds(x){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(x*2);
        },2000)
    })
}


async function addAsync(x){
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x+a+b+c;
}

addAsync(10).then((sum)=>{
    console.log(sum);
})


























