# User API

## fetchUser

Simulates fetching user data with a configurable timeout (mock implementation).

### Parameters

- `userId`: string - The ID of the user to fetch.
- `options`: FetchOptions (optional) - Options for the fetch.
  - `timeout`: number (optional, default 5000) - Timeout in milliseconds.

### Returns

Promise<{ id: string; name: string }> - A promise that resolves to the user data.

### Usage

```ts
const user = await fetchUser("123", { timeout: 3000 });
console.log(user.name); // Mock User
