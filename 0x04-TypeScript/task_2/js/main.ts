// DirectorInterface defines the methods expected for a Director.
interface DirectorInterface {
  /**
   * Returns a string indicating the director is working from home.
   */
  workFromHome(): string;

  /**
   * Returns a string indicating the director is taking a coffee break.
   */
  getCoffeeBreak(): string;

  /**
   * Returns a string indicating the director is performing director tasks.
   */
  workDirectorTasks(): string;
}

// TeacherInterface defines the methods expected for a Teacher.
interface TeacherInterface {
  /**
   * Returns a string indicating the teacher's work-from-home status.
   */
  workFromHome(): string;

  /**
   * Returns a string indicating the teacher's coffee break status.
   */
  getCoffeeBreak(): string;

  /**
   * Returns a string indicating the teacher is performing teacher tasks.
   */
  workTeacherTasks(): string;
}

// Director class implements the DirectorInterface.
class Director implements DirectorInterface {
  /**
   * Implements the workFromHome method for Director.
   * @returns {string} - "Working from home"
   */
  workFromHome(): string {
    return 'Working from home';
  }

  /**
   * Implements the getCoffeeBreak method for Director.
   * Note: The prompt specified 'getToWork' but the interface is 'getCoffeeBreak'.
   * Assuming 'getCoffeeBreak' should return "Getting a coffee break".
   * @returns {string} - "Getting a coffee break"
   */
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  /**
   * Implements the workDirectorTasks method for Director.
   * @returns {string} - "Getting to director tasks"
   */
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implements the TeacherInterface.
class Teacher implements TeacherInterface {
  /**
   * Implements the workFromHome method for Teacher.
   * @returns {string} - "Cannot work from home"
   */
  workFromHome(): string {
    return 'Cannot work from home';
  }

  /**
   * Implements the getCoffeeBreak method for Teacher.
   * @returns {string} - "Cannot have a break"
   */
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  /**
   * Implements the workTeacherTasks method for Teacher.
   * @returns {string} - "Getting to work"
   */
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

/**
 * Creates an employee instance (Director or Teacher) based on the salary.
 * @param {number | string} salary - The salary of the employee.
 * @returns {Director | Teacher} - A new Director or Teacher instance.
 */
function createEmployee(salary: number | string): Director | Teacher {
  // Check if salary is a number and less than 500
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  // Otherwise, return a Director instance
  return new Director();
}

// Expected results from the prompt:
console.log(createEmployee(200)); // Expected: Teacher
console.log(createEmployee(1000)); // Expected: Director
console.log(createEmployee('$500')); // Expected: Director

// Example usage of the methods for verification
const teacher = createEmployee(200);
console.log("Teacher's workFromHome:", teacher.workFromHome());
console.log("Teacher's getCoffeeBreak:", teacher.getCoffeeBreak());
console.log("Teacher's workTeacherTasks:", teacher.workTeacherTasks());

const director = createEmployee(1000);
console.log("Director's workFromHome:", director.workFromHome());
console.log("Director's getCoffeeBreak:", director.getCoffeeBreak());
console.log("Director's workDirectorTasks:", director.workDirectorTasks());

const directorFromStringSalary = createEmployee('$500');
console.log("Director (from string salary) workFromHome:", directorFromStringSalary.workFromHome());


/**
 * Type predicate to check if an employee is a Director.
 * @param {Director | Teacher} employee - The employee instance to check.
 * @returns {employee is Director} - True if the employee is a Director, false otherwise.
 */
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

/**
 * Executes the appropriate work task based on the employee's type.
 * @param {Director | Teacher} employee - The employee instance.
 * @returns {string} - The result of the work task.
 */
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// New expected results for isDirector and executeWork
console.log("--- New Function Tests ---");
console.log(executeWork(createEmployee(200))); // Expected: Getting to work
console.log(executeWork(createEmployee(1000))); // Expected: Getting to director tasks



// Define a String literal type for Subjects.
type Subjects = 'Math' | 'History';

/**
 * Teaches a class based on the provided subject.
 * @param {Subjects} todayClass - The subject to teach (either 'Math' or 'History').
 * @returns {string} - A string indicating which class is being taught.
 */
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
  // This part is technically unreachable due to the `Subjects` type,
  // but a default or error handling could be added for robustness
  // if `todayClass` were of a broader type.
  return 'Unknown subject';
}

// New expected results for Subjects and teachClass
console.log("--- Subjects and teachClass Tests ---");
console.log(teachClass('Math'));    // Expected: Teaching Math
console.log(teachClass('History')); // Expected: Teaching History


