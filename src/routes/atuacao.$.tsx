import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/atuacao/$")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
