import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/solucoes/")({
  beforeLoad: () => {
    throw redirect({ to: "/servicos", statusCode: 301 });
  },
});
