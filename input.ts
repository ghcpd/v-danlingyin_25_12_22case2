export interface FetchOptions {
  timeout?: number;
}

/**
 * Fetch user data from server
 * @param userId string
 * @param options FetchOptions
 */
export async function fetchUser(
  userId: string,
  options?: FetchOptions
): Promise<{ id: string; name: string }> {
  const timeout = options?.timeout ?? 5000;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: "Mock User"
      });
    }, timeout);
  });
}