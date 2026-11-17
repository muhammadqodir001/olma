
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

// Mobile menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  menuBtn.textContent = navLinks.classList.contains("active")
    ? "✕"
    : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

// Search
searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  searchInput.focus();
});

closeSearch.addEventListener("click", () => {
  searchBox.classList.remove("active");
  searchInput.value = "";
});

// Search products on the page
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const query = searchInput.value.toLowerCase().trim();

    if (!query) return;

    const cards = document.querySelectorAll(
      ".hero, .product-card, .entertainment"
    );

    let found = false;

    cards.forEach(card => {
      if (
        card.textContent.toLowerCase().includes(query) &&
        !found
      ) {
        card.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

        found = true;
      }
    });

    if (!found) {
      alert("Sorry, no products found!");
    }

    searchBox.classList.remove("active");
  }
});

// Close search with Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchBox.classList.remove("active");
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  }
});
