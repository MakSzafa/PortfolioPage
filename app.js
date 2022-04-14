(function () {
  [...document.querySelectorAll(".button")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      button.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
      window.scrollTo(0,0);
    });
  });
  // [...document.querySelectorAll(".skill-item")].forEach((skill, index) => {
  //   let skillSlider0;
  //   let skillSlider1;
  //   let skillSlider2;
  //   let skillSlider3;
  //   switch (index) {
  //     case 0:
  //       setTimeout(function () {
  //         skill.classList.add("hovered-skill");
  //         setTimeout(function () {
  //           skill.classList.remove("hovered-skill");
  //         }, 4000);
  //         skillSlider0 = setInterval(function () {
  //           skill.classList.add("hovered-skill");
  //           setTimeout(function () {
  //             skill.classList.remove("hovered-skill");
  //           }, 4000);
  //         }, 16000);
  //       }, 3000);
  //     case 1:
  //       setTimeout(function () {
  //         skill.classList.add("hovered-skill");
  //         setTimeout(function () {
  //           skill.classList.remove("hovered-skill");
  //         }, 4000);
  //         skillSlider1 = setInterval(function () {
  //           skill.classList.add("hovered-skill");
  //           setTimeout(function () {
  //             skill.classList.remove("hovered-skill");
  //           }, 4000);
  //         }, 16000);
  //       }, 7000);
  //     case 2:
  //       setTimeout(function () {
  //         skill.classList.add("hovered-skill");
  //         setTimeout(function () {
  //           skill.classList.remove("hovered-skill");
  //         }, 4000);
  //         skillSlider2 = setInterval(function () {
  //           skill.classList.add("hovered-skill");
  //           setTimeout(function () {
  //             skill.classList.remove("hovered-skill");
  //           }, 4000);
  //         }, 16000);
  //       }, 11000);
  //     case 3:
  //       setTimeout(function () {
  //         skill.classList.add("hovered-skill");
  //         setTimeout(function () {
  //           skill.classList.remove("hovered-skill");
  //         }, 4000);
  //         skillSlider3 = setInterval(function () {
  //           skill.classList.add("hovered-skill");
  //           setTimeout(function () {
  //             skill.classList.remove("hovered-skill");
  //           }, 4000);
  //         }, 16000);
  //       }, 15000);
  //   }

  //   // skill.addEventListener("mouseover", function () {
  //   //   console.log(skillSlider0)
  //   //   clearInterval(skillSlider0);
  //   //   clearInterval(skillSlider1);
  //   //   clearInterval(skillSlider2);
  //   //   clearInterval(skillSlider3);
  //   // });

  //   // skill.addEventListener("mouseout", function(){
  //   //   [...document.querySelectorAll(".skill-item")].forEach((skill, index) => {
  //   //     switch (index) {
  //   //       case 0:
  //   //         setTimeout(function () {
  //   //           skill.classList.add("hovered-skill");
  //   //           setTimeout(function () {
  //   //             skill.classList.remove("hovered-skill");
  //   //           }, 4000);
  //   //           const skillSlider0 = setInterval(function () {
  //   //             skill.classList.add("hovered-skill");
  //   //             setTimeout(function () {
  //   //               skill.classList.remove("hovered-skill");
  //   //             }, 4000);
  //   //           }, 16000);
  //   //         }, 3000);
  //   //       case 1:
  //   //         setTimeout(function () {
  //   //           skill.classList.add("hovered-skill");
  //   //           setTimeout(function () {
  //   //             skill.classList.remove("hovered-skill");
  //   //           }, 4000);
  //   //           const skillSlider1 = setInterval(function () {
  //   //             skill.classList.add("hovered-skill");
  //   //             setTimeout(function () {
  //   //               skill.classList.remove("hovered-skill");
  //   //             }, 4000);
  //   //           }, 16000);
  //   //         }, 7000);
  //   //       case 2:
  //   //         setTimeout(function () {
  //   //           skill.classList.add("hovered-skill");
  //   //           setTimeout(function () {
  //   //             skill.classList.remove("hovered-skill");
  //   //           }, 4000);
  //   //           const skillSlider2 = setInterval(function () {
  //   //             skill.classList.add("hovered-skill");
  //   //             setTimeout(function () {
  //   //               skill.classList.remove("hovered-skill");
  //   //             }, 4000);
  //   //           }, 16000);
  //   //         }, 11000);
  //   //       case 3:
  //   //         setTimeout(function () {
  //   //           skill.classList.add("hovered-skill");
  //   //           setTimeout(function () {
  //   //             skill.classList.remove("hovered-skill");
  //   //           }, 4000);
  //   //           const skillSlider3 = setInterval(function () {
  //   //             skill.classList.add("hovered-skill");
  //   //             setTimeout(function () {
  //   //               skill.classList.remove("hovered-skill");
  //   //             }, 4000);
  //   //           }, 16000);
  //   //         }, 15000);
  //   //     }
  //   //   });
  //   // })
  // });
  //   document.querySelector(".theme-button").addEventListener("click", () => {
  //     document.body.classList.toggle("light-mode");
  //   });
})();
