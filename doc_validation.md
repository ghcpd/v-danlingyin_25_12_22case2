# Documentation validation

This document maps the updated README statements to the actual code behavior in `input.ts` so reviewers can verify accuracy.

1) Statement: "Always resolves — the implementation calls `resolve(...)` after a timeout and never calls `reject`."
   - Code evidence (from `input.ts`):
     - The function returns `new Promise((resolve) => { setTimeout(() => { resolve({ id: userId, name: "Mock User" }); }, timeout); });`
     - Mapping: Promise executor only receives `resolve` and there is no `reject` call path — therefore the function cannot reject.

2) Statement: "Default timeout is 5000 ms when `options?.timeout` is not provided."
   - Code evidence:
     - `const timeout = options?.timeout ?? 5000;`
     - Mapping: uses nullish coalescing to default to 5000 ms when `options.timeout` is `undefined` or `null`.

3) Statement: "Returned object shape is exactly `{ id: string; name: string }` and `name` is always \"Mock User\"."
   - Code evidence:
     - Resolved value: `{ id: userId, name: "Mock User" }`
     - Mapping: `id` comes directly from the `userId` parameter; `name` is a constant string.

4) Statement: "This is a mock helper — does not perform network I/O and is intended for testing/demos."
   - Code evidence:
     - Implementation uses `setTimeout` and returns static data; there are no network APIs (no `fetch`, `XMLHttpRequest`, sockets, etc.).
     - Mapping: behavior is deterministic and local.

Validation summary
- The updated README explicitly documents the exact runtime behavior that can be observed in `input.ts` (default timeout, resolved value, no rejection paths).  All changed/added statements are directly supported by single-line code evidence in `input.ts`.