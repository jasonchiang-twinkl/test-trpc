import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "./server";

const main = async () => {
  const trpc = createTRPCClient<AppRouter>({
    links: [
      httpBatchLink({
        url: "http://localhost:3000",
      }),
    ],
  });

  const res =  await trpc.updateSubject.mutate({id:'1'})

  console.log(res)

};

main();
