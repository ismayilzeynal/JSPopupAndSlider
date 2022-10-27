const bigImg=document.querySelector(".pop-container .popup .biggest");
const popupContainer=document.querySelector(".pop-container");
const images=document.querySelectorAll(".all-images a");
const leftArrwBtn=document.querySelector(".fa-arrow-left");
const rightArrwBtn=document.querySelector(".fa-arrow-right");
const exitBtn=document.querySelector(".fa-xmark");
let changableAttr;
let timer = setInterval(nextSlide, 5000);

images.forEach(image => {
    image.addEventListener("click",function(e){
        e.preventDefault();
        changableAttr=this.children[0].getAttribute("src");
        changeImgSrcAttr(changableAttr);
        popupContainer.style.display="flex";

        clearInterval(timer);
        timer=setInterval(nextSlide, 5000);
    })
})

rightArrwBtn.addEventListener("click",function(){
    nextSlide();
})

leftArrwBtn.addEventListener("click",function(){
    if(document.querySelector(`[src="${changableAttr}"]`).parentElement.previousElementSibling)
        changableAttr=document.querySelector(`[src="${changableAttr}"]`).parentElement.previousElementSibling.children[0].getAttribute("src");                 
    else
        changableAttr=document.querySelector(".all-images").lastElementChild.children[0].getAttribute("src");
    changeImgSrcAttr(changableAttr);
})

function nextSlide()
{
    if(document.querySelector(`[src="${changableAttr}"]`).parentElement.nextElementSibling)
        changableAttr=document.querySelector(`[src="${changableAttr}"]`).parentElement.nextElementSibling.children[0].getAttribute("src");                 
    else
        changableAttr=document.querySelector(".all-images").children[0].children[0].getAttribute("src");
    changeImgSrcAttr(changableAttr);
}

function changeImgSrcAttr(src)
{
    bigImg.setAttribute("src",src);
}

// under this line all for closing popup 
document.addEventListener("click", function(e){

    if(e.target.classList.contains("pop-container"))
        closePopup();
})

addEventListener('keydown', (e) => {
    if (e.key === "Escape")
        closePopup();
});

exitBtn.addEventListener("click",closePopup);

function closePopup()
{
    popupContainer.style.display="none";
}

