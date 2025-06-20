

import Image from 'next/image';
import MusicPlayer from '@/components/event/MusicPlayer';
import CountdownTimer from '@/components/event/CountdownTimer';
import RsvpButton from '@/components/event/RsvpButton';
import { Card, CardContent } from '@/components/ui/card';
import SectionCard from '@/components/event/SectionCard';
import ActivityTimelineItem from '@/components/event/ActivityTimelineItem';
import EventDateDisplay from '@/components/event/EventDateDisplay';
import { 
  Gift, 
  ListChecks,
  Users,
  Utensils,
  Milestone,
  SparklesIcon as Sparkles,
  Music2,
  CakeSlice,
  Moon,
  PartyPopper
} from 'lucide-react';

export default function HomePage() {
  const audioSrc = "/audio/event-music.mp3"; 
  const eventTargetDate = "2025-08-01T19:00:00"; 

  const timelineEvents = [
    { time: "7:00 PM", title: "BIENVENIDA Y CÓCTEL", icon: <Users size={18} />, description: "RECIBIMOS A NUESTROS QUERIDOS INVITADOS." },
    { time: "8:00 PM", title: "CENA", icon: <Utensils size={18} />, description: "DISFRUTEMOS DE UNA DELICIOSA CENA JUNTOS." },
    { time: "9:00 PM", title: "VALS Y PALABRAS", icon: <Milestone size={18} />, description: "UN MOMENTO ESPECIAL Y EMOTIVO." },
    { time: "9:30 PM", title: "SHOW SORPRESA", icon: <Sparkles size={18} /> },
    { time: "10:00 PM", title: "APERTURA DE PISTA / BAILE", icon: <Music2 size={18} />, description: "¡A BAILAR!" },
    { time: "11:30 PM", title: "PASTEL", icon: <CakeSlice size={18} />, description: "CELEBREMOS CON UN DULCE MOMENTO." },
    { time: "12:00 AM", title: "¡LA FIESTA CONTINÚA!", icon: <PartyPopper size={18} /> },
    { time: "2:00 AM", title: "FIN DE FIESTA", icon: <Moon size={18} />, isLast: true },
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
          <CardContent className="font-body text-base sm:text-lg text-foreground/80 space-y-1 pt-6">
            <p>HAY MOMENTOS INOLVIDABLES QUE</p>
            <p>SE ATESORAN EN EL CORAZÓN PARA SIEMPRE</p>
            <p>POR ESA RAZÓN QUIERO QUE COMPARTAS</p>
            <p>CONMIGO ÉSTE DIA TAN ESPECIAL</p>
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
          <CardContent className="font-body text-base sm:text-lg text-foreground/80 space-y-1 pt-6">
            <p>CON LA BENDICIÓN DE DIOS Y EL AMOR DE</p>
            <p>MIS PADRES, TE INVITO A CELEBRAR CON</p>
            <p>ALEGRÍA ESTE MOMENTO TAN ESPECIAL</p>
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
            title="CEREMONIA RELIGIOSA"
            locationButton={{ text: "Ver Ubicación", url: "https://maps.app.goo.gl/urnxoQk9w1md1kYGA" }}
            animationDelay="900ms"
            titleClassName="uppercase"
          >
            <div className="flex flex-col items-center space-y-2 mb-3">
              <Image src="/church.png" alt="Church Icon" width={40} height={40} className="shrink-0" data-ai-hint="church building" />
            </div>
            <div className="mt-1 space-y-1 text-center">
              <p className="flex items-center justify-center uppercase">Parroquia Jesús de la Divina Misericordia</p>
              <p className="flex items-center justify-center uppercase"><i>Managua, 5:00 PM</i></p>
            </div>
          </SectionCard>
        </div>
        
        <div className="order-9 w-full">
          <SectionCard 
            title="RECEPCIÓN"
            locationButton={{ text: "Ver Ubicación", url: "https://maps.app.goo.gl/2nyhPou1JRjuhLdq9" }}
            animationDelay="1000ms"
            titleClassName="uppercase"
          >
            <div className="flex flex-col items-center space-y-2 mb-3">
              <Image src="/champagne.png" alt="Champagne Glasses Icon" width={40} height={40} className="shrink-0" data-ai-hint="champagne glasses celebration"/>
            </div>
            <div className="mt-1 space-y-1 text-center">
              <p className="flex items-center justify-center uppercase">Club Terraza, Salón Azotea</p>
              <p className="flex items-center justify-center uppercase"><i>Managua, 7:00 PM</i></p>
            </div>
          </SectionCard>
        </div>

        <div className="order-10 w-full">
          <SectionCard 
            title="ITINERARIO DE ACTIVIDADES" 
            icon={<ListChecks size={28} className="text-accent"/>}
            contentClassName="px-2 sm:px-4 pt-4"
            animationDelay="1100ms"
            titleClassName="uppercase"
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
            title="CÓDIGO DE VESTIMENTA" 
            animationDelay="1200ms"
            titleClassName="uppercase"
          >
            <p className="text-xs sm:text-sm text-foreground/70 uppercase">Formal</p>
            <Image src="/dress-code.png" alt="Código de Vestimenta Formal Elegante" width={150} height={150} className="mx-auto mb-3" data-ai-hint="formal attire" />
          </SectionCard>
        </div>

        <div className="order-12 w-full">
          <SectionCard 
            title="SUGERENCIA DE REGALOS" 
            icon={<Gift size={28} className="text-accent"/>}
            animationDelay="1300ms"
            titleClassName="uppercase"
          >
            <p className="uppercase">TU PRESENCIA ES NUESTRO MAYOR REGALO. SI ADEMÁS DESEAS OBSEQUIARNOS ALGO, VALENTINA AGRADECERÍA CONTRIBUCIONES MONETARIAS PARA SUS FUTUROS PROYECTOS Y ESTUDIOS. HABRÁ UN BUZÓN DISPONIBLE DURANTE EL EVENTO.</p>
          </SectionCard>
        </div>

        <div className="order-13 flex flex-col items-center animate-in fade-in duration-1000 delay-[1400ms]">
           <Image
              src="/whatsapp-50.png"
              alt="WhatsApp Icon"
              width={50}
              height={50}
              className="shrink-0"
              data-ai-hint="whatsapp logo"
            />
          <p className="text-center mt-2 font-headline text-lg text-accent tracking-widest uppercase">
            CONFIRMAR ASISTENCIA
          </p>
          <RsvpButton
            phoneNumber="84642286" 
            message="¡Hola! Me encantaría confirmar mi asistencia al XV años de Valentina."
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-headline text-lg py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 mt-3"
          />
        </div>

        <div className="order-last animate-in fade-in duration-1000 delay-[1500ms] pt-4">
            <p className="font-body text-base sm:text-lg text-foreground/80 uppercase">¡TE ESPERAMOS PARA CELEBRAR JUNTOS!</p>
        </div>
      </div>
    </main>
  );
}
