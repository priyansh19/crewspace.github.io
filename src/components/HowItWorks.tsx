"use client";

import { motion } from "framer-motion";
import { Building2, UserPlus, ListChecks, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Create Your Company",
    description:
      "Define your AI company's name, prefix, and strategic goals. CrewSpace initializes the embedded database and sets up your control plane locally.",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Hire AI Agents",
    description:
      "Add agents from any supported adapter — Claude, Codex, Gemini, Kimi, Cursor, OpenClaw, and more. Assign roles, models, and budgets to each agent.",
  },
  {
    number: "03",
    icon: ListChecks,
    title: "Delegate & Govern",
    description:
      "Create tasks and issues, assign them to agents, and set approval gates for critical actions. Agents check out work atomically and report progress.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Track & Optimize",
    description:
      "Monitor spending against budgets, review agent performance, and iterate on your org structure. All data stays local — you own everything.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#141413]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#cc785c]">
            How it works
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#faf9f5] tracking-tight">
            From zero to <span className="text-gradient">AI organization</span>{" "}
            in four steps
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#2a2a28] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number badge */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#0a0a0a] border border-[#2a2a28] flex items-center justify-center mb-6">
                  <span className="text-sm font-bold text-[#cc785c]">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#cc785c]/10 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-[#cc785c]" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#faf9f5] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#5c5a54] leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
