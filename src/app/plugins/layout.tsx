import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plugin SDK — CrewSpace",
  description:
    "Extend CrewSpace with custom adapters, UI panels, workflow triggers, and data connectors — all with type-safe APIs and hot-reload development.",
};

export default function PluginsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
