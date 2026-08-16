var navbar = document.getElementById("navbar")
var navbar1 = document.getElementById("navbar1")

navbar.addEventListener("click",function(){
    navbar1.remove()
})

//Selected Side Navbar Menubar
var sidenav = document.getElementById("sidenav")
var closenav =document.getElementById("closenav")
var menuicon =document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})