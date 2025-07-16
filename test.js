function showbar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = "flex";
    document.body.style.overflow = "hidden"; 
}

function hidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.display = "none";
    document.body.style.overflow = ""; // Restore scrolling
}

// Add event listener for window resize to handle menu visibility
window.addEventListener('resize', function() {
    const sidebar = document.getElementById("sidebar");
    if (window.innerWidth > 800 && sidebar.style.display === "flex") {
        sidebar.style.display = "none";
        document.body.style.overflow = "";
    }
});

// Close sidebar when clicking outside
document.addEventListener("click", function(event) {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.querySelector(".menu-toggle");
    
    if (sidebar.style.display === "flex" && 
        !sidebar.contains(event.target) && 
        !toggleButton.contains(event.target)) {
        hidebar();
    }
});

// Prevent default on menu toggle click to avoid page jumps
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle a');
    if (menuToggle) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
        });
    }
    
    // Add click event to sidebar close button
    const closeBtn = document.querySelector('#sidebar li:first-child a');
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
        });
    }
});