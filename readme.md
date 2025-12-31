# User API

## fetchUser

Fetch user data (mock) after a configurable timeout.

### Function signature

```typescript
async function fetchUser(
  userId: string,
  options?: FetchOptions
): Promise<{ id: string; name: string }>
```

### Parameters

- `userId` (string, required): Unique identifier of the user to fetch.
- `options` (FetchOptions, optional): Configuration options.

### FetchOptions

```typescript
interface FetchOptions {
  timeout?: number; // Delay in milliseconds before returning data (default: 5000)
}
```

- Default timeout is 5000 ms when `options` or `options.timeout` is not provided.

### Behavior

- The function is a simulation — it returns mock data after a delay.
- Important: fetchUser always resolves; it does not reject or throw. It will always return an object of the shape `{ id: string; name: string }` (the `name` is always "Mock User").

### Return value

Resolves to:

```typescript
{ id: string; name: string }
```

### Usage examples

Basic (default 5000 ms):

```typescript
const user = await fetchUser("user123");
console.log(user); // { id: "user123", name: "Mock User" }
```

With custom timeout (2000 ms):

```typescript
const user = await fetchUser("user456", { timeout: 2000 });
console.log(user); // { id: "user456", name: "Mock User" }
```

Promise-style (no rejection expected):

```typescript
fetchUser("user789").then(user => {
  console.log(user);
});
```

Notes on errors / rejection

- The implementation does not simulate network failures or timeouts that reject the promise. Example code that uses `catch` or `try/catch` will never observe a rejection from `fetchUser` based on the current implementation.

### Notes

- The function simulates a server request using a timer; it returns mock data only.
- The returned `name` is always "Mock User".
- The API surface (signature and `FetchOptions`) is unchanged.
