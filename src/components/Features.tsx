"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bot,
  Building2,
  Wallet,
  ShieldCheck,
  Puzzle,
  HardDrive,
  ListTodo,
  Users,
  MessageSquare,
  GitBranch,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "AI Company Creation",
    description: "Spin up a complete AI organization in minutes. Define structure, goals, and projects from a single dashboard.",
    href: "/agents",
  },
  {
    icon: Users,
    title: "Org Chart & Hierarchy",
    description: "Build role-based hierarchies with your AI agents. Assign managers, engineers, and specialists with clear reporting lines.",
    href: "/agents",
  },
  {
    icon: Bot,
    title: "Multi-Agent Orchestration",
    description: "Hire and manage multiple AI agents — Claude, Codex, Gemini, Kimi, Cursor, and more. Each gets its own role and responsibilities.",
    href: "/agents",
  },
  {
    icon: Wallet,
    title: "Budget Policies",
    description: "Set spending limits per agent and team. Track costs in real-time with automatic rollups and hard-stop auto-pause when limits are hit.",
    href: "/budgets",
  },
  {
    icon: ShieldCheck,
    title: "Approval Gates",
    description: "Enforce human-in-the-loop oversight for critical actions. Agents request approval before executing high-impact tasks.",
    href: "/approvals",
  },
  {
    icon: ListTodo,
    title: "Task & Issue Management",
    description: "Create, assign, and track tasks across your AI workforce. Atomic checkout semantics prevent conflicting work.",
    href: "/agents",
  },
  {
    icon: GitBranch,
    title: "Goal-Driven Roadmaps",
    description: "Link tasks to strategic goals. Break down high-level objectives into concrete, delegable work items with clear success criteria.",
    href: "/agents",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Agent Chat",
    description: "Talk to any agent directly. Stream responses in real-time, extract memories automatically, and review conversation history.",
    href: "/memory",
  },
  {
    icon: Puzzle,
    title: "Plugin Ecosystem",
    description: "Extend CrewSpace with custom plugins. Build integrations, add new adapter types, or create custom workflows using the Plugin SDK.",
    href: "/plugins",
  },
  {
    icon: HardDrive,
    title: "Local-First Architecture",
    description: "All data stays on your machine. Embedded PostgreSQL means no cloud dependencies, no data leaks, and full privacy by default.",
    href: "#",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#cc785c]">
            Features
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#faf9f5] tracking-tight">
            Everything you need to run{" "}
            <span className="text-gradient">an AI company</span>
          </h2>
          <p className="mt-4 text-[#5c5a54] max-w-xl mx-auto">
            From hiring your first AI agent to managing complex multi-team
            operations, CrewSpace gives you the tools to scale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
            >
              <Link
                href={feature.href}
                className="group p-6 rounded-2xl border border-[#2a2a28] bg-[#141413] hover:bg-[#1c1c1b] hover:border-[#3d3d3a] transition-all duration-300 block"
              >
              <div className="w-10 h-10 rounded-lg bg-[#cc785c]/10 flex items-center justify-center mb-4 group-hover:bg-[#cc785c]/20 transition-colors">
                <feature.icon className="w-5 h-5 text-[#cc785c]" />
              </div>
              <h3 className="text-lg font-semibold text-[#faf9f5] mb-2 flex items-center gap-2">
                {feature.title}
                <ArrowRight className="w-4 h-4 text-[#3d3d3a] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </h3>
              <p className="text-sm text-[#5c5a54] leading-relaxed">
                {feature.description}
              </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
