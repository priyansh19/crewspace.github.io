import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approval Gates — CrewSpace",
  description:
    "Enforce human-in-the-loop oversight for critical actions. Agents request approval before executing high-impact tasks.",
};

export default function ApprovalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
