import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Budget Policies — CrewSpace",
  description:
    "Set spending limits per agent and team. Track costs in real-time with automatic rollups and hard-stop auto-pause when limits are hit.",
};

export default function BudgetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
