const passwordNew = document.getElementById("passwordNew")
const passwordNewRe = document.getElementById("passwordNewRe")
const passwordNewShow = document.getElementById("passwordNewShow")
const passwordNewReShow = document.getElementById("passwordNewReShow")

passwordNewShow.addEventListener('click', ()=> {
    if( !passwordNewShow.classList.contains("visible") ){
        passwordNewShow.classList.add("visible")
        passwordNew.setAttribute("type","text")
    } else {
        passwordNewShow.classList.remove("visible")
        passwordNew.setAttribute("type","password")
    }
})
passwordNewReShow.addEventListener('click', ()=> {
    if( !passwordNewReShow.classList.contains("visible") ){
        passwordNewReShow.classList.add("visible")
        passwordNewRe.setAttribute("type","text")
    } else {
        passwordNewReShow.classList.remove("visible")
        passwordNewRe.setAttribute("type","password")
    }
})

const memberFixCheckMale = document.getElementById("memberFixCheckMale")
const memberFixCheckFemale = document.getElementById("memberFixCheckFemale")
const memberFixCheckStay = document.getElementById("memberFixCheckStay")
const memberFixCheckLeave = document.getElementById("memberFixCheckLeave")

const inputHideSexFemale = document.querySelector(".inputHideSexFemale")
const inputHideSexMale = document.querySelector(".inputHideSexMale")
const inputHideStay = document.querySelector(".inputHideStay")
const inputHideLeave = document.querySelector(".inputHideLeave")

memberFixCheckMale.addEventListener('click',function(){
    memberFixCheckMale.classList.add("checked")
    memberFixCheckFemale.classList.remove("checked")

    inputHideSexMale.checked = true;
    inputHideSexFemale.checked = false;
})
memberFixCheckFemale.addEventListener('click',function(){
    memberFixCheckFemale.classList.add("checked")
    memberFixCheckMale.classList.remove("checked")
    inputHideSexFemale.checked = true;
    inputHideSexMale.checked = false;
})
memberFixCheckStay.addEventListener('click',function(){
    memberFixCheckStay.classList.add("checked")
    memberFixCheckLeave.classList.remove("checked")
    inputHideStay.checked = true;
    inputHideLeave.checked = false;
})
memberFixCheckLeave.addEventListener('click',function(){
    memberFixCheckLeave.classList.add("checked")
    memberFixCheckStay.classList.remove("checked")
    inputHideLeave.checked = true;
    inputHideStay.checked = false;
})

// member select show
const memberFixShowBox = document.querySelectorAll(".member--fix-select-showBox")
memberFixShowBox.forEach( (el) => {
    el.addEventListener( "click", () => {
        let thisParent = el.closest(".member--fix-selectBox")
        let selectList = thisParent.querySelector(".member--fix-select-list")
        !selectList.classList.contains("show")
        ?selectList.classList.add("show")
        :selectList.classList.remove("show")
    })
})

const memberFixListitem = document.querySelectorAll(".member--fix-select-listItem")
memberFixListitem.forEach( function(el) {
    el.addEventListener('click', function(thisEl) {
        let thisParent = el.closest(".member--fix-selectBox")
        let selectList = thisParent.querySelector(".member--fix-select-list")
        let thisShowBox = thisParent.querySelector(".member--fix-select-showBox")
        let thisShowBoxInner = thisShowBox.querySelector(".member--fix-select-showBox-p")
        thisShowBoxInner.innerHTML = el.innerHTML
        
        selectList.classList.remove("show")
    })
})