
interface Teacher {
  readonly firstName: string; 
  readonly lastName: string;  
  fullTimeEmployee: boolean; 
  yearsOfExperience?: number; 
  location: string;          
  [key: string]: any;        
                            
                             
                             
}


const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',



  
  contract: false, 
};


console.log(teacher3);


const teacher4: Teacher = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'New York',
};

console.log(teacher4);



interface Directors extends Teacher {
  numberOfReports: number; // Directors must have a numberOfReports attribute
}

// Example usage of the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, // Specific to Directors interface
};

// Log the director1 object to the console
console.log(director1);
// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
// interface Director extends Teacher
// const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
//   return ;
// };

// Interface for the constructor of StudentClass
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface for the StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implementation of the StudentClass
class Student implements StudentClass {
  private _firstName: string;
  private _lastName: string;

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  workOnHomework(): string {
    return Currently working;
  }

  displayName(): string {
    return this._firstName;
  }
}





interface PrintTeacherArgs {
  firstName: string;
  lastName: string;
}


interface printTeacherFunction {
  ({ firstName, lastName }: PrintTeacherArgs): string;
}


function printTeacher({ firstName, lastName }: PrintTeacherArgs): string {
  const firstInitial = firstName.charAt(0).toUpperCase();
  return `${firstName.charAt(0).toUpperCase()}. ${lastName}`;
}

// Example usage (optional, for testing)
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); 
console.log(printTeacher({ firstName: "Sarah", lastName: "Smith" })); 

// ["return `${firstName}. ${lastName}`"]











// task_1/js/main.ts doesn't contain: ["class StudentClass {"]
// Interface describing the constructor for StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the structure of a StudentClass instance
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements StudentClassInterface {
  // Use private properties to store the names
  private firstName: string;
  private lastName: string;

  /**
   * Initializes a new student.
   * @param firstName - The student's first name.
   * @param lastName - The student's last name.
   */
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Returns a string indicating the student is working.
   * @returns The string "Currently working".
   */
  workOnHomework(): string {
    return 'Currently working';
  }

  /**
   * Returns the student's first name.
   * @returns The student's first name.
   */
  displayName(): string {
    return this.firstName;
  }
}

// Example of how to use the interfaces (optional, for verification)

// The 'StudentClass' class itself matches the StudentClassConstructor interface
const StudentClassCtor: StudentClassConstructor = StudentClass;

// Create an instance using the constructor type
const student: StudentClassInterface = new StudentClassCtor('Guillaume', 'Salva');

// Using the methods from the interface
console.log(student.displayName());
console.log(student.workOnHomework());