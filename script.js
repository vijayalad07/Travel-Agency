document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".destinations-unique");
    const cards = document.querySelectorAll(".card-unique");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.classList.add("active");
                    cards.forEach(card => card.classList.add("active"));
                    observer.unobserve(section); // Stop observing after animation runs
                }
            });
        },
        { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    observer.observe(section);
});
