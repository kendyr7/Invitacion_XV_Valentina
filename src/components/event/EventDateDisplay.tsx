
"use client";

import type { FC } from 'react';
import { cn } from "@/lib/utils";

interface EventDateDisplayProps {
  monthName: string;
  dayName: string;
  dayNumber: string;
  year: string;
  className?: string;
}

const EventDateDisplay: FC<EventDateDisplayProps> = ({
  monthName,
  dayName,
  dayNumber,
  year,
  className,
}) => {
  return (
    <div className={cn("flex flex-col items-center text-center w-full max-w-xs mx-auto", className)}>
      <p className="font-body text-sm sm:text-base text-accent uppercase tracking-widest">
        {monthName}
      </p>
      <div className="w-3/4 h-px bg-primary my-2 sm:my-3" />
      <div className="flex items-center justify-between w-full">
        <p className="font-body text-xs sm:text-sm text-foreground/80 uppercase w-1/3 text-left">
          {dayName}
        </p>
        <p className="font-headline text-5xl sm:text-7xl text-primary italic mx-2">
          {dayNumber}
        </p>
        <p className="font-body text-xs sm:text-sm text-foreground/80 uppercase w-1/3 text-right">
          {year}
        </p>
      </div>
      <div className="w-3/4 h-px bg-primary my-2 sm:my-3" />
    </div>
  );
};

export default EventDateDisplay;
