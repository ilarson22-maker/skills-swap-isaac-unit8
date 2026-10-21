console.log("Welcome to Skill Swap!");

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    const skills = Array.from(skillCards).map(card => ({
        category: card.dataset.category,
        element: card
    }));

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;

            const filteredSkills = window.filterSkillsByCategory(
                skills,
                category
            );

            skillCards.forEach(card => {
                card.hidden = true;
            });

            filteredSkills.forEach(skill => {
                skill.element.hidden = false;
            });

            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');
        });
    });
});
