'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { format } from 'date-fns';

interface Attendee {
  id: number;
  name: string;
  confirmedAt: string;
}

interface AttendeesContextType {
  attendees: Attendee[];
  addAttendee: (name: string) => void;
  removeAttendee: (id: number) => void;
}

const AttendeesContext = createContext<AttendeesContextType | undefined>(undefined);

const initialAttendees: Attendee[] = [];

export function AttendeesProvider({ children }: { children: ReactNode }) {
  const [attendees, setAttendees] = useState<Attendee[]>(initialAttendees);

  const addAttendee = (name: string) => {
    const newAttendee: Attendee = {
      id: Date.now(),
      name,
      confirmedAt: format(new Date(), 'yyyy-MM-dd h:mm a'),
    };
    setAttendees((prev) => [...prev, newAttendee]);
  };

  const removeAttendee = (id: number) => {
    setAttendees((prev) => prev.filter((attendee) => attendee.id !== id));
  };

  return (
    <AttendeesContext.Provider value={{ attendees, addAttendee, removeAttendee }}>
      {children}
    </AttendeesContext.Provider>
  );
}

export function useAttendees() {
  const context = useContext(AttendeesContext);
  if (context === undefined) {
    throw new Error('useAttendees must be used within an AttendeesProvider');
  }
  return context;
}
