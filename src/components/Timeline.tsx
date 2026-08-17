import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

const moments = [
  {
    when: "The first hello",
    text: "Didn't even know ur name correctly, introduced to me like a random beautiful dream that makes u smile in ur sleep. Just two nervous souls willing to give 'love' another chance.",
  },
  {
    when: "Our first late-night talk",
    text: "Hours felt like minutes. You laughed at my worst joke, and I decided I would spend a lifetime writing better ones just for you.",
  },
  {
    when: "That one bad day",
    text: "You were there when my own weren't, trusted me when everyone were against it, you had every right to walk away.....but u fought even when we were strangers. U were there with one of my battles, i'll be there for ur every",
  },
  {
    when: "The day you held my hand",
    text: "Nothing else in the world made sense....except that ur hand fit mine like a missing puzzle's piece. Only if I could seize the flow of time.",
  },
  {
    when: "Every day since",
    text: "You keep being the best part of my mornings, my afternoons, my evenings and nighttt, the reason for my brightest smilee.",
  },
];

function Card({ m }: { m: (typeof moments)[number] }) {
  return (
    <div className="inline-block bg-card/80 backdrop-blur-sm rounded-2xl p-6 soft-shadow border border-border max-w-md">
      <p className="font-script text-xl text-rose">{m.when}</p>
      <p className="mt-2 font-display italic text-xl md:text-2xl leading-snug text-foreground">
        {m.text}
      </p>
    </div>
  );
}

export function Timeline() {
  return (
    <section id="story" className="relative py-24 px-6">
      <Reveal className="mx-auto max-w-3xl text-center mb-16">
        <p className="font-script text-2xl text-rose">chapter by chapter</p>
        <h2 className="font-display text-5xl md:text-6xl italic text-gradient mt-2">Our Story</h2>
        <p className="mt-4 text-muted-foreground">
          A little timeline of the moments I keep folded in my pocket.
        </p>
      </Reveal>

      <div className="relative mx-auto max-w-4xl">
        {/* spine */}
        <div
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.75 0.15 350 / 0.5), oklch(0.75 0.15 320 / 0.5), transparent)",
          }}
        />

        <div className="space-y-16">
          {moments.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative">
                {/* glowing dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary glow" />
                </div>

                {/* Mobile: everything to the right of the spine.
                    Desktop: alternate left/right. */}
                <div className="pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-16">
                  {isLeft ? (
                    <>
                      <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="md:text-right md:flex md:justify-end"
                      >
                        <Card m={m} />
                      </motion.div>
                      <div className="hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block" />
                      <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="md:flex md:justify-start"
                      >
                        <Card m={m} />
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
