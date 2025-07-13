/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

namespace Subjects {
  // Create and export constants for Cpp, Java, React Subjects
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  // Create and export one Teacher object cTeacher with experienceTeachingC = 10
  // Note: The Teacher interface is extended via declaration merging in Cpp.ts, Java.ts, and React.ts.
  // When creating cTeacher, we can include properties from any of these merged declarations.
  export const cTeacher: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    experienceTeachingC: 10, // This property is specifically for Cpp
    // experienceTeachingJava and experienceTeachingReact are optional and not set here
  };

  // --- Cpp Subject ---
  console.log('C++');
  // Set cTeacher as the teacher for the Cpp subject
  cpp.setTeacher(cTeacher);
  // Call and print the requirements for Cpp
  console.log(cpp.getRequirements());
  // Call and print the available teacher for Cpp
  console.log(cpp.getAvailableTeacher());
  console.log(''); // Add a blank line for better readability between subjects

  // --- Java Subject ---
  console.log('Java');
  // Set cTeacher as the teacher for the Java subject
  java.setTeacher(cTeacher);
  // Call and print the requirements for Java
  console.log(java.getRequirements());
  // Call and print the available teacher for Java
  // Since cTeacher only has experienceTeachingC, it should return "No available teacher" for Java
  console.log(java.getAvailableTeacher());
  console.log(''); // Add a blank line for better readability between subjects

  // --- React Subject ---
  console.log('React');
  // Set cTeacher as the teacher for the React subject
  react.setTeacher(cTeacher);
  // Call and print the requirements for React
  console.log(react.getRequirements());
  // Call and print the available teacher for React
  // Since cTeacher only has experienceTeachingC, it should return "No available teacher" for React
  console.log(react.getAvailableTeacher());
}
