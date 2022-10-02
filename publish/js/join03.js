const passwordInput01 = document.getElementById("passwordInput01")
const passwordInput02 = document.getElementById("passwordInput02")
const passwordInput01State = document.getElementById("passwordInput01State")
console.log(passwordInput01State)
var regExp = /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{10,}$/;
function passwordCheck01(e){
    var val = e.target.value
    console.log(val)
    if( val.match(regExp) == !null){
        //error
        console.log("error")
        passwordInput01State.classList.add("show")
    } else {
        passwordInput01State.classList.remove("show")
        console.log("good")
        // good
    }
}


passwordInput01.addEventListener("input", passwordCheck01)