const swiper4 = new Swiper(".swiper.s4", {
  speed: 500,
  spaceBetween: 40,

  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const customPrevBtn4 = document.getElementById("mainslidernext4");
const customNextBtn4 = document.getElementById("mainsliderprev4");

// Add event listeners to custom buttons
customPrevBtn4.addEventListener("click", function () {
  swiper4.slidePrev(); // Go to the previous slide
});

customNextBtn4.addEventListener("click", function () {
  swiper4.slideNext(); // Go to the next slide
});

document.addEventListener("DOMContentLoaded", function () {
  // Add click event listeners for plus and minus buttons
  document.querySelectorAll(".plusBtn").forEach((button) => {
    button.addEventListener("click", function () {
      const qtyElement = this.nextElementSibling;
      let qty = parseInt(qtyElement.textContent.trim());
      qty++;
      qtyElement.textContent = qty;
    });
  });

  document.querySelectorAll(".minusBtn").forEach((button) => {
    button.addEventListener("click", function () {
      const qtyElement = this.previousElementSibling;
      let qty = parseInt(qtyElement.textContent.trim());
      if (qty > 0) {
        qty--;
        qtyElement.textContent = qty;
      }
    });
  });
});

// Tabs

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-container");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove the 'active' class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    // Add the 'active' class to the clicked tab
    tab.classList.add("active");

    // Hide all content sections
    contents.forEach((content) => content.classList.remove("show"));

    // Show the content section corresponding to the clicked tab
    const targetContent = document.querySelector(
      `[data-content="${tab.getAttribute("data-tab")}"]`
    );
    targetContent.classList.add("show");
  });
});

// Tabs end



