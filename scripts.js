document.getElementById("analysis-form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Bank statement uploaded successfully! Analyzing your data...");
    // Add API or backend integration for analysis here.
});

document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Logging you in...");
    // Add authentication integration here.
});
