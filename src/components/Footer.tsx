"use client";

import { Code2, MessageCircle } from "lucide-react";

const links = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "GitHub", href: "https://github.com/priyansh19/CrewSpace" },
  ],
  Resources: [
    { label: "Documentation", href: "https://github.com/priyansh19/CrewSpace/blob/main/README.md" },
    { label: "Contributing", href: "https://github.com/priyansh19/CrewSpace/blob/main/AGENTS.md" },
    { label: "Changelog", href: "https://github.com/priyansh19/CrewSpace/releases" },
  ],
  Community: [
    { label: "GitHub Discussions", href: "https://github.com/priyansh19/CrewSpace/discussions" },
    { label: "Issues", href: "https://github.com/priyansh19/CrewSpace/issues" },
    { label: "Twitter / X", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a28] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#cc785c] flex items-center justify-center">
                <img src="/crewspace.github.io/logos/crewspace.svg" alt="CrewSpace" className="w-5 h-5" style={{ filter: "brightness(0) invert(1)" }} />
              </div>
              <span className="text-lg font-semibold text-[#faf9f5]">
                CrewSpace
              </span>
            </a>
            <p className="text-sm text-[#5c5a54] leading-relaxed mb-6">
              The control plane for autonomous AI-agent companies. Local-first.
              Open source.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/priyansh19/CrewSpace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5c5a54] hover:text-[#faf9f5] transition-colors"
                aria-label="GitHub"
              >
                <Code2 className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#5c5a54] hover:text-[#faf9f5] transition-colors"
                aria-label="Community"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-[#faf9f5] mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-[#5c5a54] hover:text-[#faf9f5] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#2a2a28] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5c5a54]">
            &copy; {new Date().getFullYear()} CrewSpace. MIT License.
          </p>
          <p className="text-xs text-[#5c5a54]">
            Built by the open source community.
          </p>
        </div>
      </div>
    </footer>
  );
}
