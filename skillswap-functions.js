function filterSkillsByCategory(skills, category) {
    if (category === 'All') {
        return skills;
    }

    return skills.filter(skill => skill.category === category);
}

// Allows Jest tests to use the function
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterSkillsByCategory
    };
}

// Allows the website to use the function
if (typeof window !== 'undefined') {
    window.filterSkillsByCategory = filterSkillsByCategory;
}