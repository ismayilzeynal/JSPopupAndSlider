const bigImg=document.querySelector(".pop-container .popup .biggest");
const popupContainer=document.querySelector(".pop-container");
const images=document.querySelectorAll(".all-images a");
const leftArrwBtn=document.querySelector(".fa-arrow-left");
const rightArrwBtn=document.querySelector(".fa-arrow-right");
let changableAttr;  // silmek olar, funskiya daxilinde teyin ede bilerik



images.forEach(image => {
    image.addEventListener("click",function(e){
        e.preventDefault();
        changableAttr=this.children[0].getAttribute("src");
    
        changeImgSrcAttr(changableAttr);
        popupContainer.style.display="flex";
    })
});






function changeImgSrcAttr(src)
{
    bigImg.setAttribute("src",src);
}


