import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";

const reasons = [
  { front: "Your Laugh", back: "It's my favorite sound in the entire universe." },
  { front: "Your Kindness", back: "You care so deeply completely. You make me feel seen." },
  { front: "Your Support", back: "You believe in me on the days I forget how. You're my homeeee!!" },
  { front: "Your Eyes", back: "Every time you look at me, the world softens." },
  { front: "Your Quirks", back: "The little way you move ur lips to tease me. The songs you hum. Every quirk is 'love' spelt out loud." },
  { front: "Your Heart", back: "So brave, so tender, so wildly full of love. Twenty years of being wonderful." },
];

const moreReasons: string[] = [
  "The way you say my name.",
  "How you laugh at your own jokes before you finish them.",
  "The way you humm a song in your head.",
  "How your hand always finds mine.",
  "The way you move your lips left-n-right to tease me.",
  "How you make ordinary weekends feel like celebrations.",
  "Your soft heart.",
  "The way you kiss me.",
  "How you check up on me.",
  "Your terrible jokes.",
  "The way you get excited over tiny things.",
  "The way you kiss me.",
  "Your handwriting.",
  "How you always share the last bite.",
  "The way you fall asleep mid-sentence.",
  "Your infinite patience with me.",
  "How you remember every little thing I've ever mentioned.",
  "The way you cheer for me louder than anyone.",
  "Your laugh when you're genuinely surprised.",
  "How you make my problems feel smaller.",
  "The way you type and your emojis",
  "Your comforting silence.",
  "How you know when I need a hug without me saying it.",
  "Your fierce loyalty.",
  "The way you look when you concentrate.",
  "How you cutely mention animals. (chi chi !)",
  "The little playlists you make.",
  "How you notice the moon every single night.",
  "Your endless curiosity.",
  "The way you defend me and can't here a single bad thing.",
  "How brave and intelligent you are.",
  "The way you dress up.",
  "How your eyes light up when you tell a story.",
  "Our midnight walks",
  "How you always find the prettiest flower and tree.",
  "The way you never let me feel alone.",
  "Your soft, sleepy morning voice.",
  "How you send me reels at 2 a.m.",
  "The way you say 'Apkoo pteee?'",
  "How you turn our visits into memories.",
  "Your beautiful, chaotic camera roll.",
  "The way you wave goodbye.",
  "How you remember birthdays like a superpower.",
  "Your excitement for rainy days.",
  "Your cringe taste in reels and music.",
  "How you treat your friends and family.",
  "Your unshakeable moral compass.",
  "The way you say 'I'm proud of you'.",
  "How you take care of yourself so gently.",
  "Your ability to find joy anywhere.",
  "The way you gasp at pretty flowers.",
  "How you say 'neend aa rhi hai'.",
  "Your handwritten cardss.",
  "The way you doodle on my hands.",
  "How you get shy when I compliment or come close to you.",
  "Your incredible taste in everything.",
  "The way you make plans, and then break them.",
  "How you always have water in your bag.",
  "Your hugs.",
  "The way you say 'thank you' like you mean it.",
  "How you turn silences into safety.",
  "Your dreams, and how big they are.",
  "The way you call me 'JJ'.",
  "How you cry at small things.",
  "Your spirit.",
  "The way you're so obsessed with me.",
  "How you make me feel brave.",
  "Your delight in my tiny wins.",
  "Your seriousness at what you do",
  "How you make me laugh till my stomach hurts.",
  "How u hit me",
  "The way you say 'come here'.",
  "How you decorate everything with fairy lights of feeling.",
  "Your unshakable faith in me.",
  "The way you notice when I'm tired.",
  "How you make me feel like the main character.",
  "Your love for old songs.",
  "The way your hair looks.",
  "How you look at the moon.",
  "Your ranting sessions.",
  "The way you always buy for me whenever you go out.",
  "How you turn our walks into an adventure.",
  "Your honesty.",
  "The way you say 'I love you'.",
  "How you always root for Ronaldo.",
  "Your quiet mornings and loud evenings.",
  "The way you look at me when you think I'm not watching.",
  "How you never give up on me.",
  "Your incredible memory for our inside jokes.",
  "The way you save the best for me.",
  "The way you scold me when I don't take care of myself.",
  "Your 'good morning' texts with a big 'i love you's.",
  "The way you make plans for our future.",
  "How you turn my worst days into 'we'll figure it out' days.",
  "Your beautiful mind.",
  "The way you love without hesitation.",
  "How you make being loved by you feel effortless.",
  "Your unbelievable talent for making memories.",
  "The way you kiss my forehead, cheeks, lips, hands, everyyything.",
  "How you hit meee and then laugh at me.",
  "And infinite more, as I'll be observing my entire life.💗",
];

export function ReasonsCards() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const [openList, setOpenList] = useState(false);

  const toggle = (i: number) =>
    setFlipped((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section id="reasons" className="relative py-24 px-6">
      <Reveal className="mx-auto max-w-3xl text-center mb-14">
        <p className="font-script text-2xl text-rose">a few of infinitely many</p>
        <h2 className="font-display text-5xl md:text-6xl italic text-gradient mt-2">
          Reasons I Love You
        </h2>
        <p className="mt-4 text-muted-foreground">Flip a card. Read the truth.</p>
      </Reveal>

      <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => {
          const isFlipped = flipped.has(i);
          return (
            <Reveal key={i} delay={i * 0.06}>
              <button
                onClick={() => toggle(i)}
                className="relative w-full aspect-[4/5] group"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="absolute inset-0 rounded-3xl p-8 flex flex-col items-center justify-center soft-shadow"
                    style={{
                      backfaceVisibility: "hidden",
                      background:
                        "linear-gradient(135deg, oklch(0.94 0.06 350), oklch(0.9 0.07 320))",
                    }}
                  >
                    <span className="font-script text-4xl text-primary mb-4">{i + 1}</span>
                    <h3 className="font-display text-3xl italic text-center text-foreground">
                      {r.front}
                    </h3>
                    <span className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
                      tap to reveal
                    </span>
                  </div>
                  <div
                    className="absolute inset-0 rounded-3xl p-8 flex items-center justify-center soft-shadow"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background:
                        "linear-gradient(135deg, oklch(0.97 0.03 90), oklch(0.94 0.05 340))",
                    }}
                  >
                    <p className="font-hand text-2xl leading-snug text-center text-foreground">
                      {r.back}
                    </p>
                  </div>
                </motion.div>
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* teaser + button */}
      <Reveal className="mt-16 text-center">
        <p className="font-display italic text-3xl md:text-4xl text-gradient">
          You thought there are only 6?
        </p>
        <p className="mt-3 font-hand text-xl text-foreground/70">
          jaana, I'm just getting started…
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setOpenList(true)}
          className="mt-6 glow rounded-full px-8 py-4 font-display italic text-lg bg-primary text-primary-foreground"
        >
          Show me 100 more 💗
        </motion.button>
      </Reveal>

      <AnimatePresence>
        {openList && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-foreground/50 backdrop-blur-md"
            onClick={() => setOpenList(false)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 24, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] rounded-3xl soft-shadow border border-border overflow-hidden flex flex-col"
              style={{
                background:
                  "linear-gradient(160deg, oklch(0.98 0.02 90), oklch(0.95 0.05 340))",
              }}
            >
              <div className="p-6 md:p-8 border-b border-border/60 flex items-center justify-between gap-4 shrink-0">
                <div>
                  <p className="font-script text-xl text-rose">just a few more</p>
                  <h3 className="font-display italic text-3xl md:text-4xl text-gradient">
                    100 more reasons
                  </h3>
                </div>
                <button
                  onClick={() => setOpenList(false)}
                  aria-label="Close"
                  className="p-2 rounded-full hover:bg-white/60 transition"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>

              <ol className="overflow-y-auto px-6 md:px-10 py-6 space-y-3 counter-reset-[reasons]">
                {moreReasons.map((r, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: Math.min(i * 0.012, 0.6),
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-4 group"
                  >
                    <span className="font-script text-2xl text-rose w-10 shrink-0 text-right tabular-nums leading-tight">
                      {i + 1}.
                    </span>
                    <span className="font-hand text-xl md:text-2xl leading-snug text-foreground/90 group-hover:text-foreground transition">
                      {r}
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
