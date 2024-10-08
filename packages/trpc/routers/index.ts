import { router } from "../init_trpc";
import { todosRouter } from "./todo";
import { userRouter } from "./user";

export const appRouter = router({
    user : userRouter,
    todos : todosRouter
});

export type AppRouter = typeof appRouter;