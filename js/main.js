let mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

//////////////////////// pages ///////////////////////////////////

let sections = document.querySelectorAll("li");
sections.forEach((li) => {
  li.addEventListener("click", () => {
    let activeExist = document.querySelector(".active");
    if (activeExist != null) { // 1er passage, aucun élément n'a de classe active, donc on ne peut pas la retirer
     activeExist.classList.remove("active"); //comportement par défaut (pas actif)
     }

    // li.classList.add("active");

    let liData = li.querySelector("a").dataset.type;
    //console.log(liData);
    let pages = document.querySelectorAll(".page");
    //console.log(pages);

    pages.forEach((page) => {
      let pageData = page.dataset.type;
      //console.log(pageData);
      page.classList.add("hidden"); //comportement par défaut (caché)
      if (liData == pageData) {
        page.classList.remove("hidden");
      }
    });

  });
});

//////////////////////////couleurs//////////////////////////////

let portfolioLog = document.querySelectorAll(".fas");
  $(portfolioLog).toggleClass('unclicked');
  $(portfolioLog).click(function(){
    $(portfolioLog).removeClass('clicked');
    $(this).addClass('clicked');
    console.log("ok");
});

////////////////////////Survol skills couleur//////////////////

let frontEnd = document.querySelectorAll(".front-end");
let frontEndCouleur = document.querySelector(".front-end-col");
$(frontEnd).hover(function(){
  $(frontEndCouleur).toggleClass('color');
});

let web = document.querySelectorAll(".web");
let webCouleur = document.querySelector(".web-col");
$(web).hover(function(){
  $(webCouleur).toggleClass('color');
});

let graphic = document.querySelectorAll(".graphic");
let graphicCouleur = document.querySelector(".graphic-col");
$(graphic).hover(function(){
  $(graphicCouleur).toggleClass('color');
});

let illu = document.querySelectorAll(".illu");
let illuCouleur = document.querySelector(".illu-col");
$(illu).hover(function(){
  $(illuCouleur).toggleClass('color');
});

/////////////////// Responsive //////////////////////////////


function size_page (){
  let width = $(window).width();
    if(width < 990){
      mySwiper.params.slidesPerView=1;
    }
    else{
      mySwiper.params.slidesPerView=3;
      }
}

size_page();

$(window).resize(function() {
    size_page();
  });

///////////////////// Burger Menu //////////////////////////////

  let myMenu = document.querySelector(".burger-menu");
  let myNav = document.querySelector(".menu");
  
  myMenu.addEventListener("click", () => {
      myMenu.classList.toggle("active");
      myNav.classList.toggle("active");
  });