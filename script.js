
// Image Gallery Navigation
let pbutton = document.getElementById("prevBtn");
let nbutton = document.getElementById("nextBtn");
nbutton.addEventListener("click", function() {
    let current = document.querySelector(".current");
    let next = current.nextElementSibling;
    if (next) {
        current.classList.remove("current");
        next.classList.add("current");
    }
});
pbutton.addEventListener("click", function() {
    let current = document.querySelector(".current");
    let prev = current.previousElementSibling;
    if (prev) {
        current.classList.remove("current");
        prev.classList.add("current");
    }
});

// Button Click Event
document.getElementById("myButton").addEventListener("click", function() {
    this.textContent = "Clicked!";
    this.style.backgroundColor = "lightblue";
});

// Keypress Detection
document.getElementById("myInput").addEventListener("keypress", function(event) {
    console.log("Key pressed: ", event.key);
});

// Secret Action (Double-click)
document.getElementById("mySecret").addEventListener("dblclick", function() {
    alert("You discovered the secret!");
});


// Form Validation
document.getElementById("myForm").addEventListener("submit", function(event) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!email.includes("@") || password.length < 8 || password.length > 20  || !password.match(/[a-zA-Z0-9]/)) {
        alert("Invalid form submission. Ensure email is correct, password is at least 8 characters and includes special character.");
        event.preventDefault();
    }
});
