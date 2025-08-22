// Toggle tema claro/escuro
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  if (document.documentElement.getAttribute("data-theme") === "light") {
    document.documentElement.removeAttribute("data-theme");
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
});

// Restaurar preferência de tema
if (localStorage.getItem("theme") === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  toggleBtn.textContent = "☀️";
}

// FAQ accordion
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Botão "voltar ao topo"
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
