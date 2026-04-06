const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const header = document.getElementById("header");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.18)";
  } else {
    header.style.boxShadow = "none";
  }
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

const newsletterForm = document.querySelector(".newsletter-form");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Newsletter signup demo submitted.");
  });
}