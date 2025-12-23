# Documentation validation

This document maps the updated documentation statements to the actual code behavior in `input.ts`.

## Key verifications

1) Default timeout
- Code: `const timeout = options?.timeout ?? 5000;` (in `input.ts`) — default is 5000 ms when `options` or `options.timeout` is not provided.
- Doc: README states "Default timeout is 5000 ms when `options` or `options.timeout` is not provided." — MATCH

2) Always-resolves behavior (no rejection)
- Code: `return new Promise((resolve) => { setTimeout(() => { resolve({ id: userId, name: "Mock User" }); }, timeout); });` — the promise executor only calls `resolve` and never calls `reject`.
- Doc: README now states "fetchUser always resolves; it does not reject or throw." — MATCH

3) Return shape and mock data
- Code: resolves to `{ id: userId, name: "Mock User" }`.
- Doc: README documents returned object as `{ id: string; name: string }` and clarifies the `name` is always "Mock User" — MATCH

## Conclusion
All updated documentation statements in `readme.md` accurately describe the behavior implemented in `input.ts`. The principal fix was to remove any implication that the function may reject and to explicitly state the always-resolve behavior.
