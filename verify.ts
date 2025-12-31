import { fetchUser } from './input';

async function runVerification() {
  console.log('Verification: fetchUser behavior (measuring elapsed time in ms)');

  console.log('\nTest 1 — default timeout (expected ~5000 ms):');
  let t0 = Date.now();
  const user1 = await fetchUser('user-default');
  console.log('Elapsed:', Date.now() - t0, 'ms —', user1);

  console.log('\nTest 2 — overridden timeout (100 ms):');
  t0 = Date.now();
  const user2 = await fetchUser('user-quick', { timeout: 100 });
  console.log('Elapsed:', Date.now() - t0, 'ms —', user2);

  console.log('\nDone verification.');
}

runVerification().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});