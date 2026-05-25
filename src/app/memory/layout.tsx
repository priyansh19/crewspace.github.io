import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Memory Graph — CrewSpace",
  description:
    "Every conversation is mined for facts, decisions, and context. Extracted memories are stored in a structured knowledge graph.",
};

export default function MemoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
