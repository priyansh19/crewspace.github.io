"use client";

import { motion } from "framer-motion";
import { AlertTriangle, PauseCircle, DollarSign, BarChart3 } from "lucide-react";

const policies = [
  { name: "Hard Stop", desc: "Automatically pause an agent when its budget is exceeded. No exceptions.", icon: PauseCircle, color: "#c64545" },
  { name: "Soft Warning", desc: "Notify when approaching 80% of budget. Agent continues with escalation.", icon: AlertTriangle, color: "#e67e22" },
  { name: "Per-Task Cap", desc: "Set maximum cost per individual task. Prevents runaway API calls.", icon: DollarSign, color: "#5b8def" },
  { name: "Team Rollup", desc: "Aggregate spending across teams. Real-time dashboards with drill-down.", icon: BarChart3, color: "#4daa62" },
];

export default function BudgetsPage() {
  return (
    <main className="pt-16">
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#cc785c]">Cost Control</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-[#faf9f5] tracking-tight">
              Budgets with <span className="text-gradient">teeth</span>
            </h1>
            <p className="mt-6 text-lg text-[#5c5a54] max-w-2xl mx-auto">
              Set spending limits per agent, per team, and per company. When a limit is hit,
              CrewSpace enforces the policy automatically — no surprises, no overspend.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#141413]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#faf9f5]">Policy Types</h2>
            <p className="mt-4 text-[#5c5a54]">Mix and match to match your risk tolerance.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policies.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-[#2a2a28] bg-[#0a0a0a] hover:border-[#3d3d3a] transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${p.color}15` }}>
                    <p.icon className="w-6 h-6" style={{ color: p.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#faf9f5]">{p.name}</h3>
                </div>
                <p className="text-[#5c5a54]">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#faf9f5]">Live Dashboard</h2>
            <p className="mt-4 text-[#5c5a54]">Track every dollar in real time.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-[#2a2a28] bg-[#141413] p-6">
            {/* Summary cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { label: "Total Spent", value: "$1,247.50", change: "+12%", color: "#cc785c" },
                { label: "Remaining Budget", value: "$8,752.50", change: "87.5%", color: "#4daa62" },
                { label: "Active Agents", value: "6", change: "2 paused", color: "#5b8def" },
              ].map((s) => (
                <div key={s.label} className="p-4 rounded-xl bg-[#0a0a0a] border border-[#2a2a28]">
                  <div className="text-xs text-[#5c5a54] mb-1">{s.label}</div>
                  <div className="text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs text-[#3d3d3a]">{s.change}</div>
                </div>
              ))}
            </div>

            {/* Agent budget bars */}
            <div className="space-y-3">
              {[
                { name: "Claude (CEO)", spent: 450, limit: 500, color: "#cc785c" },
                { name: "Codex (Engineer)", spent: 380, limit: 400, color: "#4daa62" },
                { name: "Gemini (Analyst)", spent: 290, limit: 350, color: "#5b8def" },
                { name: "Kimi (Researcher)", spent: 127, limit: 300, color: "#9b59b6" },
                { name: "Cursor (Dev)", spent: 0.5, limit: 200, color: "#e67e22", paused: true },
              ].map((a) => (
                <div key={a.name} className="p-3 rounded-lg bg-[#0a0a0a]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#faf9f5]">{a.name}</span>
                    <span className="text-xs text-[#5c5a54]">${a.spent} / ${a.limit}</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#2a2a28] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${Math.min((a.spent / a.limit) * 100, 100)}%`, backgroundColor: a.paused ? "#c64545" : a.color }}
                    />
                  </div>
                  {a.paused && <div className="mt-1 text-xs text-[#c64545] font-medium">Paused — budget exceeded</div>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
