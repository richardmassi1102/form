function checkforblank()
{
    var a = document.forms["myForm"]["fname"].value;
    var b = document.forms["myForm"]["lname"].value;
    var c = document.forms["myForm"]["email"].value;
    var d = document.forms["myForm"]["phone"].value;
    var e = document.forms["myForm"]["phone"].value;
    if (a ==""|| b  == ""|| c == ""|| d== ""||e=="") {
      alert("Please Fill All Required Fields");
      return false;
    }

    
}
var state= false;
function toggle(){
    if(state){
        document.getElementById("password1").setAttribute("type","password");
        document.getElementById("eye1").style.color='#7a797e';

        
        state= false;
    }
    else{
        document.getElementById("password1").setAttribute("type","text");
        document.getElementById("eye1").style.color='#5887ef';
        state= true;

    }
}