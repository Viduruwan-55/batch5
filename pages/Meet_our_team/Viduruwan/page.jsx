import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [isClient, setIsClient] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="px-6 py-8">
      <motion.h1
        className="text-4xl font-bold text-start text-[#00FF9C]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        👋 Hi, I'm Y.P. Viduruwan!
      </motion.h1>

      {isClient && (
        <>
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            I'm a Computer Science student at the University of Kelaniya with a
            deep passion for for Security Technologies and Innovation. I enjoy
            exploring new advancements and developing solutions that enhance
            security, scalability, and efficiency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
          >
            {/* Educational Qualifications Section */}
            <div className="w-full lgl:w-1/2">
              <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                <h2 className="mt-8 text-2xl font-semibold text-[#00FF9C]">
                  🎓 Education
                </h2>
              </div>
              <div className="space-y-4 p-4 border border-gray-400 dark:border-gray-200  rounded-lg shadow-lg">
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-xl font-semibold text-gray-500 dark:text-gray-300"
                >
                  BSc (Hons) in Computer Science (Specializing in Cyber
                  Security)
                </motion.p>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="text-lg text-gray-600 dark:text-gray-400"
                >
                  University of Kelaniya
                </motion.p>
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="text-md text-gray-600 dark:text-gray-400"
                >
                  2022 - Present
                </motion.p>
              </div>

              {/* <div className="mt-6 lgl:mt-14 w-full h-[230px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10"></div> */}
            </div>
          </motion.div>
          <div className="w-full border-t-2 border-gray-800 my-6" />
          <div className="mt-8 w-full">
            <p className="text-2xl text-[#00FF9C] font-semibold text-start">
              🛠 Skills & Technologies
            </p>

            <motion.div
              className="flex space-x-6 justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1, // Delay between each child animation
                  },
                },
              }}
            >
              <div>
                <div className="gap-4 flex flex-wrap justify-center">
                  <div className="bg-gray-900/90 dark:bg-gray-900/30 mt-6 backdrop-blur-md rounded-lg p-4 inline-block max-w-max mx-auto">
                    <motion.img
                      src="https://techstack-generator.vercel.app/python-icon.svg"
                      className="h-8 w-8 hover:scale-110 transition-transform duration-300"
                      alt="Java"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    />
                  </div>
                  <div className="bg-gray-900/90 dark:bg-gray-900/30 mt-6 backdrop-blur-md rounded-lg p-4 inline-block max-w-max mx-auto">
                    <motion.img
                      src="https://techstack-generator.vercel.app/js-icon.svg"
                      className="h-8 w-8 hover:scale-110 transition-transform duration-300"
                      alt="Java"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    />
                  </div>
                  <div className="bg-gray-900/90 dark:bg-gray-900/30 mt-6 backdrop-blur-md rounded-lg p-4 inline-block max-w-max mx-auto">
                    <motion.img
                      src="https://techstack-generator.vercel.app/csharp-icon.svg"
                      className="h-8 w-8 hover:scale-110 transition-transform duration-300"
                      alt="Java"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    />
                  </div>
                  <div className="bg-gray-900/90 dark:bg-gray-900/30 mt-6 backdrop-blur-md rounded-lg p-4 inline-block max-w-max mx-auto">
                    <motion.img
                      src="https://techstack-generator.vercel.app/ts-icon.svg"
                      className="h-8 w-8 hover:scale-110 transition-transform duration-300"
                      alt="Java"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    />
                  </div>
                  <div className="bg-gray-900/90 dark:bg-gray-900/30 mt-6 backdrop-blur-md rounded-lg p-4 inline-block max-w-max mx-auto">
                    <motion.img
                      src="https://techstack-generator.vercel.app/react-icon.svg"
                      className="h-8 w-8 hover:scale-110 transition-transform duration-300"
                      alt="Java"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    />
                  </div>
                  <div className="bg-gray-900/90 dark:bg-gray-900/30 mt-6 backdrop-blur-md rounded-lg p-4 inline-block max-w-max mx-auto">
                    <motion.img
                      src="https://techstack-generator.vercel.app/mysql-icon.svg"
                      className="h-8 w-8 hover:scale-110 transition-transform duration-300"
                      alt="Java"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    />
                  </div>
                </div>
                <div className="gap-4 flex flex-wrap justify-center">
                  <div className="bg-gray-900/90 dark:bg-gray-900/30 mt-6 backdrop-blur-md rounded-lg p-4 inline-block max-w-max mx-auto">
                    <motion.img
                      src="https://techstack-generator.vercel.app/java-icon.svg"
                      className="h-8 w-8 hover:scale-110 transition-transform duration-300"
                      alt="Java"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    />
                  </div>
                  <div className="bg-gray-900/90 dark:bg-gray-900/30 mt-6 backdrop-blur-md rounded-lg p-4 inline-block max-w-max mx-auto">
                    <motion.img
                      src="https://techstack-generator.vercel.app/nginx-icon.svg"
                      className="h-8 w-8 hover:scale-110 transition-transform duration-300"
                      alt="Java"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    />
                  </div>
                  <div className="bg-gray-900/90 dark:bg-gray-900/30 mt-6 backdrop-blur-md rounded-lg p-4 inline-block max-w-max mx-auto">
                    <motion.img
                      src="https://techstack-generator.vercel.app/github-icon.svg"
                      className="h-8 w-8 hover:scale-110 transition-transform duration-300"
                      alt="Java"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    />
                  </div>
                  <div className="bg-gray-900/90 dark:bg-gray-900/30 mt-6 backdrop-blur-md rounded-lg p-4 inline-block max-w-max mx-auto">
                    <motion.img
                      src="https://techstack-generator.vercel.app/docker-icon.svg"
                      className="h-8 w-8 hover:scale-110 transition-transform duration-300"
                      alt="Java"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    />
                  </div>
                  <div className="bg-gray-900/90 dark:bg-gray-900/30 mt-6 backdrop-blur-md rounded-lg p-4 inline-block max-w-max mx-auto">
                    <motion.img
                      src="https://techstack-generator.vercel.app/restapi-icon.svg"
                      className="h-8 w-8 hover:scale-110 transition-transform duration-300"
                      alt="Java"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    />
                  </div>
                  <div className="bg-gray-900/90 dark:bg-gray-900/30 mt-6 backdrop-blur-md rounded-lg p-4 inline-block max-w-max mx-auto">
                    <motion.img
                      src="https://techstack-generator.vercel.app/aws-icon.svg"
                      className="h-8 w-8 hover:scale-110 transition-transform duration-300"
                      alt="Java"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <h3 className="text-xl font-bold text-[#15F5BA]">
                  Programming Languages
                </h3>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Python, JavaScript</li>
                  <li>Java, C, C#, Dart</li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <h3 className="text-xl font-bold text-[#15F5BA]">
                  Web Development
                </h3>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>HTML, CSS, JavaScript</li>
                  <li>React, Node.js, Express.js</li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <h3 className="text-xl font-bold text-[#15F5BA]">
                  Operating Systems
                </h3>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Linux (Kali, RedHat, Ubuntu)</li>
                  <li>Windows Server</li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <h3 className="text-xl font-bold text-[#15F5BA]">
                  DevOps & Cloud
                </h3>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Git, Docker, GitHub Actions</li>
                  <li>Azure, AWS, Kubernetes</li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <h3 className="text-xl font-bold text-[#15F5BA]">
                  Security Tools
                </h3>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Nmap, Wireshark </li>
                  <li>Metasploit, Burp Suite</li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
              >
                <h3 className="text-xl font-bold text-[#15F5BA]">
                  Networking & Scripting
                </h3>
                <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Cisco Packet Tracer, VPNs</li>
                  <li>Bash, PowerShell</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}
