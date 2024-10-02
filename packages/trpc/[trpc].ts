import * as trpcNext from '@trpc/server/adapters/next';
import { createContext } from './context';
import { appRouter } from './routers';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
});
