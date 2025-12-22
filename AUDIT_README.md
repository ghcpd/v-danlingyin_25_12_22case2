# Documentation Audit — README Update

## What I reviewed ✅
- Project files in the workspace: `input.ts` (source) and `readme.md` (documentation).
- Focus: correctness of documented API behavior vs implementation.

## Files generated 📁
- `README_backup.md` — unchanged copy of the original README
- `README.md` — updated documentation (accurate, concise)
- `report.json` — audit report with issue classification and fixes
- `doc_validation.md` — mapping of updated docs to code behavior

## How to verify documentation correctness 🔎
1. Inspect `input.ts` and confirm:
   - Signature: `async function fetchUser(userId: string, options?: FetchOptions)`
   - Default timeout: `options?.timeout ?? 5000`
   - Return value: resolves as `{ id: userId, name: "Mock User" }` after `setTimeout`
2. Confirm `README.md` contains:
   - The `async` note and the return type `Promise<{ id: string; name: string }>`
   - `options.timeout` with default `5000` ms
   - Examples using `await` and `.then()` and note that this is a mock implementation

## How to confirm behavior using the code ▶️
You can run a short snippet to confirm the runtime behavior (example uses `ts-node` or compile with `tsc` and run with `node`):

```js
// Example (Node.js + ts-node)
const { fetchUser } = require('./input');
(async () => {
  const user = await fetchUser('user-1');
  console.log(user); // -> { id: 'user-1', name: 'Mock User' } after ~5s
})();
```

Or compile the TypeScript and run similar JS code to observe the awaited result and the delay behavior.

### Runnable verification script
A small verification script `verify.ts` is included. It runs two checks and prints elapsed times:
- Default timeout: should be approximately **5000 ms**
- Overridden timeout: example uses **100 ms**

To run with `ts-node`:

```bash
npx ts-node verify.ts
```

To run after compiling with `tsc`:

```bash
npx tsc verify.ts
node verify.js
```

## Notes
- No source code changes were made — only documentation was updated.
- The audit focused only on the files present in the repository and did not assume any additional features.

---
If you'd like, I can add a tiny unit test or a runnable example script to make verification even simpler. Just say the word.