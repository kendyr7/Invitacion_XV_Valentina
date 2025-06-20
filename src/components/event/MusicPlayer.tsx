
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
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && audioSrc && isClient) {
      const audio = new Audio(audioSrc);
      audio.preload = "metadata";
      audio.loop = false;
      audioRef.current = audio;

      const handleLoadedMetadata = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
          setCurrentTime(audioRef.current.currentTime);
          console.log('Audio metadata loaded. Duration:', audioRef.current.duration, 'ReadyState:', audioRef.current.readyState);
        }
      };

      const handleTimeUpdate = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      };

      const handleEnded = () => {
        setIsPlaying(false);
        if (audioRef.current) { // Reset to beginning when ended if not looping
          audioRef.current.currentTime = 0;
        }
      };

      const handleErrorEvent = (e: Event) => {
        console.error("Audio element error event:", e);
        if (audioRef.current?.error) {
          console.error("Audio error code:", audioRef.current.error.code, "message:", audioRef.current.error.message);
        }
        setIsPlaying(false);
        // You could set an error state here to display a message to the user
      };
      
      audio.addEventListener('loadedmetadata', handleLoadedMetadata);
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('ended', handleEnded);
      audio.addEventListener('error', handleErrorEvent);

      audio.load(); // Explicitly call load

      return () => {
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('ended', handleEnded);
        audio.removeEventListener('error', handleErrorEvent);
        audio.pause();
        audioRef.current = null; // Clean up the ref
      };
    } else {
      // Cleanup if audioRef was previously set and audioSrc is now missing or not on client
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      setDuration(0);
      setCurrentTime(0);
      setIsPlaying(false);
      if (isClient && !audioSrc) {
        console.warn('MusicPlayer: audioSrc is not provided.');
      }
    }
  }, [audioSrc, isClient]);

  const togglePlayPause = useCallback(async () => {
    if (!audioRef.current) {
      console.warn("Audio player not initialized yet or audioSrc is invalid.");
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        console.log('Attempting to play. Current src:', audioRef.current.src, 'Ready state:', audioRef.current.readyState);
        if (audioRef.current.readyState === 0) { // HAVE_NOTHING
            console.warn("Audio source not ready (readyState is 0). Attempting to load...");
            audioRef.current.load(); // Try to load it again
        }
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error caught during play():", error);
        setIsPlaying(false);
      }
    }
  }, [isPlaying]);

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };
  
  const formatTime = (time: number) => {
    if (isNaN(time) || time === Infinity) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleShuffle = () => console.log("Shuffle clicked (not implemented)");
  const handleSkipBack = () => {
    if (audioRef.current) audioRef.current.currentTime = 0;
  };
  const handleSkipForward = () => {
     if (audioRef.current && duration > 0) {
        audioRef.current.currentTime = duration; 
     }
  };
  const handleRepeat = () => {
    if(audioRef.current) {
        audioRef.current.loop = !audioRef.current.loop;
        console.log("Repeat toggled:", audioRef.current.loop);
        // You might want to update UI to reflect loop state
    }
  };

  if (!isClient) {
    return <div className={cn("w-full max-w-xs mx-auto py-4", className)}>Loading player...</div>; 
  }

  return (
    <div className={cn("w-full max-w-xs mx-auto py-3 flex flex-col items-center space-y-3", className)}>
      <Slider
        value={[currentTime]}
        max={duration > 0 ? duration : 100} // Ensure max is not 0
        step={1}
        onValueChange={handleSeek}
        className="w-full [&>span:first-child>span]:bg-primary [&>span:last-child]:bg-primary [&>span:last-child]:border-primary [&>span:last-child]:h-4 [&>span:last-child]:w-4 [&>span:last-child]:-top-1"
        aria-label="Music progress"
        disabled={duration === 0}
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
          disabled={!audioSrc || duration === 0 && !isPlaying} // Disable if no src or not loaded
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
       {(duration > 0 || currentTime > 0) && ( // Show time if there is duration or current time (e.g. if loading)
        <div className="text-xs text-muted-foreground w-full flex justify-between px-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      )}
       {audioRef.current?.error && (
        <div className="text-xs text-destructive text-center">
          Audio could not be loaded.
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
