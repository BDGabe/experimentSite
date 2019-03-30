  window.addEventListener("scroll", animateNavbar);
  var shouldShrink = true;

  function animateNavbar() {
      if(window.innerWidth > 750){
          var navLinks = document.getElementsByClassName("nav-link");
          var navBar = document.getElementsByClassName("nav-bar");
          if (scrollY !== 0 && shouldShrink === true) {
              for (var i = 0; i < navLinks.length; i++) {
                  navLinks[i].style.fontSize = "1.175vw";
                  navLinks[i].style.padding = "18px";
                  navLinks[i].style.transition = "font-size 0.7s, padding 0.7s";
              }
              navBar[0].style.transition = "background-color 0.7s";
              shouldShrink = false;
          } else if (scrollY === 0 && shouldShrink === false) {
              for (var i = 0; i < navLinks.length; i++) {
                  navLinks[i].style.fontSize = "2vw";
                  navLinks[i].style.padding = "30px";
                  navLinks[i].style.transition = "font-size 0.7s, padding 0.7s";
              }
              navBar[0].style.transition = "background-color 0.7s";
              shouldShrink = true;
          }
      }
  }

  function animateSkillBar(object, percent, timeout) {
      try {
          window.setTimeout(function () {
              object.style.color = "#ffe175";
              object.style.fontWeight = "bold";
              object.style.width = percent + "%";
              object.style.transition = "width 1s, color 0.1s";
              var className = object.className.replace("skills", "");
              className.trim();
            
              $("." + className).numerator({
                  easing: "linear", // easing options.
                  duration: 1000, // the length of the animation.
                  delimiter: ',',
                  rounding: 0, // decimal places.
                  toValue: percent // animate to this value.
              });
          }, timeout);
      } catch (exception) {
          console.error("Uh-oh! Something went wrong! " + exception.message);
      }
  }

  window.onscroll = function () {
      if (window.scrollY >= 400) {
          var html = document.querySelector(".htmlSkill");
          var css = document.querySelector(".cssSkill");
          var js = document.querySelector(".jsSkill");
          animateSkillBar(html, 95, 1000);
          animateSkillBar(css, 85, 1250);
          animateSkillBar(js, 90, 1500);
      }
  };

var aboutLink = document.querySelector("[href='#about']");
aboutLink.onclick = function(){
  window.scroll({
    top: document.querySelector(".about-me").offsetTop - document.querySelector(".nav-bar").clientHeight + 20,
    left: 0,
    behavior: "smooth"
  });
};

var projectsLink = document.querySelector("[href='#projects']");
projectsLink.onclick = function(){
  window.scroll({
    top: document.querySelector(".projects").offsetTop - document.querySelector(".nav-bar").clientHeight + 32,
    left: 0,
    behavior: "smooth"
  });
};

var contactLink = document.querySelector("[href='#contact']");
contactLink.onclick = function(){
  window.scroll({
    top: document.querySelector(".contact-me").offsetTop - document.querySelector(".nav-bar").clientHeight + 50,
    left: 0,
    behavior: "smooth"
  });
};
