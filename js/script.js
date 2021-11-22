const toggleBtn = document.getElementById('toggle')
let navStyle = "rgba(255, 165, 0, 1);"
toggleBtn.addEventListener('change',function(){
   if(toggleBtn.checked){
    document.body.style.backgroundColor = "rgb(32, 33, 36)";
    document.body.style.color = "rgb(255, 255, 255)"
    document.querySelector(".labelTag").style.backgroundColor = "rgba(255,165,0,1)";
    document.querySelector(".nav-logo").style.color = "rgba(255, 165, 0, 1)";
    document
}else{
    document.body.style.backgroundColor = "rgb(255, 255, 255)";
    document.body.style.color = "rgb(0, 0, 0)"
    document.querySelector(".nav-logo").style.color = "rgba(255, 165, 0, 0.8)";
    document.querySelector(".labelTag").style.backgroundColor = "rgba(32, 33, 36, 1)";
   }
})