// Подключение функционала "Чертогов Фрилансера"
import {
   isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
   flsModules
} from "./modules.js";


function scroll() {
   const header = document.querySelector('.header');
   const fullscreen = document.querySelector('.service-main');

   if (this.window.pageYOffset > fullscreen.offsetHeight - header.offsetHeight) {
      header.classList.add('_scroll');
   } else {
      header.classList.remove('_scroll');
   }
}

window.addEventListener('scroll', scroll);


// visually mode

const check = document.getElementById("scheme");
const checkFooter = document.getElementById("footer-scheme");


if (localStorage.getItem('darkMode') === null) {
   localStorage.setItem('darkMode', "false");

}

check.addEventListener("click", () => {
   document.documentElement.classList.toggle('darkMode_active');
   check.classList.toggle('darkMode_active');
   checkFooter.classList.toggle('darkMode_active'),changeStatus();   /* fxgxfgxfdg */
   // document.documentElement.style.setProperty('--main-bg-color', '#676767');
})

checkFooter.addEventListener("click", () => {
   document.documentElement.classList.toggle('darkMode_active');
   check.classList.toggle('darkMode_active');
   checkFooter.classList.toggle('darkMode_active'),changeStatus();   /* fxgxfgxfdg */
   // document.documentElement.style.setProperty('--main-bg-color', '#676767');
})


checkStatus()

function checkStatus() {
   if (localStorage.getItem('darkMode') === "true") {
      check.classList.add('darkMode_active');
      document.documentElement.classList.add('darkMode_active');
      checkFooter.classList.add('darkMode_active');
   } else {
      check.classList.remove('darkMode_active');
      checkFooter.classList.remove('darkMode_active');
      document.documentElement.classList.remove('darkMode_active');
   }
}


function changeStatus() {
   if (localStorage.getItem('darkMode') === "true") {
      localStorage.setItem('darkMode', "false");
      check.classList.remove('darkMode_active');
      checkFooter.classList.remove('darkMode_active');
      document.documentElement.classList.remove('darkMode_active');
   } else {
      localStorage.setItem('darkMode', "true");
      check.classList.add('darkMode_active');
      checkFooter.classList.add('darkMode_active');
      document.documentElement.classList.add('darkMode_active');
   }
}
