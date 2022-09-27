const headerLinkOpen = document.getElementById("headerLinkOpen")
const headerMenu = document.getElementById("headerMenu")
const headerBg = document.getElementById("headerBg")
const headerEventClose = document.getElementById("headerEventClose")
const headerHam = document.getElementById("headerHam")
// const body = document.body;
function headOpen(){
    headerLinkOpen.classList.add('open')
    headerMenu.classList.remove('close')
    headerBg.classList.add('show')
}
function headClose(){
    headerLinkOpen.classList.remove('open')
    headerMenu.classList.add('close')
    headerBg.classList.remove('show')
}
headerLinkOpen.addEventListener('click',function(el){
    if(headerLinkOpen.classList.contains('open')){
        headClose()
    }else{
        headOpen()
    }
})
headerHam.addEventListener('click',function(el){
    if(headerLinkOpen.classList.contains('open')){
        headClose()
    }else{
        headOpen()
    }
})
headerBg.addEventListener('click',function(){
    headClose()
})
headerEventClose.addEventListener('click',function(){
    headClose()
})
headerCloseMobile.addEventListener('click',function(){
    headClose()
})
