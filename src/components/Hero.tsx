import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import { HeartBurst } from "./HeartBurst";
import hero from "@/assets/hero-portrait.jpg";

export function Hero() {
  const scrollDown = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 pb-24 overflow-hidden">
      {/* tiny pill badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-sm border border-white pl-3 pr-4 py-2 shadow-[0_6px_20px_-10px_oklch(0.7_0.1_15/0.35)]"
      >
        <Sparkle className="w-3.5 h-3.5 text-rose" strokeWidth={1.5} />
        <span className="text-[11px] md:text-xs tracking-[0.22em] uppercase text-rose/90 font-medium">
          The Best.
        </span>
      </motion.div>

      {/* portrait — rounded square, white frame */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-8"
      >
        <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-[2rem] overflow-hidden shadow-[0_25px_60px_-25px_oklch(0.55_0.12_15/0.35)]">
          <img
            src={hero}
            alt="For Kanishka"
            width={1024}
            height={1024}
            className="w-full h-full object-cover"
          />
        </div>

        {/* soft accent hearts — matches reference */}
        <svg viewBox="0 0 24 24" aria-hidden className="absolute -top-2 -right-6 w-6 h-6" style={{ color: "oklch(0.7 0.15 15)" }}>
          <path fill="currentColor" d="M12 21s-7-4.35-9.5-8.5C.9 9.9 2.3 6 6 6c2.1 0 3.5 1.2 4 2.3C10.5 7.2 11.9 6 14 6c3.7 0 5.1 3.9 3.5 6.5C19 16.65 12 21 12 21z" />
        </svg>
        <svg viewBox="0 0 24 24" aria-hidden className="absolute top-8 -right-14 w-5 h-5 opacity-40" style={{ color: "oklch(0.78 0.1 15)" }}>
          <path fill="currentColor" d="M12 21s-7-4.35-9.5-8.5C.9 9.9 2.3 6 6 6c2.1 0 3.5 1.2 4 2.3C10.5 7.2 11.9 6 14 6c3.7 0 5.1 3.9 3.5 6.5C19 16.65 12 21 12 21z" />
        </svg>
        <svg viewBox="0 0 24 24" aria-hidden className="absolute bottom-8 -right-10 w-4 h-4 opacity-70" style={{ color: "oklch(0.82 0.09 15)" }}>
          <path fill="currentColor" d="M12 21s-7-4.35-9.5-8.5C.9 9.9 2.3 6 6 6c2.1 0 3.5 1.2 4 2.3C10.5 7.2 11.9 6 14 6c3.7 0 5.1 3.9 3.5 6.5C19 16.65 12 21 12 21z" />
        </svg>
        <svg viewBox="0 0 24 24" aria-hidden className="absolute -bottom-2 -left-6 w-5 h-5 opacity-80" style={{ color: "oklch(0.78 0.13 15)" }}>
          <path fill="currentColor" d="M12 21s-7-4.35-9.5-8.5C.9 9.9 2.3 6 6 6c2.1 0 3.5 1.2 4 2.3C10.5 7.2 11.9 6 14 6c3.7 0 5.1 3.9 3.5 6.5C19 16.65 12 21 12 21z" />
        </svg>
        <svg viewBox="0 0 24 24" aria-hidden className="absolute top-16 -left-10 w-4 h-4 opacity-50" style={{ color: "oklch(0.82 0.09 15)" }}>
          <path fill="currentColor" d="M12 21s-7-4.35-9.5-8.5C.9 9.9 2.3 6 6 6c2.1 0 3.5 1.2 4 2.3C10.5 7.2 11.9 6 14 6c3.7 0 5.1 3.9 3.5 6.5C19 16.65 12 21 12 21z" />
        </svg>
      </motion.div>

      {/* headline */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 text-center font-display text-4xl md:text-6xl leading-[1.05] text-foreground"
        style={{ letterSpacing: "-0.01em" }}
      >
        Happy 20<sup className="text-[0.45em] align-super font-display -ml-0.5 mr-0.5">th</sup> Birthday
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="font-script text-5xl md:text-7xl leading-none mt-2"
        style={{ color: "oklch(0.68 0.08 30)" }}
      >
        Babyyyy
      </motion.p>

      {/* subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8 max-w-xl text-center text-[15px] md:text-base text-foreground/60 leading-relaxed"
      >
        Twenty years of you making the world softer, funnier and infinitely more
        beautiful.
      </motion.p>

      {/* subtle CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.25 }}
        className="mt-10"
      >
        <HeartBurst>
          {(trigger) => (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={(e) => {
                trigger(e);
                window.setTimeout(scrollDown, 250);
              }}
              className="rounded-full px-7 py-3 text-sm tracking-wide bg-white/85 backdrop-blur border border-white text-rose hover:bg-white transition cursor-pointer shadow-[0_10px_30px_-15px_oklch(0.6_0.15_15/0.4)]"
            >
              Let&apos;s begin ↓
            </motion.button>
          )}
        </HeartBurst>
      </motion.div>
    </section>
  );
}
