

import Image from 'next/image';
import MusicPlayer from '@/components/event/MusicPlayer';
import CountdownTimer from '@/components/event/CountdownTimer';
import RsvpButton from '@/components/event/RsvpButton';
import { Card, CardContent } from '@/components/ui/card';
import SectionCard from '@/components/event/SectionCard';
import ActivityTimelineItem from '@/components/event/ActivityTimelineItem';
import EventDateDisplay from '@/components/event/EventDateDisplay'; // New import
import { 
  Church, 
  PartyPopper, 
  Gift, 
  Shirt, 
  CalendarDays, 
  Clock, 
  MapPin, 
  ListChecks,
  Users,
  Utensils,
  Milestone,
  SparklesIcon as Sparkles,
  Music2,
  CakeSlice,
  Moon
} from 'lucide-react';

export default function HomePage() {
  const audioSrc = "/audio/event-music.mp3"; 
  const eventTargetDate = "2025-08-01T19:00:00"; // Updated Event Date & Time

  const timelineEvents = [
    { time: "7:00 PM", title: "Bienvenida y Cóctel", icon: <Users size={18} />, description: "Recibimos a nuestros queridos invitados." },
    { time: "8:00 PM", title: "Cena", icon: <Utensils size={18} />, description: "Disfrutemos de una deliciosa cena juntos." },
    { time: "9:00 PM", title: "Vals y Palabras", icon: <Milestone size={18} />, description: "Un momento especial y emotivo." },
    { time: "9:30 PM", title: "Show Sorpresa", icon: <Sparkles size={18} /> },
    { time: "10:00 PM", title: "Apertura de Pista / Baile", icon: <Music2 size={18} />, description: "¡A bailar!" },
    { time: "11:30 PM", title: "Pastel", icon: <CakeSlice size={18} />, description: "Celebremos con un dulce momento." },
    { time: "12:00 AM", title: "¡La Fiesta Continúa!", icon: <PartyPopper size={18} /> },
    { time: "2:00 AM", title: "Fin de Fiesta", icon: <Moon size={18} />, isLast: true },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4 relative overflow-auto sm:overflow-hidden">
      <Image 
        src="https://placehold.co/1200x1800"
        layout="fill" 
        objectFit="cover" 
        alt="Elegant event background" 
        className="absolute inset-0 z-[-1] opacity-20 filter blur-sm" 
        priority
        data-ai-hint="elegant floral"
      />
      
      <div 
        className="z-10 flex flex-col items-center text-center space-y-8 sm:space-y-10 max-w-2xl w-full bg-background/80 dark:bg-neutral-900/80 backdrop-blur-md p-4 sm:p-8 rounded-xl shadow-2xl my-8 animate-in fade-in slide-in-from-bottom-10 duration-700 bg-[url('/paper-texture.jpg')] bg-cover bg-center"
      >
        
        <Card className="bg-transparent border-none shadow-none w-full animate-in fade-in duration-1000 delay-200 order-1">
          <CardContent className="font-body text-base sm:text-lg text-foreground/80 space-y-1">
            <p>Hay momentos inolvidables que</p>
            <p>se atesoran en el corazón para siempre</p>
            <p>por esa razón quiero que compartas</p>
            <p>conmigo éste dia tan especial</p>
          </CardContent>
        </Card>

        <div className="flex flex-col items-center my-2 sm:my-4 animate-in fade-in duration-1000 delay-300 order-2">
          <Image src="/tiara.png" alt="Tiara" width={100} height={100} data-ai-hint="tiara crown" className="drop-shadow-lg"/>
          <p className="font-headline text-2xl sm:text-3xl text-accent mt-2 tracking-widest">MIS XV AÑOS</p>
        </div>

        <div className="animate-in fade-in duration-1000 delay-400 order-3 mb-0 sm:mb-2">
          <p className="font-headline text-4xl sm:text-5xl text-primary italic">Valentina Fletes</p>
        </div>
        
        <MusicPlayer audioSrc={audioSrc} className="order-4 animate-in fade-in duration-1000 delay-500" />

        <Card className="bg-transparent border-none shadow-none w-full animate-in fade-in duration-1000 delay-600 order-5">
          <CardContent className="font-body text-base sm:text-lg text-foreground/80 space-y-1">
            <p>Con la bendición de Dios y el amor de</p>
            <p>mis padres, te invito a celebrar con</p>
            <p>alegría este momento tan especial</p>
            <p className="font-headline text-base sm:text-lg text-accent mt-2 tracking-widest">MIS XV AÑOS</p>
          </CardContent>
        </Card>

        <EventDateDisplay 
          monthName="AGOSTO"
          dayName="VIERNES"
          dayNumber="1"
          year="2025"
          className="order-6 animate-in fade-in duration-1000 delay-700"
        />

        <div className="w-full max-w-md order-7 animate-in fade-in duration-1000 delay-800">
          <CountdownTimer targetDate={eventTargetDate} />
        </div>
        
        <div className="order-8 w-full">
          <SectionCard 
            title="Ceremonia Religiosa" 
            icon={<Church size={28} />}
            animationDelay="900ms"
          >
            <p>Acompáñanos en la emotiva ceremonia donde Valentina dará gracias.</p>
            <div className="mt-3 space-y-1 text-left pl-4">
              <p className="flex items-center"><CalendarDays size={16} className="mr-2 text-primary shrink-0" /> Sábado, 27 de Julio, 2025</p> {/* This date might need updating based on new event date */}
              <p className="flex items-center"><Clock size={16} className="mr-2 text-primary shrink-0" /> 5:00 PM</p>
              <p className="flex items-start"><MapPin size={16} className="mr-2 mt-1 text-primary shrink-0" /> Parroquia San Juan Bautista, Calle Falsa 123, Ciudad Corazón</p>
            </div>
          </SectionCard>
        </div>
        
        <div className="order-9 w-full">
          <SectionCard 
            title="Recepción" 
            icon={<PartyPopper size={28} />} 
            locationButton={{ text: "Ver Ubicación", url: "https://maps.google.com/?q=Elegance+Event+Hall,+123+Celebration+Ave,+Anytown" }}
            animationDelay="1000ms"
          >
            <p>Celebraremos con una fiesta llena de alegría, música y sorpresas.</p>
            <div className="mt-3 space-y-1 text-left pl-4">
              <p className="flex items-center"><CalendarDays size={16} className="mr-2 text-primary shrink-0" /> Viernes, 1 de Agosto, 2025</p> {/* This date might need updating */}
              <p className="flex items-center"><Clock size={16} className="mr-2 text-primary shrink-0" /> A partir de las 7:00 PM</p>
              <p className="flex items-start"><MapPin size={16} className="mr-2 mt-1 text-primary shrink-0" /> Salón Elegancia, Av. Siempreviva 742, Ciudad Corazón</p>
            </div>
          </SectionCard>
        </div>

        <div className="order-10 w-full">
          <SectionCard 
            title="Itinerario de Actividades" 
            icon={<ListChecks size={28} />}
            contentClassName="px-2 sm:px-4 pt-4"
            animationDelay="1100ms"
          >
            <div className="space-y-0">
              {timelineEvents.map((event, index) => (
                <ActivityTimelineItem 
                  key={index}
                  time={event.time}
                  title={event.title}
                  description={event.description}
                  icon={event.icon}
                  isLast={event.isLast}
                />
              ))}
            </div>
          </SectionCard>
        </div>

        <div className="order-11 w-full">
          <SectionCard 
            title="Código de Vestimenta" 
            icon={<Shirt size={28} />}
            animationDelay="1200ms"
          >
            <p>Formal Elegante</p>
            <p className="text-xs sm:text-sm text-foreground/70">(Ej: Traje para caballeros, vestido largo o cóctel para damas). ¡Queremos que brilles con nosotros!</p>
          </SectionCard>
        </div>

        <div className="order-12 w-full">
          <SectionCard 
            title="Sugerencia de Regalos" 
            icon={<Gift size={28} />}
            animationDelay="1300ms"
          >
            <p>Tu presencia es nuestro mayor regalo. Si además deseas obsequiarnos algo, Valentina agradecería contribuciones monetarias para sus futuros proyectos y estudios. Habrá un buzón disponible durante el evento.</p>
          </SectionCard>
        </div>

        <div className="order-13">
          <RsvpButton
            phoneNumber="15551234567" 
            message="¡Hola! Me encantaría confirmar mi asistencia al Sweet Sixteen de Valeria."
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-headline text-lg py-6 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 animate-in fade-in duration-1000 delay-[1400ms]"
          />
        </div>

        <p className="font-body text-xs text-muted-foreground pt-4 animate-in fade-in duration-1000 delay-[1500ms] order-14">
          ¡Te esperamos para celebrar juntos este día tan especial!
        </p>
      </div>
    </main>
  );
}

