
"use client";
import type { ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface ActivityTimelineItemProps {
  time: string;
  title: string;
  icon: ReactNode;
  align: 'left' | 'right';
}

const ActivityTimelineItem: React.FC<ActivityTimelineItemProps> = ({ time, title, icon, align }) => {
  const eventDetails = (
    <div className={cn(
      "flex flex-col w-full px-1", 
      align === 'left' ? 'items-end text-right' : 'items-start text-left'
    )}>
      <div className="text-primary mb-1 sm:mb-2">{icon}</div>
      <h4 className="font-headline text-[0.8rem] sm:text-xs md:text-sm text-primary font-semibold uppercase leading-tight">{title}</h4>
      <p className="font-body text-[0.7rem] sm:text-[0.75rem] text-foreground/80 leading-tight">{time}</p>
    </div>
  );

  
  const gutterWidth = "w-10 sm:w-12 md:w-16"; 
  
  const contentPaneWidth = "w-[calc(50%-1.25rem)] sm:w-[calc(50%-1.5rem)] md:w-[calc(50%-2rem)]";


  return (
    <div className="relative flex w-full items-center">
      {align === 'left' && (
        <>
          <div className={cn(contentPaneWidth, "flex justify-end items-center py-3 sm:py-4")}>
            {eventDetails}
          </div>
          <div className={cn(gutterWidth, "relative flex justify-center items-center shrink-0")}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background ring-1 ring-primary z-10"></div>
            <div className="w-full h-[1.5px] bg-primary absolute left-0 top-1/2 -translate-y-1/2 z-0"></div>
          </div>
          <div className={contentPaneWidth}></div> {/* Spacer */}
        </>
      )}

      {align === 'right' && (
        <>
          <div className={contentPaneWidth}></div> {/* Spacer */}
          <div className={cn(gutterWidth, "relative flex justify-center items-center shrink-0")}>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background ring-1 ring-primary z-10"></div>
            <div className="w-full h-[1.5px] bg-primary absolute right-0 top-1/2 -translate-y-1/2 z-0"></div>
          </div>
          <div className={cn(contentPaneWidth, "flex justify-start items-center py-3 sm:py-4")}>
            {eventDetails}
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityTimelineItem;

    