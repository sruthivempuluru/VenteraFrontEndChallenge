document.querySelectorAll(".question").forEach(question => {
    question.addEventListener("click", () => {
        const parentAccordion = question.parentNode; 
        const answer = parentAccordion.querySelector(".answer");
        const icon = parentAccordion.querySelector(".toggle-icon"); 

        // Toggle the active class on the parent accordion
        const isActive = parentAccordion.classList.toggle("active");

        // Show or hide the answer based on the active state
        if (isActive) {
            answer.style.display = "block"; 
            icon.src = "./assets/images/icon-minus.svg"; 
        } else {
            answer.style.display = "none"; 
            icon.src = "./assets/images/icon-plus.svg"; 
        }

        // Close other questions if new one is opening and change icon
        document.querySelectorAll(".question-answer__accordion").forEach(accordion => {
            if (accordion !== parentAccordion && accordion.classList.contains("active")) {
                accordion.classList.remove("active");
                accordion.querySelector(".answer").style.display = "none";
                accordion.querySelector(".toggle-icon").src = "./assets/images/icon-plus.svg"; 
            }
        });
    });
});
