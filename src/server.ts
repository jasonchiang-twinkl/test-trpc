import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { subjects } from "./db/subjects";
import { publicProcedure, router } from "./trpc";

const appRouter = router({
  getSubjectList: publicProcedure
    .input(
      z.object({
        active: z.boolean().default(false),
      })
    )
    .query(async ({ input: {  active } }) => {
      if (active) {
        return subjects.filter((subject) => subject.active);
      }

      return subjects;
    }),

  getSubject: publicProcedure.input(z.string()).query(async ({ input: subjectId }) => {
    return subjects.find((subject) => subject.id === subjectId);
  }),

  updateSubject: publicProcedure.input(z.object({
    id: z.string()
  })).mutation(async ({ input }) => {

    console.log('Hello', input.id)
    
    return 'Hello World'
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
