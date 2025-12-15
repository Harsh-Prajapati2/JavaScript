// encapsulation

/*
Problem statement
Suppose you are building a personal finance application that helps users track their expenses. 
You want to ensure that the user's financial information is kept private and secure.

Objective:-

Create a class called ExpenseTracker with the following private properties:
expenses (an array of objects, each representing an expense with properties: name, amount, date)
income (a number representing the user's total income)

The class should have the following private methods:
calculateTotalExpenses() - calculate the total expense using the expenses array and returns the total amount. 
You may use reduce, for loop, or forEach loop to calculate the total amount of expenses.
The class should have the following public methods:
addExpense(name, amount, date) - adds a new expense to the expenses array in the form of an object.
calculateBalance - Returns the balance left after subtracting all the expenses from the income.
This method should internally use #calculateTotalExpenses to compute the total expenses.
The balance is calculated as:
balance = income - totalExpenses;
The class should have a constructor that:
Takes the user's income as a parameter.

Initializes the private property income with the provided value.
Initializes the private property expenses as an empty array.

Expected Input:
const tracker = new ExpenseTracker(5000);
tracker.addExpense("Rent", 1000, "2021-10-01");
tracker.addExpense("Groceries", 500, "2021-10-02");
console.log(tracker.calculateBalance()); 

Expected Output:
3500

*/

//complete the ExpenseTracker class.
// Do not alter the starter code
function main() {
    class ExpenseTracker {
      //Create your private properites here
      #expenses = [];
      #income;

      //Create a constructor function
      constructor(salary){
        this.#income = salary;
      }
      //create your private properties to calculate expenses
      #calculateTotalExpenses(save_expense){
            let expense = 0;
            for(let i = 0;i<save_expense.length;i++){
                expense = save_expense[i][1] + expense;
            }
            return expense;
      }

      //Create your public properties here
      addExpense(name,amount,date){
        const array = [name,amount,date];
        this.#expenses.push(array);
      }
      calculateBalance(){
        const totalExpense = this.#calculateTotalExpenses(this.#expenses);
        return this.#income-totalExpense;
      }
    }
    //The class should function accordingly.
    const tracker = new ExpenseTracker(5000);
    tracker.addExpense("Rent", 1000, "2021-10-01");
    tracker.addExpense("Groceries", 500, "2021-10-02");
    console.log(tracker.calculateBalance()); // should output 3500
    return ExpenseTracker;
  }
main()