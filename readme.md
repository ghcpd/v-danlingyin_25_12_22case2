# User API

Lightweight mock implementation of a user fetch used for testing and demos.

## Overview — key points
- `fetchUser` is a synchronous-API-style async helper that always resolves with mock data; it does not perform network I/O and does not reject.
- Default delay: 5000 ms. The delay is configurable via the optional `timeout` option.
- Intended for testing/demo only — the returned `name` is always the string "Mock User".

## Function signature

```typescript
export async function fetchUser(
  userId: string,
  options?: FetchOptions
): Promise<{ id: string; name: string }>
```

(implemented in `input.ts`)

## Behavior (accurate and authoritative)
- Always resolves — the implementation calls `resolve(...)` after a timeout and never calls `reject`.
- Default timeout is 5000 ms when `options?.timeout` is not provided.
- Returned object shape is exactly `{ id: string; name: string }` and `name` is always "Mock User".

## Parameters
- `userId` (string, required): identifier to be returned in the resolved object.
- `options` (optional): `FetchOptions` — currently only supports `timeout?: number` (milliseconds).

## Return value
Promise that resolves to `{ id: string; name: string }`.

## Examples
Notes: examples below assume an environment that supports top-level `await` (modern Node or an async wrapper). The function as implemented will not reject; `try/catch` or `.catch()` are unnecessary for error handling but are safe to include if you want defensive code.

Basic usage (default 5000 ms delay):

```typescript
const user = await fetchUser("user123");
console.log(user); // { id: 'user123', name: 'Mock User' }
```

With custom timeout:

```typescript
const user = await fetchUser("user456", { timeout: 2000 });
console.log(user); // resolves after ≈2000 ms
```

Promise-style (no rejection will occur with the current implementation):

```typescript
fetchUser('user789').then(u => console.log(u));
```

## Implementation notes (why the behavior matters)
- This is a mock helper (see `input.ts`) intended for deterministic testing of UI/timeouts and does not model network failures.
- If your integration requires error paths (network errors, non-2xx, timeouts that abort), wrap this function or replace it with a real network implementation.

## API reference — FetchOptions
```typescript
interface FetchOptions {
  timeout?: number; // milliseconds; default: 5000
}
```

## Quick verification (expected behavior)
- Calling `fetchUser('x')` always resolves to `{ id: 'x', name: 'Mock User' }` after the configured delay.
- The function does not throw or reject in the current implementation.

## Notes
- Intended for demos/tests only. Do not rely on this for production network behavior.
