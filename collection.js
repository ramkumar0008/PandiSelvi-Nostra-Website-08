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
//Product Collection
//Product Search Functionality
var productContainer=document.getElementById("productcontainer")
var search=document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()


    for(count=0; count< productlist.length; count=count+1)
        {
        var productname=productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }

})

