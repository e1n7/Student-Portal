const profileMenu = document.getElementById("profileMenu");
const profileButton = profileMenu.querySelector(".profile-btn");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

profileButton.addEventListener("click", () => {
  const isOpen = profileMenu.classList.toggle("open");
  profileButton.setAttribute("aria-expanded", String(isOpen));
});

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.addEventListener("click", (event) => {
  if (!profileMenu.contains(event.target)) {
    profileMenu.classList.remove("open");
    profileButton.setAttribute("aria-expanded", "false");
  }

  if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
    sidebar.classList.remove("open");
  }
});
