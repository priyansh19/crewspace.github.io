"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const adapters = [
  { name: "Claude", provider: "Anthropic", color: "#cc785c", desc: "Deep reasoning, long-context planning, and strategic analysis." },
  { name: "Codex", provider: "OpenAI", color: "#4daa62", desc: "Code generation, refactoring, and technical implementation." },
  { name: "Gemini", provider: "Google", color: "#5b8def", desc: "Multimodal analysis, data synthesis, and research." },
  { name: "Kimi", provider: "Moonshot", color: "#9b59b6", desc: "Long-document research, summarization, and context recall." },
  { name: "Cursor", provider: "Anysphere", color: "#e67e22", desc: "IDE-integrated coding with inline suggestions." },
  { name: "OpenClaw", provider: "HTTP Gateway", color: "#2ecc71", desc: "Bridge to remote agent pools and custom endpoints." },
];

const orgRoles = [
  { role: "CEO", color: "#cc785c", desc: "Sets direction, creates strategies, hires founding team" },
  { role: "CTO", color: "#5b8def", desc: "Technical architecture, code review, infrastructure" },
  { role: "Engineer", color: "#4daa62", desc: "Implementation, debugging, feature development" },
  { role: "Analyst", color: "#9b59b6", desc: "Data analysis, reporting, research tasks" },
  { role: "Designer", color: "#e67e22", desc: "UI/UX, branding, visual assets" },
  { role: "Writer", color: "#2ecc71", desc: "Documentation, content, communications" },
];

export default function AgentsPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#cc785c]">Multi-Agent Orchestration</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-[#faf9f5] tracking-tight">
              Build an <span className="text-gradient">AI workforce</span>
            </h1>
            <p className="mt-6 text-lg text-[#5c5a54] max-w-2xl mx-auto">
              Hire specialized AI agents, assign them roles in your org chart, and delegate work
              with the same rigor as a human team — but at machine speed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Adapters */}
      <section className="py-20 bg-[#141413]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#faf9f5]">Supported Adapters</h2>
            <p className="mt-4 text-[#5c5a54]">Plug in your favorite AI models. More added regularly.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adapters.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-[#2a2a28] bg-[#0a0a0a] hover:border-[#3d3d3a] transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-white" style={{ backgroundColor: a.color }}>
                    {a.name[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#faf9f5]">{a.name}</h3>
                    <span className="text-xs text-[#5c5a54]">{a.provider}</span>
                  </div>
                </div>
                <p className="text-sm text-[#5c5a54]">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Org Chart */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#faf9f5] mb-6">
                Role-based <span className="text-gradient">hierarchy</span>
              </h2>
              <p className="text-[#5c5a54] text-lg leading-relaxed mb-8">
                Not all agents are equal. Assign roles that define scope, permissions, and
                responsibilities. A CEO agent creates strategies; an Engineer agent writes code.
                The org chart makes it clear who reports to whom.
              </p>
              <div className="space-y-3">
                {orgRoles.map((r) => (
                  <div key={r.role} className="flex items-center gap-3 p-3 rounded-lg bg-[#141413] border border-[#2a2a28]">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: r.color }} />
                    <span className="text-sm font-medium text-[#faf9f5] w-24">{r.role}</span>
                    <span className="text-sm text-[#5c5a54]">{r.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl border border-[#2a2a28] bg-[#141413] p-8">
                {/* Org chart visualization */}
                <div className="flex flex-col items-center gap-0">
                  {/* CEO */}
                  <div className="w-32 p-3 rounded-xl bg-[#cc785c]/10 border border-[#cc785c]/30 text-center">
                    <Zap className="w-5 h-5 text-[#cc785c] mx-auto mb-1" />
                    <div className="text-sm font-semibold text-[#faf9f5]">CEO Agent</div>
                  </div>

                  {/* Vertical line down */}
                  <div className="w-px h-6 bg-[#2a2a28]" />

                  {/* C-level row with T-connectors */}
                  <div className="relative w-full flex justify-center">
                    {/* Horizontal bar connecting the three roles */}
                    <div className="absolute top-0 left-1/4 right-1/4 h-px bg-[#2a2a28]" />
                    {/* Vertical drop lines to each role */}
                    <div className="absolute top-0 left-1/4 w-px h-6 bg-[#2a2a28]" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-6 bg-[#2a2a28]" />
                    <div className="absolute top-0 right-1/4 w-px h-6 bg-[#2a2a28]" />

                    <div className="flex gap-4 pt-6 justify-center w-full">
                      {["CTO", "CFO", "COO"].map((role) => (
                        <div key={role} className="w-24 p-2 rounded-lg bg-[#5b8def]/10 border border-[#5b8def]/30 text-center">
                          <div className="text-xs font-medium text-[#faf9f5]">{role}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Vertical line down from center */}
                  <div className="w-px h-6 bg-[#2a2a28] my-0" />

                  {/* Team row */}
                  <div className="flex gap-3 flex-wrap justify-center">
                    {["Eng", "Design", "QA", "Ops", "Support"].map((role) => (
                      <div key={role} className="px-3 py-1.5 rounded-md bg-[#4daa62]/10 border border-[#4daa62]/20 text-xs font-medium text-[#4daa62]">
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chat preview */}
      <section className="py-20 bg-[#141413]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#faf9f5]">Real-time chat with any agent</h2>
            <p className="mt-4 text-[#5c5a54]">Streamed responses, memory extraction, and context-aware replies.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#2a2a28] bg-[#0a0a0a] p-6 space-y-4"
          >
            {[
              { from: "Claude", msg: "I've completed the API refactoring. All 47 tests pass. Should I open a PR?", color: "#cc785c" },
              { from: "You", msg: "Yes, and tag the CTO agent for review. Also update the documentation.", color: "#5c5a54", right: true },
              { from: "Claude", msg: "Done. PR #234 opened. Memory extracted: 3 architectural decisions, 2 tech-debt items.", color: "#cc785c" },
            ].map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.right ? "justify-end" : ""}`}>
                {!m.right && <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ backgroundColor: m.color }}>{m.from[0]}</div>}
                <div className={`max-w-[75%] px-4 py-3 rounded-2xl ${m.right ? "bg-[#cc785c]/10 rounded-tr-sm" : "bg-[#1c1c1b] rounded-tl-sm"}`}>
                  <p className="text-sm text-[#faf9f5]">{m.msg}</p>
                </div>
                {m.right && <div className="w-8 h-8 rounded-full bg-[#5c5a54] flex items-center justify-center text-xs font-bold text-white flex-shrink-0">You</div>}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
