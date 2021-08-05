const sonik=document.getElementById("sonik");
const robot=document.getElementById("robot");

document.addEventListener("keydown", function(event){
    jump();
});



// function jump(){
//     sonik.classList.add("jump")
// }
function jump(){
    if  (sonik.classList != "jump"){
        sonik.classList.add ("jump")
    }
    setTimeout(function(){
        sonik.classList.remove("jump")
    }, 400)
}
let isAlive=setInterval(function() {
    let sonikTop=parseInt(window.getComputedStyle(sonik).getPropertyValue("top"));
    let robotLeft=parseInt(window.getComputedStyle(robot).getPropertyValue("left"));
    if (robotLeft < 50 && robotLeft > 0 && sonikTop>=140){
        alert("GAME OVER!")
    }
}, 10);