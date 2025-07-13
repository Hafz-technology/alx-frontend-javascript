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
