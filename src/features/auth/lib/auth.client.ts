import { createAuthClient } from 'better-auth/react'; // make sure to import from better-auth/react

export const client = createAuthClient({
  fetchOptions: {
    onError({ error }) {
      throw error;
    },
  },
});
