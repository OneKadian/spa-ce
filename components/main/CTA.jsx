"use client";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";

import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

const textContent = {
  welcomeText: "Launch Your SaaS",
  mainText: "You are 100% launching a product, today!",
  subtitleText:
    "Don't let procrastination stop you, Launch your product fast, without starting from scratch.",
  providingText: {
    part1: "Just ",
    part2: "It",
    highlighted: "ship ",
  },

  description: "Create Your SaaS Now",
  videoSrc: "/videos/skills-bg.webm",
};

export const CTA = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            {textContent.welcomeText}
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
        >
          {textContent.mainText}
        </motion.div>
      </div>

      <div
        className="flex flex-col text-center justifty-center 
      gap-6 mt-6 text-6xl text-bold text-white max-w-[480px] w-auto h-auto lg:max-w-[600px]"
      >
        <span>
          {textContent.providingText.part1}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {textContent.providingText.highlighted}
          </span>
          {textContent.providingText.part2}
        </span>
        <p className="text-lg text-gray-400 my-5 max-w-[600px]">
          {textContent.description}
        </p>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src={textContent.videoSrc} type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
