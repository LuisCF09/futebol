// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Animação de fade-in ao scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Aplicar animação aos cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".stat-card, .rule-card, .legend-card, .timeline-item")

  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
})

// Menu mobile responsivo
const createMobileMenu = () => {
  const nav = document.querySelector(".nav-menu")
  const navContainer = document.querySelector(".nav-container")

  if (window.innerWidth <= 768 && !document.querySelector(".mobile-toggle")) {
    const toggle = document.createElement("button")
    toggle.className = "mobile-toggle"
    toggle.innerHTML = "☰"
    toggle.style.cssText =
      "background: none; border: 2px solid #fff; color: #fff; font-size: 24px; padding: 5px 15px; cursor: pointer;"

    toggle.addEventListener("click", () => {
      nav.classList.toggle("active")
    })

    navContainer.appendChild(toggle)
  }
}

window.addEventListener("resize", createMobileMenu)
createMobileMenu()
