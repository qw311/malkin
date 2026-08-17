import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import mem1 from "@/assets/memory-1.jpg";
import mem2 from "@/assets/memory-2.jpg";
import mem3 from "@/assets/memory-3.jpg";
import mem4 from "@/assets/memory-4.jpg";
import mem5 from "@/assets/memory-5.jpg";
import mem6 from "@/assets/memory-6.jpg";

interface Polaroid {
  src: string;
  caption: string;
  rotate: number;
}

const memories: Polaroid[] = [
  { src: mem1, caption: "The one where i first saw ur photo, hehe", rotate: -4 },
  { src: mem2, caption: "The one in which u drew on my hand", rotate: 3 },
  { src: mem3, caption: "The one where u put clips on my hair :)", rotate: -2 },
  { src: mem4, caption: "The one whereafter u didn't change a bit.", rotate: 5 },
  { src: mem5, caption: "The one where u looked the cutest", rotate: -3 },
  { src: mem6, caption: "The one in which ur eyes look the besttt.", rotate: 4 },
];

export function PolaroidGallery() {
  const [active, setActive] = useState<Polaroid | null>(null);

  return (
    <section id="gallery" className="relative py-24 px-6">
      <Reveal className="mx-auto max-w-3xl text-center mb-14">
        <p className="font-script text-2xl text-rose">a scrapbook of us</p>
        <h2 className="font-display text-5xl md:text-6xl italic text-gradient mt-2">
          Polaroid Memories
        </h2>
        <p className="mt-4 text-muted-foreground">Tap any polaroid to relive it.</p>
      </Reveal>

      <div className="mx-auto max-w-6xl columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
        {memories.map((m, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <motion.button
              whileHover={{ scale: 1.04, rotate: 0, y: -6 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActive(m)}
              style={{ rotate: `${m.rotate}deg` }}
              className="flex flex-col w-full break-inside-avoid bg-white p-3 md:p-4 rounded-sm polaroid-shadow cursor-pointer"
            >
              <img
                src={m.src}
                alt={m.caption}
                loading="lazy"
                width={768}
                height={768}
                className="w-full aspect-square object-cover"
              />
              <div className="w-full flex-1 flex items-center justify-center pt-3 pb-1 min-h-[3.5rem]">
                <p className="font-hand text-lg md:text-xl text-foreground text-center leading-tight">
                  {m.caption.split(" ").slice(0, 4).join(" ")}…
                </p>
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-foreground/40 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.6, rotate: active.rotate, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 200 }}
              className="bg-white p-4 md:p-5 rounded-sm polaroid-shadow max-w-md w-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={active.src} alt={active.caption} className="w-full aspect-square object-cover" />
              <div className="w-full pt-5 pb-2 flex items-center justify-center min-h-[5rem]">
                <p className="font-hand text-xl md:text-3xl text-foreground text-center leading-tight">
                  {active.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
