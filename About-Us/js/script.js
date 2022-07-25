var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "css/style.css";
    let darkTheme = "dark-css/dark-style.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}

var check = document.getElementById("theme-btn");

check.addEventListener("click", function (){CheckTheme(); });

function CheckTheme() {
    let lightTheme = "css/style.css";
    let darkTheme = "dark-css/dark-style.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}

// window.addEventListener('scroll', function onScroll() {
//     let number = document.querySelector('.number'),
//     numberTop = number.getBoundingClientRect().top,
//     start = +number.innerHTML, end = +number.dataset.max;
//     if(window.pageYOffset > numberTop - window.innerHeight /
//         2) {
//         this.removeEventListener('scroll', onScroll);
//         var interval = setInterval(function() {
//             number.innerHTML = ++start;
//             if(start == end) {
//                 clearInterval(interval);
//             }
//         }, 10);
//     }
// });


// window.addEventListener('scroll', function onScroll2() {
//     let number_2 = document.querySelector('.number-2'),
//     numberTop_2 = number_2.getBoundingClientRect().top,
//     start_2 = +number_2.innerHTML, end = +number_2.dataset.max;
//     if(window.pageYOffset > numberTop_2 - window.innerHeight /
//         2) {
//         this.removeEventListener('scroll', onScroll2);
//         var interval_2 = setInterval(function() {
//             number_2.innerHTML = ++start_2;
//             if(start_2 == end) {
//                 clearInterval(interval_2);
//             }
//         }, 0);
//     }
// });

// for ( let i of document.querySelectorAll(".number") ) {

//     let numberTop = i.getBoundingClientRect().top,
//         start = +i.innerHTML,
//         end = +i.dataset.max;
  
//     window.addEventListener('scroll', function onScroll() {
//       if(window.pageYOffset > numberTop - window.innerHeight / 2) {
//         this.removeEventListener('scroll', onScroll);
//         let interval = this.setInterval(function() {
//           i.innerHTML = ++start;
//           if(start == end) {
//             clearInterval(interval);
//           }
//       }, 0);
//       }
//     });
//   }

$(document).ready(function () {
 
  var show = true;
  var countbox = ".section__results";
  $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.number').css('opacity', '1');
          $('.number').spincrement({
              thousandSeparator: "",
              duration: 1400
          });
           
          show = false;
      }
  });

});

var modal = document.getElementById('id01');
var container = document.getElementById('container-modal')

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    else if (event.target == container) {
        modal.style.display = "none";
    }
}