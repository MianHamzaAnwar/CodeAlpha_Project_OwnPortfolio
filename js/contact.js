document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll(".input-box input, .input-box textarea");

    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            this.classList.add("focused");
        });

        input.addEventListener("blur", function() {
            if (this.value === "") {
                this.classList.remove("focused");
            }
        });
    });
});
