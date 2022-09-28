const listSortOpenClass = document.getElementById("listSortOpenClass")
const listSortClassPop = document.getElementById("listSortClassPop")
const listSortClassClose = document.getElementById("listSortClassClose")
const listSortClassReset = document.getElementById("listSortClassReset")

const listSortOpenWhere = document.getElementById("listSortOpenWhere")
const listSortWherePop = document.getElementById("listSortWherePop")
const listSortWhereClose = document.getElementById("listSortWhereClose")
const listSortWhereReset = document.getElementById("listSortWhereReset")

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
listSortClassClose.addEventListener("click",function(){
    listSortOpenClass.classList.remove("open")
    listSortClassPop.classList.remove("open")
})
listSortWhereClose.addEventListener("click",function(){
    listSortOpenWhere.classList.remove("open")
    listSortWherePop.classList.remove("open")
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
listSortClassReset.addEventListener("click",function(){
    for(item of selectItemDummy){
        item.classList.remove("checked")
    }
})
listSortWhereReset.addEventListener("click",function(){
    for(item of selectItemDummy){
        item.classList.remove("checked")
    }
})

const fieldItem = document.querySelectorAll('.list--head-sort-fieldItem')
fieldItem.forEach(function(el,i){
    el.addEventListener("click",function(){
        for(item of fieldItem){
            item.classList.remove("on")
        }
        el.classList.add("on")
    })
})
document.querySelector(".list--head-sort-reset").addEventListener('click',function(){
    for(item of fieldItem){
        item.classList.remove("on")
    }
    for(item of selectItemDummy){
        item.classList.remove("checked")
    }
})