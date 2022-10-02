const memberClassDayItems = document.querySelectorAll(".member--classDay-item")

memberClassDayItems.forEach(function(el){
    el.addEventListener('click',function(){
        for(item of memberClassDayItems){
            item.classList.remove("on")
        }
        el.classList.add("on")
    })
})