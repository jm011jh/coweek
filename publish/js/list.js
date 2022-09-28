const listSortOpenClass = document.getElementById("listSortOpenClass")
const listSortClassPop = document.getElementById("listSortClassPop")

const listSortOpenWhere = document.getElementById("listSortOpenWhere")
const listSortWherePop = document.getElementById("listSortWherePop")

listSortOpenClass.addEventListener("click",function(){
    if(!listSortOpenClass.classList.contains("open")){
        listSortOpenClass.classList.add("open")
        listSortClassPop.classList.add("open")
        listSortOpenWhere.classList.remove("open")
        listSortWherePop.classList.remove("open")
    }else{
        listSortOpenClass.classList.remove("open")
        listSortClassPop.classList.remove("open")
    }
})

listSortOpenWhere.addEventListener("click",function(){
    if(!listSortOpenWhere.classList.contains("open")){
        listSortOpenWhere.classList.add("open")
        listSortWherePop.classList.add("open")
        listSortOpenClass.classList.remove("open")
        listSortClassPop.classList.remove("open")
    }else{
        listSortOpenWhere.classList.remove("open")
        listSortWherePop.classList.remove("open")
    }
})

const selectItemDummy = document.querySelectorAll(".list--head-sort-pop-selectItem")
selectItemDummy.forEach(function(el,i){
    el.addEventListener("click",function(){
        if(!el.classList.contains("checked")){
            el.classList.add("checked")
        }else{
            el.classList.remove("checked")
        }
    })
})
