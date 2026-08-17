import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import paper from "@/assets/paper.jpg";

export function LoveLetter() {
  return (
    <section id="letter" className="relative py-24 px-6">
      <Reveal className="mx-auto max-w-3xl text-center mb-10">
        <p className="font-script text-2xl text-rose">from me, to you</p>
        <h2 className="font-display text-5xl md:text-6xl italic text-gradient mt-2">
          A Little Letter
        </h2>
      </Reveal>

      <motion.div
        initial={{ opacity: 0, y: 40, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-2xl relative"
      >
        <div
          className="relative rounded-lg p-10 md:p-14 soft-shadow"
          style={{
            backgroundImage: `url(${paper})`,
            backgroundSize: "cover",
            backgroundColor: "oklch(0.97 0.02 80)",
          }}
        >
          {/* tape */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-blush/60 rotate-2 shadow-sm" />
          <p className="font-hand text-2xl md:text-3xl leading-relaxed text-foreground/90 whitespace-pre-line">
            {`My dear MALKIN JII,

Twenty years ago the world got a little softer, a little brighter, a little more worth waking up for, because you arrived in it. I don't know how I got so lucky to be the one who gets to love you, but I promise I'll never take a single second of it to go to waste.

You are the calm in my chaos and the sparkle in my ordinary days. You laugh with your whole heart. You love with your whole self. And somehow, impossibly, you chose me back.

Happy 20th, baby. Here's to more laughs, silliness, handholdings, kisses, late-night walks, and a lifetime of me trying and failing to describe how much I adore you.

Always yours,
JJ
`}
            <span className="font-script text-4xl block mt-4 text-rose">forever & always 💗</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
