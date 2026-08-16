var navbar = document.getElementById("navbar")
var navbar1 = document.getElementById("navbar1")


navbar.addEventListener("click",function(){
    navbar1.remove()
})
 var sidenav = document.getElementById("sidenav")
 var menuicon = document.getElementById("menuicon")
 var closenav = document.getElementById("closenav")

 menuicon.addEventListener("click",function(){
    sidenav.style.right=0
 })
 closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
 })