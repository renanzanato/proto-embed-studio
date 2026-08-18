import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/nossa-historia")({
  beforeLoad: () => {
    throw redirect({ to: "/a-lbs/historia" });
  },
});
