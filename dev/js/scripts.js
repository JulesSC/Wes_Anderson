import { gsap } from "gsap";

const sectionCount = document.querySelectorAll(".left > .box").length;
let isAnimating = false;
let count = 0;
const duration = 1;
window.addEventListener("wheel", () => {
  const delta = Math.sign(event.deltaY);
  if(!isAnimating) {
    if(delta > 0 && count < sectionCount - 1) {
      gsap.to(".left", {duration: duration, y: "-=" + innerHeight, onComplete: () => isAnimating = false });
      gsap.to(".right", {duration: duration, y: "+=" + innerHeight});
      count++;
    } else if(delta < 0 && count > 0) {
      gsap.to(".left", {duration: duration, y: "+=" + innerHeight, onComplete: () => isAnimating = false });
      gsap.to(".right", {duration: duration, y: "-=" + innerHeight});
      count--;
    }
    
    isAnimating = true;
  }
});