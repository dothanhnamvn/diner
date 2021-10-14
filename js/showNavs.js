document.getElementById("openNavs").onclick = function(){
    document.getElementById("showNavs").style.visibility = "visible";
    document.getElementById("showNavs").classList.add("open");
}

document.getElementById("closeNavs").onclick = function(){
    document.getElementById("showNavs").style.visibility = "hidden";
    document.getElementById("showNavs").classList.remove("open");
}



