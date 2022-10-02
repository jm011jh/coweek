const join01checkFinal = document.querySelector(".join--checkFinal")
const join01checkChild = document.querySelectorAll(".join--checkIcon01")
const join01agreement = document.querySelectorAll(".join--agreement")
var join01checkChildSW = [0,0,0]

document.querySelector(".join--checkIcon").addEventListener("click",function(){
    if(!join01checkFinal.classList.contains("checked")){
        join01checkFinal.classList.add("checked")
        for(el of join01agreement){
            el.classList.add("checked")
            join01checkChildSW = [1,1,1]
        }
    }else{
        join01checkFinal.classList.remove("checked")
        for(el of join01agreement){
            el.classList.remove("checked")
            join01checkChildSW = [0,0,0]
        }
    }
})

join01checkChild.forEach(function(el,i){
    el.addEventListener("click",function(){
        let thisParent = this.closest(".join--agreement");
        if(!thisParent.classList.contains("checked")){
            thisParent.classList.add("checked")
            join01checkChildSW[i] = 1
        }else{
            thisParent.classList.remove("checked")
            join01checkChildSW[i] = 0
        }
        if(join01checkChildSW.includes(0)){
            console.log("not yet")
            join01checkFinal.classList.remove("checked")
        } else{
            console.log("agree all")
            join01checkFinal.classList.add("checked")
        }
    })
})