"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Building2, Shield, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,249,245,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250,249,245,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#cc785c]/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2a2a28] bg-[#141413] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#4daa62] animate-pulse" />
          <span className="text-xs font-medium text-[#5c5a54]">
            Open Source — Local First
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-[#faf9f5] mb-6 leading-[1.1]"
        >
          Build{" "}
          <span className="text-gradient">AI Companies</span>
          <br />
          Not Just Chatbots
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#5c5a54] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          CrewSpace is the control plane for autonomous AI-agent companies.
          Hire agents, set budgets, enforce approvals, and delegate work —
          all from a single desktop app that keeps your data local.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://github.com/priyansh19/CrewSpace"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-[#cc785c] hover:bg-[#b86a50] text-white font-medium transition-all duration-200"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="px-6 py-3 rounded-xl border border-[#2a2a28] text-[#faf9f5] hover:bg-[#141413] font-medium transition-all duration-200"
          >
            Explore Features
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { icon: Bot, label: "AI Agents", value: "Multi-Agent" },
            { icon: Building2, label: "Companies", value: "Unlimited" },
            { icon: Shield, label: "Data", value: "Local-First" },
            { icon: Zap, label: "Setup", value: "One Click" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <stat.icon className="w-5 h-5 text-[#cc785c]" />
              <span className="text-sm font-semibold text-[#faf9f5]">
                {stat.value}
              </span>
              <span className="text-xs text-[#5c5a54]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
