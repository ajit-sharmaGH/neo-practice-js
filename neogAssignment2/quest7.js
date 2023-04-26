// 7. Write an ES6 function that takes an object of two arrays of objects with name salary, role and workExperience, and returns a new array of employees having a role as QA in all teams
const getQAEmployees = (teams) => {
    // Your ES6+ code here

    const teamOneFilter = teams.team1.filter((obj) => obj.role === "QA");
    const teamTwoFilter = teams.team2.filter((obj) => obj.role === "QA");
    return [].concat(teamOneFilter, teamTwoFilter);
};

const teams = {

    team1: [{
            name: "Alice",
            salary: 50000,
            role: "engineer",
            workExperience: 2,
        },
        {
            name: "Bob",
            salary: 75000,
            role: "QA",
            workExperience: 5,
        },
        {
            name: "Charlie",
            salary: 60000,
            role: "developer",
            workExperience: 3,
        },
    ],
    team2: [{
            name: "David",
            salary: 55000,
            role: "engineer",
            workExperience: 3,
        },
        {
            name: "Eve",
            salary: 80000,
            role: "QA",
            workExperience: 4,
        },
        {
            name: "Frank",
            salary: 65000,
            role: "developer",
            workExperience: 2,
        },
    ],
};

const qaEmployees = getQAEmployees(teams);

console.log(qaEmployees);