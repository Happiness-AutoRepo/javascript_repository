//var string = "Java Script";
//console.log(string.length);


/*
Task:
Declare 2 variables and assign your name and last name. Display in the console total numbers of characters.
*/

//var myName = "Ozzy";
//var lastName = "Can";
//console.log(myName.length + lastName.length);


/*
var x = “Java Script”;

Display each character in the console.
*/

//var x = 'Java Script';
//for(var i=0;i<x.length;i++){
//    console.log(x.charAt(i));
//}

/*
Create a function called passwordCreate(string1,string2). String1 and String2 should be able to entered by user in runtime. 
Password should be first 3 characters of String1 and concat of second strings length.
Display the password in the console.
*/

var a="";
var string1="";
var string2="";
function passwordCreate(string1,string2){
    string1=prompt("Enter str1");
    string2=prompt("Enter str2");
    
    for(var i=0;i<string1.length;i++){
        a=a.concat(string1.charAt(i));
        if(i==2){
            break;
        }
    }
    return a.concat(string2.length);
}

var password = passwordCreate();
console.log(password);
















