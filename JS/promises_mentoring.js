////1.create an array which have two object
////2.objects will have 2 properties (title and body)
////3.create function1 to see titles(1second delay)
////4.create function2 to add new object(2second delay)
//
//var DenverPost = [
//    {title:"post one", body:"body one"},
//    {title:"post two", body:"body two"},
//];
//
//function displayTitles() {
//setTimeout(x=> {
//    for(let i of DenverPost) {
//        console.log(i.title)
//    }
//}, 1000)
//}
//
//
//function createNewPost(newPost) {
//    return new Promise(function(resolve, reject) {
//        setTimeout(y=> {
//    DenverPost.push(newPost);
//            let error = false;
//            if(!error) {
//                resolve("good job");
//            } else {
//                reject("Houston! We have a problem!")
//            }
//    })
//
//    
//
//}, 2000)
//}
//
//async function name() {
//    await createNewPost({title:"post three", body:"body three"});
//    displayTitles();
//}
//
//name(); 

//let name = ["Mike", "Jason", "kennedy"];
//let age = [23, 27, 40];
//let empty = new Array(3);
//
//function getNameAge() {
//    return new Promise(function(resolve, reject) {
//        for(let i=0; i<name.length; i++) {
//        empty[i] = [name[i], age[i]];
//    }
//    console.log(empty);
//        let error = true;
//        if(!error) {
//            resolve("gj")
//        } else {
//            reject("houston")
//        }
//    })
//    
//}
//
//
//function biggerThan25() {
//    for(let i=0; i<empty.length; i++) {
//        if(empty[i][1] > 25) {
//            console.log(empty[i]);
//        }
//    }
//}
//
//
//getNameAge().then(biggerThan25);


//Composible

//let promise1 = Promise.resolve("Hi  guys");
//let promise2 = new Promise(function(resolve, reject) {
//    setTimeout(resolve, 3000, "gj")
//})
//let promise3 = new Promise(function(resolve, reject) {
//    setTimeout(resolve, 1000, "Houston")
//})
//let promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
//
//Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));

