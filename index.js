setTimeout(()=>{document.querySelector("ul").firstElementChild.innerHTML= '<a href="https://www.google.com">Google</a>'
document.querySelector(".middle").innerHTML= '<a href="https://www.youtube.com">Youtube</a>'
document.querySelector("ul").lastElementChild.innerHTML =' <a href="https://www.facebook.com">Facebook</a>'
},5000)
function hit(i){document.querySelector('h2').innerHTML= `Unlock links in ${i} seconds`;}
var i =5 ;timerunner();
function timerunner(){
   if(i>0) {setTimeout(()=>{i--;hit(i);timerunner()},1000);}
   else{document.querySelector('h2').innerHTML = 'Click to Redirect to Desired Website';}
    
}




