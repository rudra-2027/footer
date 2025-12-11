import {
  Briefcase,
  FolderKanban,
  NotebookPen,
  Mail,
  Target,
  FileText,
  Search,
  Share2,
  BarChart3
} from "lucide-react";

import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-16 px-6 md:px-20 rounded-4">

      {/* Grid Wrapper */}
      <div className="grid md:grid-cols-4 gap-10">

        {/* SECTION 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-[#018790] mb-4">MarketingPro</h2>

          <p className="text-gray-400 leading-6 mb-4">
            Transforming businesses through innovative digital marketing strategies.
            We help brands grow and succeed in the digital age.
          </p>

          <div className="flex space-x-4 mt-4">

            <motion.div
              whileHover={{ scale: 1.15 }}
              className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 cursor-pointer"
            >
              <FaFacebookF className="w-5 h-5 text-white" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.15 }}
              className="p-2 rounded-full bg-black hover:bg-gray-800 cursor-pointer"
            >
              <FaXTwitter className="w-5 h-5 text-white" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.15 }}
              className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 cursor-pointer"
            >
              <FaLinkedinIn className="w-5 h-5 text-white" />
            </motion.div>

          </div>
        </motion.div>

        {/* SECTION 2: SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-[#018790] mb-4">Services</h3>

          <ul className="space-y-3">

            <motion.li
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Target className="w-4 h-4" /> Digital Strategy
            </motion.li>

            <motion.li
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FileText className="w-4 h-4" /> Content Marketing
            </motion.li>

            <motion.li
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Search className="w-4 h-4" /> SEO Optimization
            </motion.li>

            <motion.li
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Share2 className="w-4 h-4" /> Social Media
            </motion.li>

            <motion.li
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <BarChart3 className="w-4 h-4" /> Analytics & Reports
            </motion.li>

          </ul>
        </motion.div>

        {/* SECTION 3: COMPANY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-[#018790] mb-4">Company</h3>

          <ul className="space-y-3">

            <motion.li
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              <CiUser /> About Us
            </motion.li>

            <motion.li
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              <Briefcase className="w-4 h-4" /> Careers
            </motion.li>

            <motion.li
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              <FolderKanban className="w-4 h-4" /> Case Studies
            </motion.li>

            <motion.li
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              <NotebookPen className="w-4 h-4" /> Blog
            </motion.li>

            <motion.li
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="w-4 h-4" /> Contact
            </motion.li>

          </ul>
        </motion.div>

        {/* SECTION 4: STAY UPDATED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-[#018790] mb-4">Stay Updated</h3>

          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter for the latest marketing insights.
          </p>

          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-[#1e293b] text-gray-200 mb-3 focus:outline-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Subscribe
          </motion.button>
        </motion.div>

      </div>

      {/* BOTTOM FOOTER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-500 flex flex-wrap justify-between"
      >
        <p>&copy; 2025 MarketingPro. All rights reserved.</p>

        <div className="flex space-x-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </motion.div>

    </footer>
  );
}
