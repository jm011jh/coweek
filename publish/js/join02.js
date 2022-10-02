const join02CheckOnly = document.querySelectorAll(".join--checkOnly")
const join02checkIcon = document.querySelectorAll(".join--checkIcon")

join02checkIcon.forEach( (el, i) => {
    el.addEventListener( "click", function() {
        ! join02CheckOnly[i].classList.contains("checked")
        ? join02CheckOnly[i].classList.add("checked")
        : join02CheckOnly[i].classList.remove("checked")
    })
})

join02CheckOnly.forEach( (el) => {
    el.addEventListener("click",()=>{
        for ( a of join02CheckOnly ) { a.classList.remove("checked") }
        ! el.classList.contains("checked")
        ? el.classList.add("checked")
        : el.classList.remove("checked")
    })
})