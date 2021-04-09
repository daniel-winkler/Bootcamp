/* APARTADO 1 */

function Employee(position, performance, salary) {
    this.position = position;
    this.performance = performance;
    this.salary = salary ;
};

let team = [];

function buildTeam () {
    for (let i = 1 ; i <= 100 ; i++) {
        let newPosition = `Empleado ${i}`;
        let newPerformance = Math.floor(Math.random() * 100) / 100;
        let newSalary = Math.floor(Math.random() * (4000 - 1250) + 1250);
        team.push(new Employee(newPosition, newPerformance, newSalary))
    };
};

buildTeam();
console.log(team);

//otra forma mas sencilla

let employees = [];

for (let i = 1 ; i <= 100 ; i++) {
    employees.push({
        cargo: `Empleado ${i}`,
        rendimiento: Number(Math.random().toFixed(2)),
        salario: Math.floor(Math.random() * (4000 - 1250) + 1250)
    });
};

console.log(employees);

/* APARTADO 2 */

team.sort(function (employee1, employee2) { //usamos una funcion anónima aunque no es necesario, por flecha es más sencillo
    return employee1.performance - employee2.performance;
});

console.log(team);

/* APARTADO 3*/

team.sort((employee1, employee2) => employee1.salary - employee2.salary);

team.reverse()

console.log(team);

/* APARTADO 4 */

function sortPosition (employee1, employee2) {
    // return Number(employee1.position.replace("Empleado ", "")) - Number(employee2.position.replace("Empleado ", ""))
    // return  employee1.position.slice(9) - employee2.position.slice(9);
    return Number(employee1.position.split(" ")[1] - employee2.position.split (" ")[1])
}

team.sort(sortPosition)

console.log(team);

/* APARTADO 5 */

let filteredTeam = [];

filteredTeam = team.filter(employee => employee.salary > 2500)

filteredTeam.forEach(employee => {
    console.log(`El ${employee.position} tiene un salario de ${employee.salary}`);
})


/* APARTADO 6*/

let newSalaryTeam = [];

newSalaryTeam = team.map(employee => {
    if (employee.salary < 1500) {
        employee.salary = employee.salary * 1.25
    };
    return employee;
});

console.log(team);
console.log(newSalaryTeam);


/* APARTADO 7 */

let totalCost = team.reduce((sum, currentSalary) => sum + currentSalary.salary * 1.15, 0)

console.log("Total cost: ", totalCost);
console.log(team.reduce((sum, currentSalary) => sum + currentSalary.salary, ""));

/* APARTADO 8 */

//Subapartado 1

team = team.filter(employee => employee.performance >= 0.3);

console.log(team);

//Subapartado 2

let averageSalary = team.reduce((sum, currentSalary) => sum + currentSalary.salary, 0) / team.length;

console.log("Average salary: ", averageSalary);

//Subapartado 3

let getRaise = team.map(employee => {
    if (employee.performance > 0.7) {
        employee.salary *= 1.15;
    }
    return employee;
});

// team.forEach(employee => {
//     if (employee.performance > 0.7) {
//         employee.salary *= 1.15;
//     }
// });

console.log(getRaise);


