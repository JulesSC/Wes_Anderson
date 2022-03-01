// import { gsap } from "gsap";
import $ from "jquery";
// import { multiscroll } from "multiscroll";

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