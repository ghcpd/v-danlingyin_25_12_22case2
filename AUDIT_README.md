Audit summary — README.md (documentation vs implementation)

What was reviewed
- Files: `readme.md` (documentation) and `input.ts` (implementation).
- Focus: whether the README accurately describes `fetchUser` behavior.

What I changed / produced
- `README.md` — updated to accurately reflect current implementation (examples, behavior notes).
- `README_backup.md` — untouched copy of the original documentation.
- `report.json` — structured audit report with issues and severities.
- `doc_validation.md` — explicit mapping between code and updated documentation.

How to verify the documentation is correct (quick):
1. Inspect the implementation in `input.ts`:
   - Confirm the promise executor only calls `resolve(...)` and that the resolved object is `{ id: userId, name: "Mock User" }`.
   - Confirm default timeout uses `options?.timeout ?? 5000`.
2. Run a simple verification in a TypeScript-capable environment (example):

   Example snippet (execute in a file or REPL that supports top-level `await`):

   const u = await fetchUser('alice', { timeout: 10 });
   console.log(u); // expected: { id: 'alice', name: 'Mock User' }

   - Expectation: the promise resolves after ~10 ms and returns the object above. No rejection should occur.

Files generated
- `README_backup.md` — original README (unchanged)
- `README.md` — updated, authoritative documentation
- `report.json` — audit findings
- `doc_validation.md` — mapping + proof

How to confirm behavior using the code
- Import `fetchUser` from `input.ts` and call it (either via top-level `await` or inside an `async` function). Verify the resolved value and that no error is thrown.

Notes
- No code changes were made; this audit only updates documentation to match the existing implementation.
- If you need simulated error paths for tests, implement or wrap `fetchUser` accordingly (not done here).