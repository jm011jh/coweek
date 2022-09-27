var $asideOpenBtn = document.querySelector(".detail--aside-dropDownButton")
var $asideOpenMenu = document.querySelector(".detail--aside-dropDownMenu")

$asideOpenBtn.addEventListener('click',function(){
    if( this.classList.contains("close") ){

        this.classList.remove("close")
        $asideOpenMenu.classList.remove("close")

    }else{

        this.classList.add("close")
        $asideOpenMenu.classList.add("close")

    }
})
