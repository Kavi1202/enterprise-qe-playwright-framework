export class TestCaseGenerator {

  static generatePrompt(
    requirement: string
  ): string {

    return `
Act as a Senior Quality Engineer.

Generate:

1. Functional Test Cases
2. Negative Test Cases
3. Boundary Test Cases
4. Exploratory Test Ideas

Requirement:

${requirement}

Output in a structured table format.
`;
  }
}