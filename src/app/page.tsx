
import Image from 'next/image';
import MusicPlayer from '@/components/event/MusicPlayer';
import CountdownTimer from '@/components/event/CountdownTimer';
import EventDetails from '@/components/event/EventDetails';
import RsvpButton from '@/components/event/RsvpButton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  // IMPORTANT: User needs to replace this with their actual audio file path
  // The audio file (e.g., event-music.mp3) should be placed in the `public` folder.
  const audioSrc = "/audio/event-music.mp3"; 
  // Recommended: A short, looping, royalty-free instrumental track.

  const eventTargetDate = "2025-07-27T19:00:00"; // Example: July 27, 2025, 7:00 PM. Update this to your event date and time.

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4 relative overflow-auto sm:overflow-hidden">
      {/* Background Image */}
      <Image 
        src="https://placehold.co/1200x1800" // Placeholder for a vertical image
        layout="fill" 
        objectFit="cover" 
        alt="Elegant event background" 
        className="absolute inset-0 z-[-1] opacity-20 filter blur-sm" 
        priority
        data-ai-hint="party celebration"
      />
      
      {/* Music Player - Positioned at top right */}
      <MusicPlayer audioSrc={audioSrc} />

      <div className="z-10 flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-2xl w-full bg-background/80 backdrop-blur-md p-6 sm:p-10 rounded-xl shadow-2xl my-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
        
        <div className="animate-in fade-in duration-1000">
          <h2 className="font-headline text-3xl sm:text-4xl text-accent-foreground">Valeria's</h2>
          <h1 className="font-headline text-5xl sm:text-7xl text-primary mt-1">Sweet Sixteen</h1>
        </div>

        <Card className="bg-transparent border-none shadow-none w-full animate-in fade-in duration-1000 delay-200">
          <CardHeader className="pb-2">
            <CardTitle className="font-headline text-2xl sm:text-3xl text-primary">An Invitation</CardTitle>
          </CardHeader>
          <CardContent className="font-body text-base sm:text-lg text-foreground/80 space-y-3">
            <p>With immense joy and excitement, we invite you to celebrate a very special milestone in Valeria's life.</p>
            <p>Join us for an unforgettable evening of music, laughter, and cherished memories as she steps into this beautiful new chapter.</p>
            <p>Your presence will make this celebration complete!</p>
          </CardContent>
        </Card>

        <CountdownTimer targetDate={eventTargetDate} />

        <EventDetails
          date="Saturday, July 27, 2025" // Update this
          time="7:00 PM" // Update this
          location="Elegance Event Hall, 123 Celebration Ave, Anytown" // Update this
        />

        <RsvpButton
          phoneNumber="15551234567" // IMPORTANT: Replace with actual WhatsApp number (e.g., 1 for USA, then number)
          message="Hello! I'd love to confirm my attendance for Valeria's Sweet Sixteen!" // Customize this message
        />

        <p className="font-body text-xs text-muted-foreground pt-4 animate-in fade-in duration-1000 delay-1000">
          We can't wait to celebrate with you!
        </p>
      </div>
    </main>
  );
}
