"use client";

import { motion } from "framer-motion";
import { Plug, Box, Zap, Layers, CheckCircle2 } from "lucide-react";

const pluginTypes = [
  {
    name: "Custom Adapters",
    desc: "Add support for new AI models or endpoints. Define the spawn logic, auth flow, and response parser.",
    icon: Plug,
    color: "#cc785c",
  },
  {
    name: "UI Extensions",
    desc: "Inject new panels, widgets, and routes into the CrewSpace board. React components with full API access.",
    icon: Layers,
    color: "#5b8def",
  },
  {
    name: "Workflow Triggers",
    desc: "Hook into lifecycle events — task created, agent hired, budget threshold hit — and run custom logic.",
    icon: Zap,
    color: "#4daa62",
  },
  {
    name: "Data Connectors",
    desc: "Sync with external tools. Pull issues from Jira, push alerts to Slack, or write to your own database.",
    icon: Box,
    color: "#9b59b6",
  },
];

const sdkFeatures = [
  "TypeScript-first API with full type safety",
  "Hot-reload during development",
  "Isolated sandbox for plugin execution",
  "Built-in manifest validation",
  "Auto-discovery from plugin registry",
];

export default function PluginsPage() {
  return (
    <main className="pt-16">
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#cc785c]">Extensibility</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-[#faf9f5] tracking-tight">
              Build beyond the <span className="text-gradient">core</span>
            </h1>
            <p className="mt-6 text-lg text-[#5c5a54] max-w-2xl mx-auto">
              The Plugin SDK lets you extend CrewSpace with custom adapters, UI panels, workflow triggers,
              and data connectors — all with type-safe APIs and hot-reload development.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#141413]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#faf9f5]">Plugin Types</h2>
            <p className="mt-4 text-[#5c5a54]">Four ways to extend CrewSpace.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pluginTypes.map((p, i) => (
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#faf9f5] mb-6">
                Plugin <span className="text-gradient">SDK</span>
              </h2>
              <p className="text-[#5c5a54] text-lg leading-relaxed mb-8">
                A first-class developer experience for building plugins. TypeScript definitions,
                hot-reload, and sandboxed execution come out of the box.
              </p>
              <ul className="space-y-3">
                {sdkFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#4daa62] flex-shrink-0" />
                    <span className="text-sm text-[#faf9f5]">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl border border-[#2a2a28] bg-[#141413] p-6 font-mono text-sm overflow-x-auto">
                <div className="text-xs text-[#5c5a54] mb-4">my-plugin/index.ts</div>
                <pre className="text-[#faf9f5]">
{`import { definePlugin } from "@crewspaceai/plugin-sdk";

export default definePlugin({
  name: "slack-alerts",
  version: "1.0.0",

  hooks: {
    "task:created": async ({ task, api }) => {
      await api.http.post("https://hooks.slack.com/...", {
        text: \`New task: \${task.title}\`,
      });
    },

    "budget:threshold": async ({ agent, spent }) => {
      await api.notify({
        level: "warning",
        message: \`\${agent.name} at 80% budget\`,
      });
    },
  },
});`}
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}


