"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

const gateTypes = [
  {
    name: "Budget Override",
    desc: "Any action that would exceed a team's monthly budget requires explicit human approval.",
    icon: AlertTriangle,
    color: "#e67e22",
  },
  {
    name: "Agent Hiring",
    desc: "Adding a new agent to the company org chart requires approval from the company operator.",
    icon: UserCheck,
    color: "#5b8def",
  },
  {
    name: "Strategy Change",
    desc: "Modifying company goals or strategic direction triggers an approval gate before execution.",
    icon: ShieldCheck,
    color: "#cc785c",
  },
  {
    name: "Sensitive Access",
    desc: "Actions affecting secrets, credentials, or user data require board-level approval.",
    icon: ShieldCheck,
    color: "#c64545",
  },
];

export default function ApprovalsPage() {
  return (
    <main className="pt-16">
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#cc785c]">Governance</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-[#faf9f5] tracking-tight">
              Human-in-the-<span className="text-gradient">loop</span>
            </h1>
            <p className="mt-6 text-lg text-[#5c5a54] max-w-2xl mx-auto">
              Not every decision should be automated. Approval gates put humans back in control
              for high-impact actions — without slowing down routine work.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#141413]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#faf9f5]">Approval Gate Types</h2>
            <p className="mt-4 text-[#5c5a54]">Configure gates for the actions that matter most.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gateTypes.map((g, i) => (
              <motion.div
                key={g.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-[#2a2a28] bg-[#0a0a0a] hover:border-[#3d3d3a] transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${g.color}15` }}>
                    <g.icon className="w-6 h-6" style={{ color: g.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#faf9f5]">{g.name}</h3>
                </div>
                <p className="text-[#5c5a54]">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#faf9f5]">Approval Lifecycle</h2>
            <p className="mt-4 text-[#5c5a54]">From request to resolution</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
            {[
              { step: "1", title: "Agent Requests", desc: "Agent detects a gated action and submits an approval request with full context.", icon: AlertTriangle, color: "#e67e22", state: "pending" },
              { step: "2", title: "Operator Notified", desc: "Board operator receives a notification with the request details and rationale.", icon: Clock, color: "#5b8def", state: "waiting" },
              { step: "3", title: "Decision Made", desc: "Operator approves or rejects with optional feedback. Decision is logged.", icon: UserCheck, color: "#cc785c", state: "action" },
              { step: "4", title: "Action Executed", desc: "If approved, the agent proceeds. If rejected, the agent receives guidance.", icon: CheckCircle2, color: "#4daa62", state: "done" },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 rounded-xl bg-[#141413] border border-[#2a2a28]">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}15` }}>
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#faf9f5]">{item.title}</h3>
                  <p className="text-sm text-[#5c5a54]">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
