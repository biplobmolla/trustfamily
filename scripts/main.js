const menubtn = document.getElementById('menu');
const closebtn = document.getElementById('close');
const ul = document.getElementById('ul');
const btt = document.getElementById('btt');
const about = document.getElementById("about");

menubtn.addEventListener("click", function () {
    ul.style.right = "0";
})

closebtn.addEventListener("click", function () {
    ul.style.right = "-120%";
})

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        btt.style = "bottom: 15px; display: block;";
    } else {
        btt.style = "bottom: -15px; display: none;";
    }
})

btt.addEventListener("click", function () {
    window.scroll = 0;
})

// window.addEventListener("scroll", function(){
//     if(window.scrollY>0){
//         ul.style.right = "-260px";
//     }
// })