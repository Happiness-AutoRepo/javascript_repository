// Return "true" if all "g"s have preceding or following g's

function gHappy(str) {
    
    var isGHappy = "false";
    
    for(var i = 0; i <str.length; i++) {
        
        if(str.charAt(i)=="g") {
            if(str.charAt(i-1)=="g" || str.charAt(i+1)=="g") {
                isGHappy = "true";
            }else {
                isGHappy = "false";
            }
        }
    }
    console.log(isGHappy);
}

gHappy("xxggxx");
gHappy("xxgxx");