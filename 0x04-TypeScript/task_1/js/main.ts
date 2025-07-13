
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
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return ;
};

