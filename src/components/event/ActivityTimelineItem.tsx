
"use client";
import type { ReactNode } from 'react';

interface ActivityTimelineItemProps {
  time: string;
  title: string;
  description?: string;
  icon: ReactNode;
  isLast?: boolean;
}

const ActivityTimelineItem: React.FC<ActivityTimelineItemProps> = ({ time, title, description, icon, isLast }) => {
  return (
    <div className="relative flex items-start space-x-3 sm:space-x-4">
      {!isLast && (
        <div className="absolute left-[11px] sm:left-[13px] top-8 h-[calc(100%-20px)] w-0.5 bg-primary/70 z-0" />
      )}
      <div className="flex-shrink-0 flex flex-col items-center mt-1 relative z-10">
        <div className="bg-primary text-primary-foreground rounded-full p-1.5 sm:p-2 shadow-md ring-2 ring-background">
          {icon}
        </div>
      </div>
      <div className="flex-grow pb-6">
        <p className="font-body text-xs sm:text-sm text-accent font-semibold">{time}</p>
        <h4 className="font-headline text-base sm:text-lg text-accent-foreground mt-0.5">{title}</h4>
        {description && <p className="font-body text-xs sm:text-sm text-foreground/80 mt-1">{description}</p>}
      </div>
    </div>
  );
};

export default ActivityTimelineItem;
