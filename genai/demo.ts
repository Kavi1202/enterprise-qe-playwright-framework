import { TestCaseGenerator }
from './testCaseGenerator';

const requirement = `
User should be able to login
using username and password.
`;

console.log(
  TestCaseGenerator.generatePrompt(
    requirement
  )
);