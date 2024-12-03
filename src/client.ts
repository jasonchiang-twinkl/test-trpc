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

  const res = await trpc.updateSubject.mutate({ id: "1" });

  console.log(res);

  const activeSubjectList = await trpc.getSubjectList.query({ active: true });
  const subjectList = await trpc.getSubjectList.query({});
  const subject = await trpc.getSubject.query("1");

  console.log("Active Subject List", activeSubjectList);
  console.log("Subject List", subjectList);
  console.log("Subject", subject);
};

main();
