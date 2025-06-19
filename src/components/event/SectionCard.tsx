
"use client";
import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

interface SectionCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  locationButton?: {
    text: string;
    url: string;
  };
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  animationDelay?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, icon, children, locationButton, className, titleClassName, contentClassName, animationDelay }) => {
  const handleLocationClick = () => {
    if (locationButton) {
      window.open(locationButton.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className={`w-full max-w-md bg-background/70 dark:bg-background/50 border-primary/30 shadow-xl backdrop-blur-sm animate-in fade-in duration-700 ${className}`} style={{ animationDelay: animationDelay }}>
      <CardHeader className="pb-3 pt-5">
        <CardTitle className={`font-headline text-xl sm:text-2xl text-accent flex items-center justify-center text-center ${titleClassName}`}>
          {icon && <span className="mr-3 text-accent">{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className={`font-body text-sm sm:text-base text-foreground/90 space-y-2 ${contentClassName}`}>
        {children}
        {locationButton && (
          <div className="mt-4 text-center">
            <Button
              onClick={handleLocationClick}
              variant="outline"
              className="bg-accent hover:bg-accent/90 text-accent-foreground border-accent hover:border-accent/90"
            >
              <MapPin className="mr-2 h-4 w-4" />
              {locationButton.text}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SectionCard;
