import { motion } from "framer-motion";
import Image from "next/image";
import avatar from "./pawan.jpg"; // Replace with your avatar image
import Link from "next/link";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

export default function PawanPereraPage() {
  return (
    <div className="min-h-screen bg-transparent py-12 px-4 sm:px-6 lg:px-8 dark:bg-transparent">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Avatar */}
        <motion.div variants={scaleUp} className="mb-8 flex justify-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src={avatar}
              alt="Pawan Perera"
              fill={true}
              className="rounded-full"
              priority={true}
            />
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Pawan Perera
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg text-black dark:text-gray-300"
        >
          Computer Science Undergraduate | Specializing in Artificial
          Intelligence
        </motion.p>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Experienced in developing scalable and efficient backends using
          Python, along with dynamic frontends using NextJS and React. Strong
          knowledge of machine learning, large language models, and AI-driven
          solutions.
        </motion.p>
      </motion.div>

      {/* Profile Summary */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mt-16 max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Profile Summary
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-gray-600 dark:text-gray-400"
        >
          Computer Science undergraduate at the University of Kelaniya,
          specializing in Artificial Intelligence. Winner of{" "}
          <strong>IntelliHack 4.0 (Champion)</strong> and{" "}
          <strong>Genesis '24 (Runner-up)</strong>. Experienced in AI-driven
          applications, full-stack development, and production-grade solutions.
        </motion.p>
      </motion.div>

      {/* Core Competencies */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mt-16 max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Core Competencies
        </motion.h2>

        <motion.div
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Frontend & Backend
            </h3>
            <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
              <li>React, NextJS, Redux</li>
              <li>Fast API, Flask</li>
              <li>Node.js, Express</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              AI & ML
            </h3>
            <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Python, Langchain, Crewai</li>
              <li>AI, ML, LLM & MLOps</li>
              <li>Pinecone, Faiss, ChromaDB</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              DevOps & Cloud
            </h3>
            <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Git, Docker, GitHub Actions</li>
              <li>GCP, Azure, AWS</li>
              <li>Firebase, MongoDB, Supabase</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Other Skills
            </h3>
            <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Java, C++</li>
              <li>MySQL, PostgreSQL</li>
              <li>Domain Management</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Work Experience */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mt-16 max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Work Experience
        </motion.h2>

        <motion.div variants={stagger} className="space-y-6">
          {/* Freelance Full Stack Developer */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Freelance Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-400">2023 – Present</p>
            <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <strong>Sathsara Enterprises:</strong> Developed a wholesale
                pharmaceutical distribution website using Next.js and
                TailwindCSS. Integrated API management and Redux for optimized
                data flow. Deployed on Google Cloud Run.
              </li>
              <li>
                <strong>Rocket Pharma:</strong> Designed and launched a web
                solution for pharmaceutical order processing using Next.js,
                TailwindCSS, and Redux. Deployed on Google Cloud Run.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Projects */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mt-16 max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Projects
        </motion.h2>

        <motion.div variants={stagger} className="space-y-6">
          {/* Personal Website and AI Assistant */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              <Link href="https://www.pawanperera.com" target="_blank">
                Personal Website and AI Assistant
              </Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Created a portfolio website with an AI-powered chatbot using{" "}
              <strong>Next.js</strong>, <strong>TailwindCSS</strong>, and{" "}
              <strong>OpenAI API</strong>. Deployed via CI/CD to{" "}
              <strong>GCP</strong>.
            </p>
          </motion.div>

          {/* ViewMo AI Learning Platform */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              <Link
                href="https://github.com/PinsaraPerera/intellihack_backend"
                target="_blank"
              >
                ViewMo AI Learning Platform
              </Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Developed the backend for an AI-powered platform that won{" "}
              <strong>IntelliHack 4.0</strong>. Utilized <strong>GCP</strong>{" "}
              and <strong>Cloud PostgreSQL</strong>.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mt-16 max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Education
        </motion.h2>

        <motion.div variants={fadeInUp}>
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            BSc. In Computer Science (Hons)
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            University of Kelaniya, Sri Lanka | 2022 - Present
          </p>
        </motion.div>
      </motion.div>

      {/* Certificates */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mt-16 max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Certificates
        </motion.h2>

        <motion.div variants={stagger} className="space-y-4">
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Diploma in Cybersecurity and Ethical Hacking
            </h3>
            <p className="text-gray-600 dark:text-gray-400">SITC Campus</p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Machine Learning Specialization
            </h3>
            <p className="text-gray-600 dark:text-gray-400">DeepLearning.AI</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mt-16 max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Achievements
        </motion.h2>

        <motion.div variants={stagger} className="space-y-4">
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              IntelliHack 4.0 – Champions
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              University of Colombo, School of Computing | 2024
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Genesiz’24 – 1st Runners-Up
            </h3>
            <p className="text-gray-600 dark:text-gray-400">KDU | 2024</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              IEEEXtreme 17.0 1<sup>st</sup> in University Rankings
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              1<sup>st</sup> in UOK
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              IEEEXtreme 18.0 1<sup>st</sup> in University Rankings
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              13<sup>th</sup> Nationally | 255<sup>th</sup> Globally
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Volunteering Experience */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="mt-16 max-w-4xl mx-auto"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Volunteering Experience
        </motion.h2>

        <motion.div variants={stagger} className="space-y-4">
          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Vice Chairperson
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              IEEE Computer Society of University of Kelaniya | Aug 2024 -
              Present
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              Education and Training Manager
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              FOSS Community of University of Kelaniya | Jan 2024 - Present
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
