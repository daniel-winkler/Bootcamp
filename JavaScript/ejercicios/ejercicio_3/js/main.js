/* APARTADO 1 */

function Employee(position, performance, salary) {
    this.position = position;
    this.performance = performance;
    this.salary = salary ;
};

const team = [];

function buildTeam () {
    for (let i = 1 ; i <= 100 ; i++) {
        let newPosition = `Empleado ${i}`;
        let newPerformance = Math.floor(Math.random() * 100)/100;
        let newSalary = Math.floor(Math.random() * (4000 - 1250) + 1250);
        team.push(new Employee(newPosition, newPerformance, newSalary))
    };
};

buildTeam();
console.log(team);

/* APARTADO 2 */

team.sort((employee1, employee2) => employee1.performance - employee2.performance);

console.log(team);

/* APARTADO 3*/

team.sort((employee1, employee2) => employee1.salary - employee2.salary);

console.log(team);

/* APARTADO 4 */

function findPosition () {
    team.forEach(item => item.position)
}

console.log(team[0].position.charAt(9));

/* APARTADO 5 */

let team5 = [];

team5 = team.filter(employee => employee.salary > 2500)

console.log(team5.map(employee => employee.position));
console.log(team5.map(employee => employee.salary));

/* APARTADO 6*/

let team6 = [];

team6 = team.filter(employee => employee.salary < 1500);
console.log(team6);
team6 = team6.map(employee => employee.salary * 1.25)
console.log(team6);

/* APARTADO 7 */

console.log(team.reduce((sum, currentSalary) => sum + currentSalary.salary, 0))
console.log(team.reduce((sum, currentSalary) => sum + currentSalary.salary * 1.15, 0))