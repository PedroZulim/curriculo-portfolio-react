document.documentElement.classList.add("js-enabled");

const menuToggle = document.querySelector(".menu-toggle");
const portfolioMenu = document.querySelector(".topbar-links");

if (menuToggle && portfolioMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = portfolioMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
  portfolioMenu.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      portfolioMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}
