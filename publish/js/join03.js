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


const checkMale = document.getElementById("checkMale")
const checkFemale = document.getElementById("checkFemale")
const sexCheckBox = document.querySelectorAll(".join--input-sexBox-type")
const sexCheckInput = document.querySelectorAll(".join--input-sexInput")

const checkStay = document.getElementById("checkNotStay")
const checkNotStay = document.getElementById("checkNotStay")
const stayCheckBox = document.querySelectorAll(".join--input-stayBox-type")
const stayCheckInput = document.querySelectorAll(".join--input-stayInput")
sexCheckBox.forEach(function(el,i){
    el.addEventListener('click',function(){

        for ( item of sexCheckBox ) { item.classList.remove("checked") }

        !el.classList.contains("checked")
        ?el.classList.add("checked")
        :el.classList.remove("checked")
        for ( item of sexCheckInput ) { item.removeAttribute("checked") }
        sexCheckInput[i].setAttribute("checked","checked")
    })
})
stayCheckBox.forEach(function(el,i){
    el.addEventListener('click',function(){

        for ( item of stayCheckBox ) { item.classList.remove("checked") }

        !el.classList.contains("checked")
        ?el.classList.add("checked")
        :el.classList.remove("checked")

        for ( item of stayCheckInput ) { item.removeAttribute("checked") }
        stayCheckInput[i].setAttribute("checked","checked")
    })
})

const joinSelectTitle = document.querySelectorAll(".join--input-select-title")
const joinSelectOps = document.querySelectorAll(".join--input-select-optionItem")

joinSelectTitle.forEach((el) => {
    el.addEventListener('click',function(){
        let parent = el.closest(".join--input-select")
        !parent.classList.contains("open")
        ?parent.classList.add("open")
        :parent.classList.remove("open")
    })
})
joinSelectOps.forEach((el) => {
    el.addEventListener('click',function(){
        let box = el.closest(".join--input-select")
        let showTitle = box.querySelector(".join--input-select-show")
        showTitle.innerHTML = el.innerHTML
        box.classList.remove("open")
    })
})

const passwordInput01show = document.getElementById("passwordInput01show")
const passwordInput02show = document.getElementById("passwordInput02show")
passwordInput01show.addEventListener('click',function(){
    if(!passwordInput01show.classList.contains("visible")){
        passwordInput01show.classList.add("visible")
        passwordInput01.setAttribute("type","text")
    } else {
        passwordInput01show.classList.remove("visible")
        passwordInput01.setAttribute("type","password")
    }
})
passwordInput02show.addEventListener('click',function(){
    if(!passwordInput02show.classList.contains("visible")){
        passwordInput02show.classList.add("visible")
        passwordInput02.setAttribute("type","text")
    } else {
        passwordInput02show.classList.remove("visible")
        passwordInput02.setAttribute("type","password")
    }
})


