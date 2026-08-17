import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Music,
  X,
} from "lucide-react";

/**
 * 💽 Kanishka's stereo — soft, romantic floating player, docked bottom-right.
 *
 * TO ADD HER FAVORITE SONGS:
 * Drop MP3 files in /public/music/ and update the `tracks` list below,
 * or paste any direct audio URL as the `src`.
 */
const tracks: { title: string; artist: string; src: string }[] = [
  { 
    title: "Tere Lieee", 
    artist: "Atif Aslam", 
    // Replace the '/view?usp=sharing' link with the direct stream link below:
    src: "https://qw311.github.io/song/TereLiye.mp3" 
  },
  { 
    title: "Teraaa hone lga huu", 
    artist: "Atif Aslam", 
    // Replace the '/view?usp=sharing' link with the direct stream link below:
    src: "https://qw311.github.io/song/TeraHoneLagaHoon.mp3" 
  },
  { 
    title: "Chandni", 
    artist: "Sufr", 
    // Replace the '/view?usp=sharing' link with the direct stream link below:
    src: "https://qw311.github.io/song/chaandni.mp3" 
  },
  { 
    title: "Aarzuuu", 
    artist: "Asim Azhar", 
    // Replace the '/view?usp=sharing' link with the direct stream link below:
    src: "https://qw311.github.io/song/Aarzu.mp3" 
  },
];
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.55);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const current = tracks[idx];

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = muted ? 0 : volume;
  }, [volume, muted]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) a.play().catch(() => setPlaying(false));
    else a.pause();
  }, [playing, idx]);

  useEffect(() => {
    console.log("Progress:", progress);
    console.log("Duration:", duration);
  }, [progress, duration]);

  const next = () => setIdx((i) => (i + 1) % tracks.length);
  const prev = () => setIdx((i) => (i - 1 + tracks.length) % tracks.length);

  const fmt = (s: number) => {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    return `${m}:${Math.floor(s % 60).toString().padStart(2, "0")}`;
  };

  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col items-start gap-3">
      <audio
        ref={audioRef}
        src={current.src}
        onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => {
          console.log("Loaded");
          setDuration(e.currentTarget.duration);
        }}
        onCanPlay={() => console.log("Can play")}
        onEnded={next}
        onError={(e) => {
          console.log("Audio error", e);
          console.log(audioRef.current?.error);
        }}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 24, stiffness: 240 }}
            className="w-[19rem] rounded-3xl p-5 soft-shadow border border-border/60 backdrop-blur-xl origin-bottom-left"
            style={{
              background:
                "linear-gradient(160deg, oklch(0.98 0.02 340 / 0.92), oklch(0.94 0.05 320 / 0.9))",
            }}
          >
            <div className="flex items-start gap-3 mb-4">
              <motion.div
                animate={{ rotate: playing ? 360 : 0 }}
                transition={{
                  repeat: playing ? Infinity : 0,
                  duration: 7,
                  ease: "linear",
                }}
                className="relative w-14 h-14 rounded-full shrink-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, oklch(0.42 0.05 340), oklch(0.14 0.02 340) 70%)",
                  boxShadow:
                    "inset 0 0 0 2px oklch(0.6 0.1 340 / 0.4), 0 4px 14px oklch(0 0 0 / 0.25)",
                }}
              >
                <div className="absolute inset-2 rounded-full border border-white/10" />
                <div className="absolute inset-4 rounded-full border border-white/10" />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                  style={{ background: "oklch(0.75 0.15 350)" }}
                />
              </motion.div>
              <div className="min-w-0 flex-1">
                <p className="font-script text-base text-rose leading-tight">now playing</p>
                <p className="font-display italic text-lg text-foreground truncate">
                  {current.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">{current.artist}</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close player"
                className="p-1 rounded-full hover:bg-white/60 transition shrink-0"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <input
              type="range"
              min={0}
              max={duration || 0}
              value={progress}
              onChange={(e) => {
                const v = Number(e.target.value);
                if (audioRef.current) audioRef.current.currentTime = v;
                setProgress(v);
              }}
              className="w-full accent-primary h-1"
            />
            <div className="flex justify-between text-[10px] text-muted-foreground mt-1 tabular-nums">
              <span>{fmt(progress)}</span>
              <span>{fmt(duration)}</span>
            </div>

            <div className="flex items-center justify-center gap-4 mt-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="p-2 rounded-full hover:bg-white/60 transition active:scale-90"
              >
                <SkipBack className="w-4 h-4 text-foreground" />
              </button>
              <button
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? "Pause" : "Play"}
                className="p-4 rounded-full bg-primary text-primary-foreground glow active:scale-90 transition"
              >
                {playing ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="p-2 rounded-full hover:bg-white/60 transition active:scale-90"
              >
                <SkipForward className="w-4 h-4 text-foreground" />
              </button>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={() => setMuted((m) => !m)}
                aria-label={muted ? "Unmute" : "Mute"}
                className="p-1 rounded hover:bg-white/60 transition"
              >
                {muted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <Volume2 className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={muted ? 0 : volume}
                onChange={(e) => {
                  setMuted(false);
                  setVolume(Number(e.target.value));
                }}
                className="flex-1 accent-primary h-1"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating trigger — minimal circular logo */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label={open ? "Hide music player" : "Open music player"}
        className="relative grid place-items-center w-12 h-12 rounded-full border border-border/60 soft-shadow backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.99 0.01 340 / 0.95), oklch(0.94 0.05 340 / 0.9))",
        }}
      >
        <motion.span
          animate={{ rotate: playing ? 360 : 0 }}
          transition={{ repeat: playing ? Infinity : 0, duration: 6, ease: "linear" }}
          className="grid place-items-center"
        >
          <Music className="w-4 h-4 text-rose" />
        </motion.span>
        {playing && (
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-primary glow" />
        )}
      </motion.button>
    </div>
  );
}
