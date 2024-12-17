document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.getElementById("contactBtn");
    contactBtn.addEventListener("click", () => {
        alert("Thank you for reaching out! We'll contact you soon.");
    });

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });
});
