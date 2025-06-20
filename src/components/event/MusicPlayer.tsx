
"use client";

import { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, SkipForward, SkipBack, Shuffle, Repeat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface MusicPlayerProps {
  audioSrc: string;
  className?: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ audioSrc, className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.loop = false; 

      const setAudioData = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
          setCurrentTime(audioRef.current.currentTime);
        }
      };

      const setAudioTime = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      };

      audioRef.current.addEventListener('loadedmetadata', setAudioData);
      audioRef.current.addEventListener('timeupdate', setAudioTime);
      audioRef.current.addEventListener('ended', () => setIsPlaying(false)); 

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('loadedmetadata', setAudioData);
          audioRef.current.removeEventListener('timeupdate', setAudioTime);
          // eslint-disable-next-line react-hooks/exhaustive-deps
          audioRef.current.removeEventListener('ended', () => setIsPlaying(false));
          audioRef.current.pause();
        }
      };
    }
  }, [audioSrc]);

  const togglePlayPause = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error("Error playing audio:", error));
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };
  
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  
  const handleShuffle = () => console.log("Shuffle clicked");
  const handleSkipBack = () => {
    if (audioRef.current) audioRef.current.currentTime = 0;
    console.log("Skip back clicked");
  };
  const handleSkipForward = () => {
     if (audioRef.current) {
        
        audioRef.current.currentTime = duration; 
     }
    console.log("Skip forward clicked");
  };
  const handleRepeat = () => {
    if(audioRef.current) {
        audioRef.current.loop = !audioRef.current.loop;
        
        console.log("Repeat toggled:", audioRef.current.loop);
    }
  };

  if (!isClient) {
    return <div className={cn("w-full max-w-xs mx-auto py-4", className)}>Loading player...</div>; 
  }

  return (
    <div className={cn("w-full max-w-xs mx-auto py-3 flex flex-col items-center space-y-3", className)}>
      <Slider
        defaultValue={[0]}
        value={[currentTime]}
        max={duration || 100} 
        step={1}
        onValueChange={handleSeek}
        className="w-full [&>span:first-child>span]:bg-primary [&>span:last-child]:bg-primary [&>span:last-child]:border-primary [&>span:last-child]:h-4 [&>span:last-child]:w-4 [&>span:last-child]:-top-1"
        aria-label="Music progress"
      />
      <div className="flex items-center justify-around w-full">
        <Button variant="ghost" size="icon" onClick={handleShuffle} className="text-primary hover:text-primary/80" aria-label="Shuffle">
          <Shuffle size={20} />
        </Button>
        <Button variant="ghost" size="icon" onClick={handleSkipBack} className="text-primary hover:text-primary/80" aria-label="Skip back">
          <SkipBack size={22} />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={togglePlayPause} 
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 w-12"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-0.5"/>}
        </Button>
        <Button variant="ghost" size="icon" onClick={handleSkipForward} className="text-primary hover:text-primary/80" aria-label="Skip forward">
          <SkipForward size={22} />
        </Button>
        <Button variant="ghost" size="icon" onClick={handleRepeat} className="text-primary hover:text-primary/80" aria-label="Repeat">
          <Repeat size={20} />
        </Button>
      </div>
       {duration > 0 && (
        <div className="text-xs text-muted-foreground w-full flex justify-between px-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;

    