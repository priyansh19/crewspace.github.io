"use client";

import { motion } from "framer-motion";
import { Code2, Heart, ExternalLink } from "lucide-react";

export default function OpenSource() {
  return (
    <section id="open-source" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-[#2a2a28] bg-[#141413] p-8 md:p-16"
        >
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#cc785c]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#4daa62]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2a2a28] bg-[#0a0a0a] mb-6">
              <Code2 className="w-4 h-4 text-[#faf9f5]" />
              <span className="text-xs font-medium text-[#5c5a54]">
                100% Open Source
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-[#faf9f5] tracking-tight mb-4">
              Built in the{" "}
              <span className="text-gradient">open</span>
            </h2>
            <p className="text-lg text-[#5c5a54] mb-8 leading-relaxed">
              CrewSpace is fully open source under the MIT license. No vendor
              lock-in, no hidden APIs, no cloud dependencies. Fork it, extend it,
              run it entirely on your own infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/priyansh19/CrewSpace"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#faf9f5] text-[#0a0a0a] font-medium hover:bg-white transition-colors duration-200"
              >
                <Code2 className="w-5 h-5" />
                Star on GitHub
              </a>
              <a
                href="https://github.com/priyansh19/CrewSpace/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#2a2a28] text-[#faf9f5] hover:bg-[#1c1c1b] transition-colors duration-200"
              >
                Read the Docs
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 text-sm text-[#5c5a54]">
              <Heart className="w-4 h-4 text-[#cc785c]" />
              <span>
                Made with care by the open source community. Contributions
                welcome.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
