// const marquee = document.getElementById("marquee");
// const textElements = document.querySelectorAll("#text");
// const dotElements = document.querySelectorAll("#dot");
// const speed = 50;

// let totalWidth = 0;

// textElements.forEach((text) => (totalWidth += text.offsetWidth));
// dotElements.forEach((dot) => (totalWidth += dot.offsetWidth));

// let offset = 0;

// function scrollText() {
//   offset -= 1;

//   if (offset < -totalWidth) {
//     offset = marquee.offsetWidth;
//   }

//   textElements.forEach(
//     (text) => 
//         {
//             text.style.transform = translateX(${offset}px);
//         }
//   );
//   dotElements.forEach(
//     (dot) => 
//         {
//             dot.style.transform = translateX(${offset}px);
//         }
//   );
// }

// // setInterval(scrollText, speed);
