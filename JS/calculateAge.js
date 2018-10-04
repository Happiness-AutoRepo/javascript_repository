var currentDate = new Date();
var age = currentDate.getFullYear() - 1988;

if(currentDate.getMonth() <= 9 && currentDate.getDate() < 8 ) {
    console.log(age);
}else {
    console.log(age - 1)
}
