const thing = document.createElement("div")
thing.innerHTML = "hello people we are here"
document.getElementById('check').appendChild(thing)


const checkpoint = 300;
 
window.addEventListener("scroll", () => {
   const currentScroll = window.pageYOffset;
   if (currentScroll <= checkpoint) {
     opacity = 1 - currentScroll / checkpoint;
   } else {
     opacity = 0;
   }
   document.querySelector(".contentGreeting").style.opacity = opacity;
});

