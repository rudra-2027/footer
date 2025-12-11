import React, { useState, useEffect } from "react";
import {
  Briefcase,
  FolderKanban,
  NotebookPen,
  Mail,
  Target,
  FileText,
  Search,
  Share2,
  BarChart3,
  ArrowUp,
  MailCheck
} from "lucide-react";

import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { motion, useReducedMotion } from "framer-motion";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const listItem = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    if (status === "success") {
      const t = setTimeout(() => setStatus("idle"), 4000);
      return () => clearTimeout(t);
    }
  }, [status]);

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");

    // Demo: fake network call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 900);
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#071020] via-[#07182a] to-[#0b1220] text-gray-200 pt-24 pb-10 px-6 md:px-20 ">

      {/* Top-right + top-left decorative blobs (more punchy) */}
      {/* Symmetrical mirrored blobs (recommended) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12, rotate: 8 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.4 }}
        className="pointer-events-none absolute left-1/4 -translate-x-[30rem] -top-22 w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80
             bg-gradient-to-br from-[#06b6b8] to-[#7c3aed] rounded-full blur-4xl mix-blend-screen"
      />

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12, rotate: -8 }}
        transition={{ duration: shouldReduceMotion ? 0 : 1.4 }}
        className="pointer-events-none absolute right-1/42 translate-x-[6rem] -top-24 w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80
             bg-gradient-to-br from-[#06b6b8] to-[#7c3aed] rounded-full blur-4xl mix-blend-screen"
      />





      {/* Grid Wrapper */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">

        {/* BRAND + SOCIAL */}
        <motion.div
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated SVG mark */}
          <div className="flex items-center gap-3">
            <motion.svg
              width="44"
              height="44"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: 0 }}
              animate={{ rotate: shouldReduceMotion ? 0 : 360 }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
              className="rounded-full p-1 bg-gradient-to-r from-[#2dd4bf] to-[#60a5fa]"
              aria-hidden
            >
              <circle cx="24" cy="24" r="10" fill="white" opacity="0.06" />
              <path d="M12 30c4-6 12-6 16 0" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
            </motion.svg>

            <h2 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#2dd4bf] to-[#60a5fa]">
              MarketingPro
            </h2>
          </div>

          <p className="text-gray-300 leading-6 mt-4 mb-4">
            We craft data-driven campaigns that convert — design, growth and measurable results.
          </p>

          <div className="flex items-center gap-3 mt-2">
            <motion.a whileHover={{ scale: 1.08 }} className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition-colors">
              <FaFacebookF className="w-4 h-4 text-white" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.08 }} className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition-colors">
              <FaXTwitter className="w-4 h-4 text-white" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.08 }} className="p-2 rounded-full bg-white/6 hover:bg-white/10 transition-colors">
              <FaLinkedinIn className="w-4 h-4 text-white" />
            </motion.a>

            {/* tiny orbiting badges for uniqueness */}
            <div className="ml-3 flex items-center gap-1">
              <motion.span
                aria-hidden
                animate={{ x: [0, 6, 0], y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 3.2 }}
                className="w-2 h-2 rounded-full bg-[#60a5fa]"
              />
              <motion.span
                aria-hidden
                animate={{ x: [0, -6, 0], y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 3.6 }}
                className="w-2 h-2 rounded-full bg-[#2dd4bf]"
              />
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            <div>Working hours: Mon - Fri</div>
            <div className="mt-1">Support: <a className="underline decoration-dotted hover:text-white" href="mailto:support@marketingpro.com">support@marketingpro.com</a></div>
          </div>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.04 }}
        >
          <h3 className="text-lg font-semibold text-[#7dd3fc] mb-4">Services</h3>

          <ul className="space-y-3">
            {["Digital Strategy", "Content Marketing", "SEO Optimization", "Social Media", "Analytics & Reports"].map((t, i) => (
              <motion.li
                key={t}
                variants={listItem}
                className="flex items-center gap-3 group cursor-pointer"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <span className="w-8 h-8 rounded-md bg-white/6 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  {i === 0 && <Target className="w-4 h-4" />}
                  {i === 1 && <FileText className="w-4 h-4" />}
                  {i === 2 && <Search className="w-4 h-4" />}
                  {i === 3 && <Share2 className="w-4 h-4" />}
                  {i === 4 && <BarChart3 className="w-4 h-4" />}
                </span>
                <span className="text-gray-200 group-hover:text-white">{t}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* COMPANY */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-[#7dd3fc] mb-4">Company</h3>

          <ul className="space-y-3">
            {[
              { label: "About Us", icon: <CiUser /> },
              { label: "Careers", icon: <Briefcase className="w-4 h-4" /> },
              { label: "Case Studies", icon: <FolderKanban className="w-4 h-4" /> },
              { label: "Blog", icon: <NotebookPen className="w-4 h-4" /> },
              { label: "Contact", icon: <Mail className="w-4 h-4" /> }
            ].map((it) => (
              <motion.li
                key={it.label}
                className="flex items-center gap-3 cursor-pointer group"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.18 }}
              >
                <span className="w-8 h-8 rounded-md bg-white/6 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  {it.icon}
                </span>
                <span className="text-gray-200 group-hover:text-white">{it.label}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* SUBSCRIBE */}
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-[#7dd3fc] mb-3">Stay Updated</h3>

          <p className="text-gray-300 mb-4">Subscribe to our newsletter for marketing insights, case studies and actionable tips.</p>

          <form className="relative" onSubmit={handleSubscribe}>
            <input
              aria-label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email address"
              className="w-full pr-28 py-3 pl-4 rounded-xl bg-white/6 placeholder-gray-300 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#60a5fa]"
            />

            <motion.button
              whileHover={{ scale: shouldReduceMotion ? 1 : 1.03 }}
              whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
              type="submit"
              disabled={status === "sending"}
              className="absolute right-1 top-1 bottom-1 px-4 py-2 rounded-lg bg-gradient-to-r from-[#06b6b8] to-[#2563eb] text-white font-semibold disabled:opacity-60"
            >
              {status === "sending" ? (
                <span className="inline-flex items-center gap-2"><svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" strokeOpacity="0.2" fill="none" /><path d="M22 12a10 10 0 0 0-10-10" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg> Sending</span>
              ) : (
                <><MailCheck className="w-4 h-4 inline-block mr-2" /> Subscribe</>
              )}
            </motion.button>
          </form>

          <div className="mt-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">💡</span>
              <div>
                <strong className="text-gray-100">Free guide:</strong>
                <div className="text-xs">"5 Growth Hacks for Startups" — on sign up</div>
              </div>
            </div>

            {/* accessible live region for subscribe feedback */}
            <div className="mt-3" aria-live="polite">
              {status === "success" && <div className="text-sm text-green-300">Thanks! Check your inbox — we sent the guide.</div>}
              {status === "error" && <div className="text-sm text-rose-300">Something went wrong. Try again.</div>}
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 border-t border-white/6 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between gap-3"
      >
        <div className="flex items-center gap-3">
          <p>&copy; {new Date().getFullYear()} MarketingPro. All rights reserved.</p>
          <div className="hidden md:flex items-center gap-4 text-gray-400 ml-6">
            <a className="hover:text-white">Privacy Policy</a>
            <a className="hover:text-white">Terms of Service</a>
            <a className="hover:text-white">Cookie Policy</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a className="text-xs px-3 py-1 rounded-full bg-white/6">EN</a>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm bg-white/6 px-3 py-1 rounded-lg hover:bg-white/8"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" /> Top
          </button>
        </div>
      </motion.div>

    </footer>
  );
}
