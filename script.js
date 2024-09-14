document.addEventListener("DOMContentLoaded", function() {

    var typed = new Typed(".multiple-text", {
        strings: ["Undergraduate BS Computer Science Student",
                  "Full Stack Web Developer",
                  "Web Designer",
                  "Graphic Designer"
        ],
        typeSpeed: 100, 
        backSpeed: 50, 
        backDelay: 1000, 
        loop: true 
    });


    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const description = this.previousElementSibling;

            if (description.classList.contains("expanded")) {
                description.style.maxHeight = "80px";
                this.innerText = "Read More";
            } else {
                description.style.maxHeight = description.scrollHeight + "px";
                this.innerText = "Show Less";
            }

            description.classList.toggle("expanded");
        });
    });
});
