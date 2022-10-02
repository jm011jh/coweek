const emailRecieveCheck = document.getElementById("emailRecieveCheck")

emailRecieveCheck.addEventListener('click',function(){
    !emailRecieveCheck.classList.contains("on")
    ? emailRecieveCheck.classList.add("on")
    : emailRecieveCheck.classList.remove("on")
})