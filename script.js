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

document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculate-cost-button');
    const hourlyRateInput = document.getElementById('hourly-rate');
    const sessionHoursInput = document.getElementById('session-hours');
    const costResult = document.getElementById('cost-result');

    calculateButton.addEventListener('click', function () {
        const rateText = hourlyRateInput.value;
        const hoursText = sessionHoursInput.value;
        const hourlyRate = Number(rateText);
        const hours = Number(hoursText);

        if (
            rateText === '' ||
            hoursText === '' ||
            !Number.isFinite(hourlyRate) ||
            !Number.isFinite(hours) ||
            hourlyRate < 0 ||
            hours < 0
        ) {
            costResult.textContent =
                'Please enter a valid rate and number of hours.';
            return;
        }

        const totalCost = window.calculateTotalCosts(hourlyRate, hours);

        costResult.textContent =
            'Total Cost: $' + totalCost.toFixed(2);
    });
});
