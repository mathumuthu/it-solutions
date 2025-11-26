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
























function handleContact() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const output = document.getElementById('contactResult');

  // If any required field empty → show message
  if (!name || !email || !message) {
    output.textContent = "Please fill all required fields.";
    output.classList.remove("text-green-600");
    output.classList.add("text-red-600");
    return;
  }

  // SUCCESS → redirect to another page
  // Change "thankyou.html" to your page name
  window.location.href = "404.html";
}
