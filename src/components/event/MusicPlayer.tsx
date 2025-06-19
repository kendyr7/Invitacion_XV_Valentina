
"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MusicPlayerProps {
  audioSrc: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.loop = true;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="absolute top-4 right-4 z-20 animate-in fade-in duration-1000">
      <Button
        variant="outline"
        size="icon"
        onClick={togglePlayPause}
        className="bg-background/50 hover:bg-accent/80 border-primary text-primary hover:text-accent-foreground rounded-full shadow-md"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default MusicPlayer;
