"use client";
import { motion } from "framer-motion";

export default function Profile() {

  return (
    <div className="relative h-36 w-full flex justify-center items-center">
      <div className="h-36 w-36 rounded-full border-white absolute">
        <img src="/assets/sanjay.png" alt="Sanjay S" className="h-full w-full rounded-full grayscale" />
      </div>
      
      <motion.div className="absolute ml-40" animate={{
        y: [20, -10, 20],
      }} transition={{
        duration: 8,
        repeat: Infinity,
        repeatDelay: 0,
      }}>
        <div className="rounded-full px-4 py-2 bg-white transform -rotate-12">
          <p className="font-normal text-xs leading-5 ">Sanjay S 👋</p>
        </div>
      </motion.div>
    </div>
  );
}
