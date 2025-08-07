console.log("Portofolio loaded");
// script.js

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".slide-section");
  const navButtons = document.querySelectorAll(".slide-nav-button");

  function showSection(id) {
    sections.forEach((section) => {
      if (section.id === id) {
        section.classList.remove("hidden");
      } else {
        section.classList.add("hidden");
      }
    });
  }

  navButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const target = this.getAttribute("data-target");
      showSection(target);
    });
  });

  // Default to showing the first section
  if (sections.length > 0) {
    showSection(sections[0].id);
  }
});
