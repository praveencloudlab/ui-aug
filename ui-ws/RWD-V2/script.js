document.querySelector(".menu-btn").addEventListener("click",()=>{
const menu=document.querySelector(".menu")
if(menu.style.display==="none" || menu.computedStyleMap.display===""){
    menu.style.display="block"; // show menu
}else{
    menu.style.display="none" // hide menu
}
});