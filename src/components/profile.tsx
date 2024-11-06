"use client";
import { motion } from "framer-motion";

export default function Profile() {

  return (
    <div className="relative h-32 w-full flex justify-center items-center">
      <div className="h-32 w-32 rounded-full border-white border-4  absolute">
        <img src="/assets/sanjay.webp" alt="Sanjay S" className="h-full w-full rounded-full grayscale" />
      </div>
      
      <motion.div className="absolute ml-44" animate={{
        y: [-15, 0, -15],
      }} transition={{
        duration: 7,
        repeat: Infinity,
        repeatDelay: 0,
      }}>
        <div className="rounded-full px-4 py-2 bg-white transform -rotate-12">
          <p className="font-normal text-gray-200 text-xs leading-6">Sanjay S 👋</p>
        </div>
      </motion.div>
    </div>
  );
}
