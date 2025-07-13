
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



