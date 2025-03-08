

import React from "react";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center text-center bg-gradient-to-b from-gray-900 to-black text-gray-200 p-10 rounded-2xl shadow-lg">     
      <div className="relative bg-white/5 backdrop-blur-lg  rounded-2xl shadow-2xl p-8 text-center w-full max-w-2xl">
        <h1 className="text-4xl font-extrabold text-cyan-400 drop-shadow-lg">
          Hi 👋, I'm Amindu Bhashana
        </h1>

        
         
  <div className="flex flex-wrap justify-center gap-6 p-4">
    <h2 className="text-xl font-bold text-white">
      Software Engineer - Mobile / Web
    </h2>
    <h2 className="text-2xl font-semibold text-gray-300">
      AI and Data Science Enthusiast
    </h2>
  </div>



      </div>

      <p className="mt-4 text-lg max-w-2xl text-gray-300">
        🚀 I specialize in creating impactful mobile applications using  
        <span className="font-semibold text-blue-400"> Flutter </span> and  
        <span className="font-semibold text-green-400"> Kotlin</span>.  
      </p>

      <p className="mt-2 text-lg max-w-3xl text-gray-300">
        🌐 Besides mobile app development, I'm also a  
        <span className="font-semibold text-purple-400"> Data Science </span> and  
        <span className="font-semibold text-yellow-400"> AI </span> enthusiast.  
        I love diving into data, uncovering insights, and building intelligent systems  
        that solve real-world problems.
      </p>

      <p className="mt-4 text-xl font-semibold text-pink-400">
        I’m always excited to explore new tech stacks and build innovative projects! 🚀
      </p>

      <p className="mt-6 text-lg font-semibold text-indigo-400">
        💻 Let's collaborate and create something amazing together! 💡
      </p>
    </div>
  );
}
