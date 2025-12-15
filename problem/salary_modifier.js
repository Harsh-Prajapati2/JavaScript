/** Problem statement
Suppose you have a list of employees in a company, and each employee is represented as an object with the following properties:


"id" - a unique identifier for the employee
"name" - the employee's name
"department" - the department the employee works in
"salary" - the employee's current salary


Objectives:

You want to make a modification to the list of employees to reflect a recent company-wide salary increase. 
You have been provided with the following information:
1. Salaries for employees in the "sales" department should be increased by 10%.
2. Salaries for employees in the "engineering" department should be increased by 15%.
3. Salaries for employees in all other departments should be increased by 5%.
4. You need to write a function "increaseSalaries" that takes an array of employee objects and 
returns a new array of employee objects where each employee's salary has been updated based on their department. 
The original array of employees should be left unchanged.
5. The salary should be converted to one decimal place using toFixed().
6. Use the map function to iterate over every object in the array.
 */

// List of employees with their current salaries
const employees = [
    { id: 1, name: "Alice", department: "sales", salary: 40000 },
    { id: 2, name: "Bob", department: "engineering", salary: 50000 },
    { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
    { id: 4, name: "David", department: "sales", salary: 35000 },
    { id: 5, name: "Emily", department: "engineering", salary: 55000 },
  ];
  
  // Function to increase salaries based on the department
  function increaseSalaries(employees) {
    return employees.map(employee => {
        let updatedSalary;

        if (employee.department === "sales") {
            updatedSalary = employee.salary * 1.10;
        } else if (employee.department === "engineering") {
            updatedSalary = employee.salary * 1.15;
        } else {
            updatedSalary = employee.salary * 1.05;
        }

        return {
            id: employee.id,
            name: employee.name,
            department: employee.department,
            salary: Number(updatedSalary.toFixed(1)) // Convert to one decimal place and ensure it's a number
        };
    });
}

  
  // You can call the function and log the result to check if the implementation is correct
  console.log(increaseSalaries(employees));
  