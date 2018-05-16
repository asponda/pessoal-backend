'use strict';

const Skill = require('./Skill');
const router = require('express').Router();

// routes
router.get('/', (req, res) => {
    const result = getSkills();
    res.send(result);
});

// functions
function getSkills() {
    return [
        new Skill(0, 'Angular', 10),
        new Skill(1, 'HTML5', 10),
        new Skill(2, 'CSS3', 10),
        new Skill(3, 'C#', 10),
        new Skill(4, '.NET', 10),
        new Skill(5, 'NodeJS', 7),
        new Skill(6, 'GIT', 7),
        new Skill(7, 'Node TESTE', 3)
    ];
}

module.exports = router;