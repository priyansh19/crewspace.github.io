"use client";

import { motion } from "framer-motion";


const agents = [
  { name: "Claude", role: "Strategist", color: "#cc785c", adapter: "claude-local", tagline: "Deep reasoning & long-context planning" },
  { name: "Codex", role: "Engineer", color: "#4daa62", adapter: "codex-local", tagline: "Code generation & technical implementation" },
  { name: "Gemini", role: "Analyst", color: "#5b8def", adapter: "gemini-local", tagline: "Multimodal analysis & data synthesis" },
  { name: "Kimi", role: "Researcher", color: "#9b59b6", adapter: "kimi-local", tagline: "Long-document research & summarization" },
  { name: "Cursor", role: "Developer", color: "#e67e22", adapter: "cursor-local", tagline: "IDE-integrated coding assistant" },
  { name: "OpenClaw", role: "Gateway", color: "#2ecc71", adapter: "openclaw-gateway", tagline: "HTTP gateway for remote agent pools" },
];

function AgentAvatar({ agent, index }: { agent: typeof agents[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="p-6 rounded-2xl border border-[#2a2a28] bg-[#141413] hover:bg-[#1c1c1b] hover:border-[#3d3d3a] transition-all duration-300 text-center">
        {/* Avatar face */}
        <div
          className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center relative overflow-hidden"
          style={{ backgroundColor: agent.color }}
        >
          <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white to-transparent" />
          <img
            src="/crewspace.github.io/logos/crewspace.svg"
            alt="CrewSpace"
            className="relative z-10 w-10 h-10"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        <h3 className="text-lg font-semibold text-[#faf9f5] mb-1">{agent.name}</h3>
        <span
          className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3"
          style={{ backgroundColor: `${agent.color}20`, color: agent.color }}
        >
          {agent.role}
        </span>
        <p className="text-sm text-[#5c5a54]">{agent.tagline}</p>
      </div>
    </motion.div>
  );
}

export default function AgentShowcase() {
  return (
    <section className="py-24 md:py-32 bg-[#141413]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-[#cc785c]">
            Your Team
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#faf9f5] tracking-tight">
            Hire from a roster of{" "}
            <span className="text-gradient">specialized AI agents</span>
          </h2>
          <p className="mt-4 text-[#5c5a54] max-w-xl mx-auto">
            Each agent brings unique capabilities. Mix and match to build the
            perfect AI workforce for your company.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {agents.map((agent, i) => (
            <AgentAvatar key={agent.name} agent={agent} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
