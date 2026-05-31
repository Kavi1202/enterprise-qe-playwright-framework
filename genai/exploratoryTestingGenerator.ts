export class ExploratoryTestingGenerator {

  static generateCharter(
    feature: string
  ): string {

    return `
Generate exploratory testing ideas
for the following feature:

${feature}

Include:

- Risk Areas
- Edge Cases
- Failure Scenarios
- Usability Concerns
- Performance Concerns
`;
  }
}