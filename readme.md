# User API ✅

## fetchUser

Fetch user data (mock implementation).

**Signature:**

```ts
fetchUser(userId: string, options?: { timeout?: number }): Promise<{ id: string; name: string }>
```

**Description:**
- Asynchronously returns a user object for the provided `userId`.
- This is a *mock implementation* (no network request). It resolves with an object `{ id: userId, name: "Mock User" }` after a delay.
- The delay is controlled by `options.timeout` (milliseconds). If not provided, the default timeout is `5000` ms.

**Parameters:**
- `userId` (string) — Required. The ID of the user to fetch.
- `options` (optional) — An object with optional property:
  - `timeout` (number) — Delay in milliseconds before the promise resolves. Default: `5000`.

**Return:**
- `Promise<{ id: string; name: string }>` — resolves after the configured timeout with the mock user.

**Examples:**

Using `await`:

```ts
const user = await fetchUser("user-123");
console.log(user); // { id: "user-123", name: "Mock User" }
```

Overriding the timeout:

```ts
const user = await fetchUser("user-456", { timeout: 1000 });
console.log(user); // resolves after ~1s with { id: "user-456", name: "Mock User" }
```

Using `.then()`:

```ts
fetchUser("user-123").then(user => console.log(user));
```

**Note:** The function is `async` and returns a `Promise`. Ensure you `await` it or use `.then()` to get the resolved value.
