// selecting menu bar menu
var menubar= document.getElementById("menubar")
var menu = document.querySelector(".menu")
var closenav= document.getElementById("closenav")
function clicked(){
    menu.style.display="block";
   menu.classList.toggle("showmenu")

}
closenav.addEventListener("click",function(){
  menu.style.display="none";
})