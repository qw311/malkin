import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { PolaroidGallery } from "@/components/PolaroidGallery";
import { ReasonsCards } from "@/components/ReasonsCards";
import { LoveLetter } from "@/components/LoveLetter";
import { MusicPlayer } from "@/components/MusicPlayer";
import { CursorTrail } from "@/components/CursorTrail";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <CursorTrail />
      <AmbientBackground />
      <MusicPlayer />
      <Hero />
      <Timeline />
      <PolaroidGallery />
      <ReasonsCards />
      <LoveLetter />
      <footer className="relative py-12 text-center">
        <p className="font-script text-2xl text-rose">
          made with love, for the loveliest girl
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Happy 20th, Kanishka 💗
        </p>
      </footer>
    </main>
  );
}
