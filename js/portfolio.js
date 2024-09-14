document.addEventListener("DOMContentLoaded", function() {
    // Navbar toggle functionality
    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    // Project section read more/less functionality
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const card = this.closest(".card");
            const description = card.querySelector(".description");

            if (description.classList.contains("expanded")) {
                description.classList.remove("expanded");
                description.style.maxHeight = "80px"; // Adjusted for consistent height handling
                this.innerText = "Read More";
            } else {
                // Collapse other descriptions
                document.querySelectorAll(".card .description.expanded").forEach(expandedDesc => {
                    expandedDesc.classList.remove("expanded");
                    expandedDesc.style.maxHeight = "80px"; // Adjusted for consistent height handling
                    expandedDesc.closest(".card").querySelector(".read-more").innerText = "Read More";
                });

                description.classList.add("expanded");
                description.style.maxHeight = description.scrollHeight + "px";
                this.innerText = "Show Less";
            }
        });
    });
});
