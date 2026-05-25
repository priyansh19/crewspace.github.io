"use client";

import { motion } from "framer-motion";
import { Brain, MessageSquare, FileText, Network, Search, Database } from "lucide-react";

const flowSteps = [
  { icon: MessageSquare, title: "Conversation", desc: "User chats with an agent about architecture decisions, task assignments, or strategy.", color: "#cc785c" },
  { icon: Brain, title: "Extraction", desc: "Claude-local CLI parses the conversation and extracts atomic facts as structured YAML.", color: "#9b59b6" },
  { icon: FileText, title: "Storage", desc: "Facts are organized into PARA folders: Projects, Areas, Resources, Archive.", color: "#5b8def" },
  { icon: Network, title: "Graph", desc: "Relationships between facts form a knowledge graph for contextual retrieval.", color: "#4daa62" },
  { icon: Search, title: "Recall", desc: "Future conversations automatically surface relevant past memories for the agent.", color: "#e67e22" },
];

const paraFolders = [
  { name: "Projects", count: 12, examples: ["API v2 refactor", "Onboarding flow", "Auth rewrite"], color: "#cc785c" },
  { name: "Areas", count: 8, examples: ["Security posture", "Performance", "DevOps"], color: "#5b8def" },
  { name: "Resources", count: 24, examples: ["Coding patterns", "API docs", "Decision logs"], color: "#4daa62" },
  { name: "Archive", count: 6, examples: ["v1 migrations", "Deprecated tools"], color: "#5c5a54" },
];

export default function MemoryPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#cc785c]">Knowledge System</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-[#faf9f5] tracking-tight">
              Agents that <span className="text-gradient">remember</span> everything
            </h1>
            <p className="mt-6 text-lg text-[#5c5a54] max-w-2xl mx-auto">
              Every conversation is mined for facts, decisions, and context. Extracted memories
              are stored in a structured knowledge graph — so your agents never start from zero.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flow diagram */}
      <section className="py-20 bg-[#141413]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#faf9f5]">How Memory Extraction Works</h2>
            <p className="mt-4 text-[#5c5a54]">From conversation to contextual recall</p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#cc785c] via-[#9b59b6] via-[#5b8def] via-[#4daa62] to-[#e67e22] opacity-30" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {flowSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 z-10 border-4 border-[#141413]"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#faf9f5] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#5c5a54]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARA visualization */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#faf9f5] mb-6">
                PARA Knowledge <span className="text-gradient">Organization</span>
              </h2>
              <p className="text-[#5c5a54] text-lg leading-relaxed mb-8">
                Inspired by Tiago Forte&apos;s PARA method, extracted memories are organized into
                four top-level folders. This makes retrieval fast and contextually relevant.
              </p>
              <div className="space-y-4">
                {paraFolders.map((f) => (
                  <div key={f.name} className="p-4 rounded-xl bg-[#141413] border border-[#2a2a28]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Database className="w-4 h-4" style={{ color: f.color }} />
                        <span className="font-semibold text-[#faf9f5]">{f.name}</span>
                      </div>
                      <span className="text-sm font-bold" style={{ color: f.color }}>{f.count}</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {f.examples.map((ex) => (
                        <span key={ex} className="text-xs px-2 py-1 rounded-md bg-[#0a0a0a] text-[#5c5a54]">{ex}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="rounded-2xl border border-[#2a2a28] bg-[#141413] p-6">
                <div className="text-xs text-[#5c5a54] mb-4 font-mono">extracted_fact.yaml</div>
                <pre className="text-sm text-[#faf9f5] font-mono overflow-x-auto">
{`fact:
  id: "mem-2026-001"
  type: "architectural_decision"
  confidence: 0.94
  
content: |
  Switched from JWT to session-based auth
  for company-scoped API keys.
  
context:
  project: "Auth Rewrite"
  agent: "Claude"
  date: "2026-05-21"
  
relations:
  - type: "supersedes"
    target: "mem-2025-089"
  - type: "related_to"
    target: "mem-2026-003"`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recall demo */}
      <section className="py-20 bg-[#141413]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold text-[#faf9f5]">Contextual Recall in Action</h2>
            <p className="mt-4 text-[#5c5a54]">When you return to a conversation, relevant memories surface automatically.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#2a2a28] bg-[#0a0a0a] p-6 text-left space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#5c5a54] flex items-center justify-center text-xs font-bold text-white">You</div>
              <div className="bg-[#cc785c]/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[75%]">
                <p className="text-sm text-[#cc785c]">Let&apos;s continue the auth work we discussed last week.</p>
              </div>
            </div>

            {/* Memory recall indicator */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#4daa62]/5 border border-[#4daa62]/20">
              <Brain className="w-5 h-5 text-[#4daa62]" />
              <div className="flex-1">
                <div className="text-xs font-medium text-[#4daa62]">3 memories recalled</div>
                <div className="text-xs text-[#5c5a54]">Switched to session-based auth • PR #234 • 47 tests passing</div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-[#cc785c] flex items-center justify-center text-xs font-bold text-white">C</div>
              <div className="bg-[#1c1c1b] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                <p className="text-sm text-[#faf9f5]">
                  Right — we switched from JWT to session-based auth for company-scoped API keys.
                  PR #234 is merged and all 47 tests pass. The next step is updating the CLI to use
                  the new session flow. Should I create a task for that?
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
