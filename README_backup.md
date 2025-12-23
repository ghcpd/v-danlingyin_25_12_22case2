# User API

## fetchUser

Fetch user data from the server. This function returns mock user data after a configurable timeout period.

### Function Signature

```typescript
async function fetchUser(
  userId: string,
  options?: FetchOptions
): Promise<{ id: string; name: string }>
```

### Parameters

- **userId** (string, required): The unique identifier of the user to fetch
- **options** (FetchOptions, optional): Configuration options for the request

### Return Value

Returns a Promise that resolves to an object with the following structure:

```typescript
{
  id: string;      // The user ID provided as input
  name: string;    // The user's name (currently returns "Mock User")
}
```

### Options Parameter

The optional `FetchOptions` interface supports:

```typescript
interface FetchOptions {
  timeout?: number;  // Timeout in milliseconds (default: 5000ms)
}
```

- **timeout** (number, optional): The delay before returning user data, in milliseconds. Default timeout is 5000ms (5 seconds) if no options are provided.

### Usage Examples

#### Basic Usage (Default 5000ms Timeout)

```typescript
const user = await fetchUser("user123");
console.log(user);
// Output: { id: "user123", name: "Mock User" }
```

#### With Custom Timeout

```typescript
// Fetch with 2 second timeout
const user = await fetchUser("user456", { timeout: 2000 });
console.log(user);
// Output: { id: "user456", name: "Mock User" }
```

#### Using Promise .then() Syntax

```typescript
fetchUser("user789")
  .then(user => {
    console.log("User data:", user);
  })
  .catch(error => {
    console.error("Failed to fetch user:", error);
  });
```

#### With Error Handling

```typescript
try {
  const user = await fetchUser("user999", { timeout: 1000 });
  console.log("User:", user.name);
} catch (error) {
  console.error("Error fetching user:", error);
}
```

### Notes

- The function simulates a server request with a timeout-based delay
- All requests return mock data (not actual server data)
- The returned user `name` is always "Mock User" regardless of the userId
- The timeout parameter allows testing of different response times