"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, Bot, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Features",
    href: "#",
    children: [
      { label: "AI Agents", href: "/agents", desc: "Multi-agent orchestration" },
      { label: "Memory Graph", href: "/memory", desc: "Knowledge extraction & recall" },
      { label: "Budgets", href: "/budgets", desc: "Cost tracking & policies" },
      { label: "Approvals", href: "/approvals", desc: "Human-in-the-loop gates" },
      { label: "Plugins", href: "/plugins", desc: "Extend with custom SDK" },
    ],
  },
  { label: "Open Source", href: "/#open-source" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a28] bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#cc785c] flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-[#faf9f5]">
            CrewSpace
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm text-[#5c5a54] hover:text-[#faf9f5] transition-colors duration-200">
                  {link.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-[#2a2a28] bg-[#141413] shadow-2xl overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 hover:bg-[#1c1c1b] transition-colors border-b border-[#2a2a28] last:border-0"
                        >
                          <div className="text-sm font-medium text-[#faf9f5]">{child.label}</div>
                          <div className="text-xs text-[#5c5a54]">{child.desc}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-[#5c5a54] hover:text-[#faf9f5] transition-colors duration-200"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://github.com/priyansh19/CrewSpace"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-sm font-medium px-4 py-2 rounded-lg bg-[#cc785c] hover:bg-[#b86a50] text-white transition-colors duration-200"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#faf9f5]"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#2a2a28] bg-[#0a0a0a]"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              <Link href="/" onClick={() => setOpen(false)} className="text-sm text-[#5c5a54] hover:text-[#faf9f5] py-2 transition-colors">Home</Link>
              <div className="text-xs font-semibold text-[#3d3d3a] uppercase tracking-wider mt-2">Features</div>
              {navLinks.find(l => l.children)?.children?.map((child) => (
                <Link key={child.href} href={child.href} onClick={() => setOpen(false)} className="text-sm text-[#5c5a54] hover:text-[#faf9f5] py-2 pl-3 transition-colors">
                  {child.label}
                </Link>
              ))}
              <Link href="/#open-source" onClick={() => setOpen(false)} className="text-sm text-[#5c5a54] hover:text-[#faf9f5] py-2 transition-colors">Open Source</Link>
              <a
                href="https://github.com/priyansh19/CrewSpace"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm font-medium px-4 py-2 rounded-lg bg-[#cc785c] text-white text-center"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
