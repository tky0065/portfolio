"use client";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-8" />
        <h1 className="Welcome-text text-[18px]">Pensez mieux avec Enok Dev</h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        Créer des applications avec des technologies modernes
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className=" text-[15px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Ne manquez jamais une tâche, une date limite ou une idée
      </motion.div>
    </div>
  );
};

export default SkillText;
