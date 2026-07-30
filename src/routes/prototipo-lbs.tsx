import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/prototipo-lbs")({
  head: () => ({
    meta: [
      { title: "Protótipo LBS" },
      { name: "description", content: "Protótipo interativo do Figma para LBS." },
      { property: "og:title", content: "Protótipo LBS" },
      { property: "og:description", content: "Protótipo interativo do Figma para LBS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrototipoLBSPage,
});

function PrototipoLBSPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <main className="flex-1 overflow-x-hidden px-4 py-6 sm:px-6 lg:px-8">
        <div className="w-full overflow-hidden rounded-xl">
          <iframe
            className="block w-full max-w-full"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              width: "100%",
              minHeight: "800px",
              borderRadius: "12px",
            }}
            src="https://embed.figma.com/proto/uWj93W2K9z4CtszGEDTFth/LBS-%7C-Cria%C3%A7%C3%A3o?node-id=57-3&page-id=51%3A2&starting-point-node-id=57%3A3&embed-host=share"
            allowFullScreen
            title="Protótipo LBS no Figma"
          />
        </div>
      </main>
    </div>
  );
}
