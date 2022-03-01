// var main_div1=document.getElementsByClassName("main_div1")[0];
// var main_div2=document.getElementsByClassName("main_div2")[0];
// var dots=document.getElementsByClassName("dot");


// var dotting = document.querySelectorAll(".dot");

// dotting.forEach(dot => {
//     dot.addEventListener("click", ()=>{
//         console.log("dotting");
//     })
// });

// console.log(showslide1, showslide2);

// window.addEventListener('load', function() { 

// function myDemo(){
//     console.log("demo");
// }




//     console.log("2");
// function showslide1(){  
//     main_div1.style.transform="translateY(0)";
//     main_div2.style.transform="translateY(0)";
// }

// function showslide2(){
//     main_div1.style.transform="translateY(-100%)";
//     main_div2.style.transform="translateY(100%)";
// }

// function showslide3(){
//     main_div1.style.transform="translateY(-200%)";
//     main_div2.style.transform="translateY(200%)";
// }

// function showslide4(){
//     main_div1.style.transform="translateY(-300%)";
//     main_div2.style.transform="translateY(300%)";
// }

// function showslide5(){
//     main_div1.style.transform="translateY(-400%)";
//     main_div2.style.transform="translateY(400%)";
// }

// function showslide6(){
//     main_div1.style.transform="translateY(-500%)";
//     main_div2.style.transform="translateY(500%)";
// }

// function showslide7(){
//     main_div1.style.transform="translateY(-600%)";
//     main_div2.style.transform="translateY(600%)";
// }

// })

// VERSION ONE

// import $ from "jquery";
// import { multiscroll } from "jquery.multiscroll.js";

$(document).ready(function() {
	$('#multiscroll').multiscroll({
        navigation: true,
		navigationPosition: 'left',
		navigationColor: '#000'
    });
});

// import Split from "split-grid"

// Split({
//     columnGutters: [{
//         track: 1,
//         element: document.querySelector('.gutter-col-1')
//     }],
//     rowGutters: [{
//         track: 1,
//         element: document.querySelector('.gutter-row-1')
//     }]
// })