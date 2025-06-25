'use client';

import Image from 'next/image';
import { useState } from 'react';
import MusicPlayer from '@/components/event/MusicPlayer';
import CountdownTimer from '@/components/event/CountdownTimer';
import RsvpButton from '@/components/event/RsvpButton';
import { Card, CardContent } from '@/components/ui/card';
import SectionCard from '@/components/event/SectionCard';
import ActivityTimelineItem from '@/components/event/ActivityTimelineItem';
import EventDateDisplay from '@/components/event/EventDateDisplay';
import { Input } from '@/components/ui/input';
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
  Palette,
  Brush,
  Wine,
  Bus
} from 'lucide-react';

export default function HomePage() {
  const [guestName, setGuestName] = useState('');
  const audioSrc = "/audio/paradise-coldplay.mp3"; 
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

  const baseMessage = "¡Hola! Me encantaría confirmar mi asistencia al XV años de Valentina.";
  const confirmationMessage = guestName 
    ? `¡Hola! Soy ${guestName.trim()}. Me encantaría confirmar mi asistencia al XV años de Valentina.` 
    : baseMessage;

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    img.style.width = '200px';
    img.style.height = '200px';
  };


  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground relative overflow-auto sm:overflow-hidden">
      <Image 
        src="/"
        fill
        objectFit="cover" 
        alt="Elegant event background" 
        className="absolute inset-0 z-[-1] opacity-20 filter blur-sm" 
        priority
        data-ai-hint="elegant floral"
      />
      
      <div 
        className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full bg-background/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-xl shadow-2xl my-8 animate-in fade-in slide-in-from-bottom-10 duration-700 bg-[url('/paper-texture.jpg')] bg-cover bg-center overflow-hidden"
      >
        <Image
          src="/flowers_deco/flowers.png"
          alt="Decoración floral superior izquierda"
          width={1280}
          height={953}
          className="absolute top-0 left-0 opacity-80 z-0 animate-in fade-in duration-1000 delay-100"
          data-ai-hint="floral corner decoration"
        />
        <div className="mt-12 relative z-10 flex flex-col items-center text-center space-y-8 sm:space-y-10 p-4 sm:p-8">
        
          <Card className="bg-transparent border-none shadow-none w-full animate-in fade-in duration-1000 delay-200">
            <CardContent className="font-body text-base sm:text-lg text-foreground/80 space-y-1 pt-6">
              <br/>
              <p>Hay sueños que se viven una sola vez…</p>
              <p>y este es uno de ellos.</p>
              <br/>
              <p>Te invito a compartir conmigo <br/>este día tan especial</p>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center mt-8 mb-6 animate-in fade-in duration-1000 delay-300">
            <Image src="/tiara.png" alt="Tiara" width={100} height={100} data-ai-hint="tiara crown" className="drop-shadow-lg"/>
            <p className="font-headline text-2xl sm:text-3xl text-primary mt-2 tracking-widest">Mis XV Años</p>
          </div>

          <div className="animate-in fade-in duration-1000 delay-400 mb-4 sm:mb-6">
            <p className="font-delistan text-6xl sm:text-8xl text-primary">Valentina Fletes</p>
          </div>
          
          <MusicPlayer audioSrc={audioSrc} autoPlay={true} className="animate-in fade-in duration-1000 delay-500" />

          <Card className="bg-transparent border-none shadow-none w-full animate-in fade-in duration-1000 delay-600">
            <CardContent className="font-body text-base sm:text-lg text-foreground/80 space-y-1 pt-6">
              <p>Con la bendición de Dios y el amor de</p>
              <p>mis padres, te espero con ilusión para</p>
              <p>compartir este día tan soñado.</p>
              <p className="font-headline text-base sm:text-lg text-primary mt-2 tracking-widest">Mis XV Años</p>
            </CardContent>
          </Card>

          <EventDateDisplay 
            monthName="Agosto"
            dayName="Viernes"
            dayNumber="1"
            year="2025"
            className="animate-in fade-in duration-1000 delay-700 text-primary"
          />

          <div className="w-full max-w-md animate-in fade-in duration-1000 delay-800">
            <CountdownTimer targetDate={eventTargetDate} />
          </div>

          <div className="animate-in fade-in duration-1000 delay-900">
            <Image
              src="/flowers_deco/pink_flower_d.png"
              alt="Pink Flower Decoration"
              width={400}
              height={242}
              data-ai-hint="pink flower"
            />
          </div>
          
          <div className="w-full animate-in fade-in duration-1000 delay-1000">
            <SectionCard
              title="Ceremonia Religiosa"
              locationButton={{ text: "Ver Ubicación", url: "https://maps.app.goo.gl/urnxoQk9w1md1kYGA" }}
              titleClassName="text-primary"
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
          
          <div className="w-full animate-in fade-in duration-1000 delay-1100">
            <SectionCard 
              title="Recepción"
              locationButton={{ text: "Ver Ubicación", url: "https://maps.app.goo.gl/2nyhPou1JRjuhLdq9" }}
              titleClassName="text-primary"
            >
              <div className="flex flex-col items-center space-y-2 mb-3">
                <Image src="/champagne.png" alt="champagne Icon" width={40} height={40} className="shrink-0" data-ai-hint="champagne"/>
              </div>
              <div className="mt-1 space-y-1 text-center">
                <p className="flex items-center justify-center">Club Terraza, Salón Azotea</p>
                <p className="flex items-center justify-center"><i>Managua, 7:00 PM</i></p>
              </div>
            </SectionCard>
          </div>

          <div className="w-full animate-in fade-in duration-1000 delay-1200">
            <SectionCard 
              title="Itinerario de Actividades" 
              icon={<ListChecks size={28} className="text-primary"/>}
              contentClassName="px-0 pt-4 pb-4" 
              titleClassName="text-primary"
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

          <div className="w-full animate-in fade-in duration-1000 delay-[1300ms]">
            <SectionCard 
              title="Código de Vestimenta"
              titleClassName="text-primary"
            >
              <div><p className="text-sm sm:text-base text-foreground/90">Formal</p></div>

               <Image src="/dress-code.png" alt="Código de Vestimenta Formal" width={300} height={300} className="mx-auto mt-3 mb-3" data-ai-hint="formal attire" />
            </SectionCard>
          </div>

          <div className="w-full animate-in fade-in duration-1000 delay-[1400ms]">
            <SectionCard
              title="Colores Reservados"
              icon={<Palette size={28} className="text-primary"/>}
              titleClassName="text-primary"
            >
              <div className="flex justify-center space-x-3 mt-2">
                <Image src="/colors/color1.jpeg" alt="Color Reservado 1" width={50} height={50} className="rounded-md shadow-md cursor-pointer transition-all duration-300 ease-in-out" data-ai-hint="color swatch" onClick={handleImageClick} />
                <Image src="/colors/color2.jpeg" alt="Color Reservado 2" width={50} height={50} className="rounded-md shadow-md cursor-pointer transition-all duration-300 ease-in-out" data-ai-hint="color swatch" onClick={handleImageClick} />
                <Image src="/colors/color3.jpeg" alt="Color Reservado 3" width={50} height={50} className="rounded-md shadow-md cursor-pointer transition-all duration-300 ease-in-out" data-ai-hint="color swatch" onClick={handleImageClick} />
              </div> <br />
              <p className="text-foreground/70 mt-3 px-4">
                Con cariño, te pedimos considerar estos tonos como reservados para la quinceañera y su corte, permitiéndoles brillar en este día especial.
              </p>
            </SectionCard>
          </div>


          <div className="w-full animate-in fade-in duration-1000 delay-[1500ms]">
            <SectionCard 
              title="Sugerencia de Regalos" 
              icon={<Gift size={28} className="text-primary"/>}
              titleClassName="text-primary"
            >
              <p>Tu presencia es nuestro mayor regalo. Si además deseas obsequiarnos algo, Valentina agradecería contribuciones monetarias para sus futuros proyectos y estudios. Habrá un buzón disponible durante el evento.</p>
            </SectionCard>
          </div>
        </div>
        
        <div className="relative w-full">
          <Image
          src="/flowers_deco/flowers_deco.png"
          alt="Decoración floral en la parte inferior"
          width={600}
          height={150} 
          className="w-full h-auto"
          data-ai-hint="floral decoration"
          />
            <div className="absolute inset-0 flex flex-col items-center p-4 pt-8 sm:pt-10">
              <div className="mt-3 flex flex-col items-center animate-in fade-in duration-1000 delay-[200ms] w-full max-w-xs">
                <Image
                    src="/whatsapp-50.png" 
                    alt="WhatsApp Icon"
                    width={50}
                    height={50}
                    className="shrink-0"
                    data-ai-hint="whatsapp logo"
                  />
                <p className="text-center mt-2 font-headline text-lg text-primary tracking-widest mt-3 pt-3 sm:pt-3">
                  Confirmar Asistencia
                </p>
                <Input
                  type="text"
                  placeholder="Nombre y Apellido"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="mt-4 mb-3 bg-white/80 border-primary text-center w-full max-w-[280px] placeholder:text-foreground/50"
                  aria-label="Tu nombre y apellido"
                />
                <RsvpButton
                  phoneNumber="84642286" 
                  message={confirmationMessage}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-headline text-lg py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full"
                  disabled={!guestName.trim()}
                />
              </div>
              <div className="animate-in fade-in duration-1000 delay-[400ms] mt-12 pt-11 sm:pt-15">
                <p className="font-body text-base sm:text-lg text-foreground/80">¡Gracias por acompañarme <br/> en este día tan especial! <br/> ❤️</p>
              </div>
            </div>
        </div>
      </div>
    </main>
  );
}
