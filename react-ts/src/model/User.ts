export type User = {
  //  Todo: Add properties with appropriate types: firstName, lastName, dateOfBirth, weight, height, diagnoses
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  weight: string;
  height: string;
  diagnoses: string[];
};

// Use this key for storing user in browser localStorage
export const userLocalStorageKey = "user";
