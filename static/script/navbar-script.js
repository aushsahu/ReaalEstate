//----HAMBURGER SCRIPT START----
const ul = document.getElementById("nav-ul");
const hamburger = document.getElementById("hamburger");
hamburger.onclick = () => {
    if (ul.style.height !== "290px") {
        ul.style.height = "290px"
    }
    else {
        ul.style.height = "0px"
    }
}
ul.onclick = () => {
    if(screen.width < 723){
        ul.style.height = "0px"
    }
}
//----HAMBURGER SCRIPT END----