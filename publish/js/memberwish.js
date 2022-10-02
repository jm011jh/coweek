const memberWishLike = document.querySelectorAll(".member--wish-like")
const wishAskPopup = document.getElementById("wishAskPopup")
const wishAskDeleteCancel = document.getElementById("wishAskDeleteCancel")

memberWishLike.forEach((el)=>{
    el.addEventListener("click",function(){
        wishAskPopup.classList.add("show")
    })
})
wishAskDeleteCancel.addEventListener('click',()=>{
    console.log("hid")
    wishAskPopup.classList.remove("show")
})
