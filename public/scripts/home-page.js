// const swiper1 = new Swiper(".swiper.s1", {
//   speed: 500,
//   slidesPerView: 1,
//   spaceBetween: 10,

//   pagination: {
//     el: ".swiper-pagination.s1",
//   },

//   breakpoints: {
//     768: {
//       slidesPerView: 2, // Show 1 slide per view
//       spaceBetween: 30,
//     },
//     1000: {
//       slidesPerView: 3, // Show 1 slide per view
//       spaceBetween: 30,
//     },
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
// const swiper2 = new Swiper(".swiper.s2", {
//   speed: 500,
//   slidesPerView: 1,
//   spaceBetween: 10,

//   pagination: {
//     el: ".swiper-pagination",
//   },

//   breakpoints: {
//     768: {
//       slidesPerView: 2, // Show 1 slide per view
//       spaceBetween: 30,
//     },
//     1000: {
//       slidesPerView: 3, // Show 1 slide per view
//       spaceBetween: 30,
//     },
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
// const swiper3 = new Swiper(".swiper.s3", {
//   speed: 500,
//   slidesPerView: 1,
//   spaceBetween: 10,

//   pagination: {
//     el: ".swiper-pagination",
//   },

//   breakpoints: {
//     768: {
//       slidesPerView: 2, // Show 1 slide per view
//       spaceBetween: 30,
//     },
//     1000: {
//       slidesPerView: 3, // Show 1 slide per view
//       spaceBetween: 30,
//     },
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// const customPrevBtn1 = document.getElementById("homeslidernext1");
// const customNextBtn1 = document.getElementById("homesliderprev1");

// customPrevBtn1.addEventListener("click", function () {
//   swiper1.slidePrev(); 
// });

// customNextBtn1.addEventListener("click", function () {
//   swiper1.slideNext(); 
// });

// const customPrevBtn2 = document.getElementById("homeslidernext2");
// const customNextBtn2 = document.getElementById("homesliderprev2");

// customPrevBtn2.addEventListener("click", function () {
//   swiper2.slidePrev(); 
// });

// customNextBtn2.addEventListener("click", function () {
//   swiper2.slideNext(); 
// });

// const customPrevBtn3 = document.getElementById("homeslidernext3");
// const customNextBtn3 = document.getElementById("homesliderprev3");

// customPrevBtn3.addEventListener("click", function () {
//   swiper3.slidePrev(); 
// });

// customNextBtn3.addEventListener("click", function () {
//   swiper3.slideNext(); 
// });

// Tabs

// const tabs = document.querySelectorAll(".tab1");
// const contents = document.querySelectorAll(".tab-container");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     tabs.forEach((t) => t.classList.remove("active"));
//     tab.classList.add("active");

//     contents.forEach((content) => content.classList.remove("show"));

//     const targetContent = document.querySelector(
//       `[data-content="${tab.getAttribute("data-tab")}"]`
//     );
//     targetContent.classList.add("show");
//   });
// });

// Tabs end

