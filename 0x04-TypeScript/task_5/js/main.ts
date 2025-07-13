// Interface for MajorCredits, including a unique brand property for nominal typing
interface MajorCredits {
  credits: number;
  // Brand property to uniquely identify MajorCredits type
  brand: 'MajorCredits';
}

// Interface for MinorCredits, including a unique brand property for nominal typing
interface MinorCredits {
  credits: number;
  // Brand property to uniquely identify MinorCredits type
  brand: 'MinorCredits';
}

/**
 * Sums the credits of two MajorCredits subjects.
 * This function enforces nominal typing for MajorCredits.
 *
 * @param subject1 - The first subject with MajorCredits.
 * @param subject2 - The second subject with MajorCredits.
 * @returns A new MajorCredits object with the sum of credits.
 */
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  // Calculate the sum of credits
  const totalCredits = subject1.credits + subject2.credits;
  // Return a new MajorCredits object with the summed credits and the brand
  return { credits: totalCredits, brand: 'MajorCredits' };
}

/**
 * Sums the credits of two MinorCredits subjects.
 * This function enforces nominal typing for MinorCredits.
 *
 * @param subject1 - The first subject with MinorCredits.
 * @param subject2 - The second subject with MinorCredits.
 * @returns A new MinorCredits object with the sum of credits.
 */
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  // Calculate the sum of credits
  const totalCredits = subject1.credits + subject2.credits;
  // Return a new MinorCredits object with the summed credits and the brand
  return { credits: totalCredits, brand: 'MinorCredits' };
}

// --- Example Usage (Optional, for testing purposes) ---

// Create example subjects
const majorSubjectA: MajorCredits = { credits: 3, brand: 'MajorCredits' };
const majorSubjectB: MajorCredits = { credits: 4, brand: 'MajorCredits' };

const minorSubjectX: MinorCredits = { credits: 1, brand: 'MinorCredits' };
const minorSubjectY: MinorCredits = { credits: 2, brand: 'MinorCredits' };

// Sum major credits
const totalMajorCredits = sumMajorCredits(majorSubjectA, majorSubjectB);
console.log('Total Major Credits:', totalMajorCredits); // Expected: { credits: 7, brand: 'MajorCredits' }

// Sum minor credits
const totalMinorCredits = sumMinorCredits(minorSubjectX, minorSubjectY);
console.log('Total Minor Credits:', totalMinorCredits); // Expected: { credits: 3, brand: 'MinorCredits' }

// Type checking in action:
// The following line would cause a TypeScript error because MajorCredits and MinorCredits are nominally typed
// const invalidSum: MajorCredits = sumMajorCredits(majorSubjectA, minorSubjectX); // Error: Argument of type 'MinorCredits' is not assignable to parameter of type 'MajorCredits'.
