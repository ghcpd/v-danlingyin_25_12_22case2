The updated documentation in README.md now accurately matches the implementation in input.ts.

Mapping between code behavior and updated documentation:

- **Async Nature and Return Type**: The code defines an async function returning Promise<{ id: string; name: string }>. The documentation specifies the return type and demonstrates async usage with await.

- **Parameters**: The code takes userId (string) and optional options (FetchOptions with timeout). The documentation lists these parameters with descriptions.

- **Mock Implementation**: The code uses setTimeout to simulate a delay and returns mock data. The documentation describes it as a simulation with configurable timeout.

- **Usage Example**: The code requires await to get the resolved value and can accept options. The documentation provides an example using await and passing options.