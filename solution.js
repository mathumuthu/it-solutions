const hamburger = document.querySelector(".hamburger");
const navBar    = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});














document.getElementById("subscribeForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop default submit

  let email = document.getElementById("emailInput").value.trim();
  let errorMsg = document.getElementById("errorMessage");

  if (email === "") {
    errorMsg.style.display = "block";   // show error
  } else {
    errorMsg.style.display = "none";    // hide error

    // 🔥 Redirect to another page (change file name here)
    window.location.href = "404.html";
  }
});



































  const cards = document.querySelectorAll('.fade-in');

  function checkVisibility() {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  window.addEventListener("load", checkVisibility);
