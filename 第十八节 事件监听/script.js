// event listener事件监听

/*
function handle_click(element) {
    alert("叫你按就按啊？");
    console.log(element);
    element.innerText = "按屁啊！";
    element.style.color = "red";
}
*/

var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    alert("叫你按就按啊？");
    this.innerText = "按屁啊！";
    this.style.color = "red";
})
var img = document.getElementById("img");
img.addEventListener("mouseover", function(){
    this.src = "hotpot2.jpg"
})
img.addEventListener("mouseout", function(){
    this.src = "hotpot1.jpg"
})