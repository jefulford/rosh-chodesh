var menu = document.getElementById("menu");
var menuBars = document.getElementById("bars");
var menuList = document.getElementById("menu-list");
var closeMenu = document.getElementById("close-menu");
var all = document.getElementById("all");
var menuOpen = false;

menuBars.addEventListener("click", function(){
	menuBars.classList.add("hidden");
	menuList.classList.remove("hidden");
	all.style.opacity = .7;

});

closeMenu.addEventListener("click", function(){
	menuBars.classList.remove("hidden");
	menuList.classList.add("hidden");
	all.style.opacity = 1;

})

all.addEventListener("click", function(){
	menuBars.classList.remove("hidden");
	menuList.classList.add("hidden");
	all.style.opacity = 1;

})
