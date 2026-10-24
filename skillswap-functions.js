function filterSkillsByCategory(skills, category) {
    if (category === 'All') {
        return skills;
    }

    return skills.filter(skill => skill.category === category);
}

function calculateTotalCosts(hourlyRate, hours) {
    return hourlyRate * hours;
}

// Allows Jest tests to use both functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterSkillsByCategory,
        calculateTotalCosts
    };
}

// Allows the website to use both functions
if (typeof window !== 'undefined') {
    window.filterSkillsByCategory = filterSkillsByCategory;
    window.calculateTotalCosts = calculateTotalCosts;
}
