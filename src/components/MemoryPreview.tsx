"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, MessageSquare, FileText, Network, ArrowRight } from "lucide-react";

const steps = [
  { icon: MessageSquare, label: "Chat", desc: "Agent conversation", color: "#cc785c" },
  { icon: Brain, label: "Extract", desc: "Memory extraction", color: "#9b59b6" },
  { icon: FileText, label: "Store", desc: "YAML facts in PARA", color: "#5b8def" },
  { icon: Network, label: "Recall", desc: "Contextual retrieval", color: "#4daa62" },
];

export default function MemoryPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#cc785c]">
              Memory & Knowledge
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-[#faf9f5] tracking-tight mb-6">
              Agents that <span className="text-gradient">remember</span>
            </h2>
            <p className="text-[#5c5a54] text-lg leading-relaxed mb-8">
              Every conversation is automatically mined for facts, decisions, and
              context. Extracted memories are stored as structured YAML in a PARA
              knowledge graph — so your agents never forget what they learned.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {steps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-[#faf9f5]">{step.label}</span>
                    <span className="text-sm text-[#5c5a54] ml-2">— {step.desc}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#2a2a28] hidden sm:block ml-auto" />
                  )}
                </div>
              ))}
            </div>

            <Link
              href="/memory"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#cc785c] hover:text-[#e8a48a] transition-colors"
            >
              Explore the Memory Graph
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right: Visual diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-[#2a2a28] bg-[#141413] p-6 overflow-hidden">
              {/* Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#cc785c]/5 rounded-full blur-[80px]" />

              {/* Chat bubble mockup */}
              <div className="relative space-y-3 mb-6">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#cc785c] flex items-center justify-center text-xs font-bold text-white">C</div>
                  <div className="bg-[#1c1c1b] rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm text-[#faf9f5]">I&apos;ve analyzed the codebase. The auth module needs a refactor to support company-scoped API keys.</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-[#cc785c]/10 rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm text-[#cc785c]">Go ahead and create a task for it. Assign to the backend agent.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#5c5a54] flex items-center justify-center text-xs font-bold text-white">You</div>
                </div>
              </div>

              {/* Extraction indicator */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0a0a0a] border border-[#2a2a28] mb-4">
                <Brain className="w-5 h-5 text-[#9b59b6]" />
                <div className="flex-1">
                  <div className="text-xs font-medium text-[#faf9f5]">Memory extraction running...</div>
                  <div className="text-xs text-[#5c5a54]">3 facts extracted from this conversation</div>
                </div>
                <span className="text-xs text-[#4daa62] font-medium">Done</span>
              </div>

              {/* Knowledge graph preview */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { folder: "Projects", count: 12, color: "#cc785c" },
                  { folder: "Areas", count: 8, color: "#5b8def" },
                  { folder: "Resources", count: 24, color: "#4daa62" },
                  { folder: "Archive", count: 6, color: "#5c5a54" },
                ].map((item) => (
                  <div key={item.folder} className="p-3 rounded-lg bg-[#0a0a0a] border border-[#2a2a28]">
                    <div className="text-xs text-[#5c5a54] mb-1">{item.folder}</div>
                    <div className="text-lg font-semibold" style={{ color: item.color }}>{item.count}</div>
                    <div className="text-xs text-[#3d3d3a]">facts</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
