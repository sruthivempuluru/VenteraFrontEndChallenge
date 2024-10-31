document.querySelectorAll(".question").forEach(question => {
    question.addEventListener("click", () => {
        const parentAccordion = question.parentNode; // Get the parent accordion of the clicked question
        const answer = parentAccordion.querySelector(".answer"); // Get the associated answer
        const icon = parentAccordion.querySelector(".toggle-icon"); // Select the toggle icon

        // Toggle the active class on the parent accordion
        const isActive = parentAccordion.classList.toggle("active");

        // Show or hide the answer based on the active state
        if (isActive) {
            answer.style.display = "block"; 
            icon.src = "./assets/images/icon-minus.svg"; 
        } else {
            answer.style.display = "none"; // Hide the answer if not active
            icon.src = "./assets/images/icon-plus.svg"; // Change icon back to plus
        }

        // Close other questions if needed
        document.querySelectorAll(".question-answer__accordion").forEach(accordion => {
            if (accordion !== parentAccordion && accordion.classList.contains("active")) {
                accordion.classList.remove("active"); // Remove active class from other accordions
                accordion.querySelector(".answer").style.display = "none"; // Hide the corresponding answer
                accordion.querySelector(".toggle-icon").src = "./assets/images/icon-plus.svg"; // Reset icon to plus
            }
        });
    });
});
