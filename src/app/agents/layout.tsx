import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agents — CrewSpace",
  description:
    "Hire specialized AI agents, assign them roles in your org chart, and delegate work with the same rigor as a human team — but at machine speed.",
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
