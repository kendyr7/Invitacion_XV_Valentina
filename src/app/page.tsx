
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
  Utensils,
  Sparkles as SparklesIcon, 
  CakeSlice,
  PartyPopper,
  GlassWater,
  Martini, 
  Gem, 
  Camera,
  Disc3, 
  Car,
  Palette, // Added Palette icon
} from 'lucide-react';

export default function HomePage() {
  const audioSrc = "/audio/event-music.mp3"; 
  const eventTargetDate = "2025-08-01T19:00:00"; 

  const iconSizeTimeline = 28; 

  const timelineEventsNew = [
    { time: "7:00 PM", title: "Bienvenida & brindis", icon: <Martini size={iconSizeTimeline} className="text-primary"/> },
    { time: "7:30 PM", title: "Vals & baile dedicatorio", icon: <Gem size={iconSizeTimeline} className="text-primary"/> }, 
    { time: "8:00 PM", title: "Cena", icon: <Utensils size={iconSizeTimeline} className="text-primary"/> },
    { time: "9:00 PM", title: "Bocadillos & Photoboth", icon: <Camera size={iconSizeTimeline} className="text-primary"/> },
    { time: "10:00 PM", title: "Fiesta con DJ", icon: <Disc3 size={iconSizeTimeline} className="text-primary"/> }, 
    { time: "12:00 AM", title: "Cake", icon: <CakeSlice size={iconSizeTimeline} className="text-primary"/> },
    { time: "1:00 AM", title: "Despedida", icon: <Car size={iconSizeTimeline} className="text-primary"/> },
  ];


  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4 relative overflow-auto sm:overflow-hidden">
      <Image 
        src="https://placehold.co/1200x1800"
        fill
        objectFit="cover" 
        alt="Elegant event background" 
        className="absolute inset-0 z-[-1] opacity-20 filter blur-sm" 
        priority
        data-ai-hint="elegant floral"
      />
      
      <div 
        className="z-10 flex flex-col items-center text-center space-y-8 sm:space-y-10 max-w-2xl w-full bg-background/80 dark:bg-neutral-900/80 backdrop-blur-md p-4 sm:p-8 rounded-xl shadow-2xl my-8 animate-in fade-in slide-in-from-bottom-10 duration-700 bg-[url('/paper-texture.jpg')] bg-cover bg-center"
      >
        
        <Card className="bg-transparent border-none shadow-none w-full animate-in fade-in duration-1000 delay-200">
          <CardContent className="font-body text-base sm:text-lg text-foreground/80 space-y-1 pt-6">
            <p>Hay momentos inolvidables que</p>
            <p>se atesoran en el corazón para siempre.</p>
            <p>Por esa razón quiero que compartas</p>
            <p>conmigo éste día tan especial.</p>
          </CardContent>
        </Card>

        <div className="flex flex-col items-center mt-8 mb-6 animate-in fade-in duration-1000 delay-300">
          <Image src="/tiara.png" alt="Tiara" width={100} height={100} data-ai-hint="tiara crown" className="drop-shadow-lg"/>
          <p className="font-headline text-2xl sm:text-3xl text-primary mt-2 tracking-widest">Mis XV Años</p>
        </div>

        <div className="animate-in fade-in duration-1000 delay-400 mb-4 sm:mb-6">
          <p className="font-fleur-de-leah text-5xl sm:text-7xl text-primary">Valentina Fletes</p>
        </div>
        
        <MusicPlayer audioSrc={audioSrc} className="animate-in fade-in duration-1000 delay-500" />

        <Card className="bg-transparent border-none shadow-none w-full animate-in fade-in duration-1000 delay-600">
          <CardContent className="font-body text-base sm:text-lg text-foreground/80 space-y-1 pt-6">
            <p>Con la bendición de Dios y el amor de</p>
            <p>mis padres, te invito a celebrar con</p>
            <p>alegría este momento tan especial.</p>
            <p className="font-headline text-base sm:text-lg text-primary mt-2 tracking-widest">Mis XV Años</p>
          </CardContent>
        </Card>

        <EventDateDisplay 
          monthName="Agosto"
          dayName="Viernes"
          dayNumber="1"
          year="2025"
          className="animate-in fade-in duration-1000 delay-700"
        />

        <div className="w-full max-w-md animate-in fade-in duration-1000 delay-800">
          <CountdownTimer targetDate={eventTargetDate} />
        </div>
        
        <div className="w-full animate-in fade-in duration-1000 delay-900">
          <SectionCard
            title="Ceremonia Religiosa"
            locationButton={{ text: "Ver Ubicación", url: "https://maps.app.goo.gl/urnxoQk9w1md1kYGA" }}
          >
            <div className="flex flex-col items-center space-y-2 mb-3">
              <Image src="/church.png" alt="Iglesia Icon" width={40} height={40} className="shrink-0" data-ai-hint="church building"/>
            </div>
            <div className="mt-1 space-y-1 text-center">
              <p className="flex items-center justify-center">Parroquia Jesús de la Divina Misericordia</p>
              <p className="flex items-center justify-center"><i>Managua, 5:00 PM</i></p>
            </div>
          </SectionCard>
        </div>
        
        <div className="w-full animate-in fade-in duration-1000 delay-1000">
          <SectionCard 
            title="Recepción"
            locationButton={{ text: "Ver Ubicación", url: "https://maps.app.goo.gl/2nyhPou1JRjuhLdq9" }}
          >
            <div className="flex flex-col items-center space-y-2 mb-3">
              <GlassWater size={40} className="text-primary shrink-0"/>
            </div>
            <div className="mt-1 space-y-1 text-center">
              <p className="flex items-center justify-center">Club Terraza, Salón Azotea</p>
              <p className="flex items-center justify-center"><i>Managua, 7:00 PM</i></p>
            </div>
          </SectionCard>
        </div>

        <div className="w-full animate-in fade-in duration-1000 delay-1100">
          <SectionCard 
            title="Itinerario de Actividades" 
            icon={<ListChecks size={28} className="text-primary"/>}
            contentClassName="px-0 pt-4 pb-4" 
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              
              {timelineEventsNew.length > 0 && (
                 <div className="absolute top-0 bottom-0 left-1/2 w-[1.5px] bg-primary -translate-x-1/2 z-0"></div>
              )}
              <div className="space-y-0"> 
                {timelineEventsNew.map((event, index) => (
                  <ActivityTimelineItem 
                    key={index}
                    time={event.time}
                    title={event.title}
                    icon={event.icon}
                    align={index % 2 === 0 ? 'left' : 'right'} 
                  />
                ))}
              </div>
            </div>
          </SectionCard>
        </div>

        <div className="w-full animate-in fade-in duration-1000 delay-1200">
          <SectionCard 
            title="Código de Vestimenta" 
          >
             <Image src="/dress-code.png" alt="Código de Vestimenta Formal" width={300} height={300} className="mx-auto mt-3 mb-3" data-ai-hint="formal attire" />
             <div><p className="text-sm sm:text-base text-foreground/90">Formal</p></div>
          </SectionCard>
        </div>

        <div className="w-full animate-in fade-in duration-1000 delay-1300ms">
          <SectionCard
            title="Colores Reservados"
            icon={<Palette size={28} className="text-primary"/>}
          >
            <div className="flex justify-center space-x-3 mt-2">
              {/* Replace these placeholders with your actual images from /public/colors/ */}
              <Image src="https://placehold.co/50x50.png" alt="Color Reservado 1" width={50} height={50} className="rounded-md shadow-md" data-ai-hint="color swatch" />
              <Image src="https://placehold.co/50x50.png" alt="Color Reservado 2" width={50} height={50} className="rounded-md shadow-md" data-ai-hint="color swatch" />
              <Image src="https://placehold.co/50x50.png" alt="Color Reservado 3" width={50} height={50} className="rounded-md shadow-md" data-ai-hint="color swatch" />
            </div>
            <p className="text-xs text-foreground/70 mt-3 px-4">
              Con cariño, te pedimos considerar estos tonos como reservados para la quinceañera y su corte, permitiéndoles brillar en este día especial.
            </p>
          </SectionCard>
        </div>

        <div className="w-full animate-in fade-in duration-1000 delay-1400ms">
          <SectionCard 
            title="Sugerencia de Regalos" 
            icon={<Gift size={28} className="text-primary"/>}
          >
            <p>Tu presencia es nuestro mayor regalo. Si además deseas obsequiarnos algo, Valentina agradecería contribuciones monetarias para sus futuros proyectos y estudios. Habrá un buzón disponible durante el evento.</p>
          </SectionCard>
        </div>

        <div className="flex flex-col items-center animate-in fade-in duration-1000 delay-1500ms">
           <Image
              src="/whatsapp-50.png" 
              alt="WhatsApp Icon"
              width={50}
              height={50}
              className="shrink-0"
              data-ai-hint="whatsapp logo"
            />
          <p className="text-center mt-2 font-headline text-lg text-primary tracking-widest">
            Confirmar Asistencia
          </p>
          <RsvpButton
            phoneNumber="84642286" 
            message="¡Hola! Me encantaría confirmar mi asistencia al XV años de Valentina."
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-headline text-lg py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 mt-3"
          />
        </div>

        <div className="animate-in fade-in duration-1000 delay-1600ms pt-4">
            <p className="font-body text-base sm:text-lg text-foreground/80">¡Te esperamos para celebrar juntos!</p>
        </div>

        <div className="animate-in fade-in duration-1000 delay-1700ms mb-4 sm:mb-6">
          <p className="font-fleur-de-leah text-1xl sm:text-2xl text-primary">Muchas Gracias!</p>
        </div>
      </div>
    </main>
  );
}
    
