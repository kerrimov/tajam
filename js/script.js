menu.onclick = function myMenu() {
    var x = document.getElementById('myTopnav');

    if (x.className === "topnav"){
        x.className += " responsive";
    }else{
        x.className = "topnav";
    }
}
