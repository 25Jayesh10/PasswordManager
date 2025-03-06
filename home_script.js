let moon = document.getElementById("moon");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");

let desert_moon = document.getElementById("desert-moon")
let man = document.getElementById("man");

window.addEventListener("scroll", ()=>{
    let value = window.scrollY;
    text2.style.top = 80 + value * -0.2 + '%';
})


let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos*100)/calcHeight);
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", ()=>{
        document.documentElement.scrollTop = 0;
    });
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;