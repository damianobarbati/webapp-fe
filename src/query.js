import { QueryClient, QueryCache } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      // suspense: true,
    },
  },
});

export default queryClient;

export const queryCache = new QueryCache();
