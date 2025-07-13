// Triple slash directive to include dependencies from crud.d.ts
/// <reference path="./crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create an object 'row' with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Create a const variable newRowID with type RowID and assign the value from insertRow
const newRowID: RowID = CRUD.insertRow(row);
console.log(`New Row ID: ${newRowID}`);

// Create a const variable updatedRow with type RowElement and update 'row' with an age field
const updatedRow: RowElement = { ...row, age: 23 };

// Call the updateRow command
CRUD.updateRow(newRowID, updatedRow);

// Call the deleteRow command
CRUD.deleteRow(newRowID);