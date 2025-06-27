'use server';

import { revalidatePath } from 'next/cache';

export interface Attendee {
  id: number;
  name: string;
  confirmedAt: string;
  archived: boolean;
}

// HACK: This is a workaround to persist data in-memory across hot reloads in dev.
// In a real app, you would use a database like Firestore.
type AppDb = {
  attendees: Attendee[];
  nextId: number;
};

const getDb = (): AppDb => {
  const globalWithDb = globalThis as unknown as { __db: AppDb | undefined };
  if (!globalWithDb.__db) {
    globalWithDb.__db = { attendees: [], nextId: 1 };
  }
  return globalWithDb.__db;
};

export async function getAttendees(): Promise<Attendee[]> {
  const db = getDb();
  // Return a copy to prevent direct mutation of the "database"
  return Promise.resolve([...db.attendees]);
}

export async function addAttendee(name: string) {
  if (!name.trim()) {
    return { success: false, message: 'Name cannot be empty' };
  }

  const db = getDb();
  
  const now = new Date();
  const formatter = new Intl.DateTimeFormat('es-NI', {
      timeZone: 'America/Managua',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
  });
  // The output for 'es-NI' is like "01/08/2025, 19:00". The comma needs to be removed.
  const formattedNicaraguaTime = formatter.format(now).replace(',', '');
  
  const newAttendee: Attendee = {
    id: db.nextId++,
    name,
    confirmedAt: formattedNicaraguaTime,
    archived: false,
  };
  
  db.attendees.push(newAttendee);
  
  revalidatePath('/admin/attendees');
  
  return { success: true, attendee: newAttendee };
}

export async function toggleArchiveAttendee(formData: FormData) {
  const db = getDb();
  const attendeeId = Number(formData.get('attendeeId'));

  if (isNaN(attendeeId)) {
    return { success: false, message: 'Invalid attendee ID' };
  }

  const attendeeExists = db.attendees.some(attendee => attendee.id === attendeeId);
  if (!attendeeExists) {
      return { success: false, message: 'Attendee not found' };
  }

  db.attendees = db.attendees.map((attendee) => {
    if (attendee.id === attendeeId) {
      return { ...attendee, archived: !attendee.archived };
    }
    return attendee;
  });
  
  revalidatePath('/admin/attendees');
  
  return { success: true };
}
