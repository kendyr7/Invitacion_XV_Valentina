'use server';

import { revalidatePath } from 'next/cache';
import { format } from 'date-fns';

export interface Attendee {
  id: number;
  name: string;
  confirmedAt: string;
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

const db = getDb();


export async function getAttendees(): Promise<Attendee[]> {
  // Return a copy to prevent direct mutation of the "database"
  return Promise.resolve([...db.attendees]);
}

export async function addAttendee(name: string) {
  if (!name.trim()) {
    return { success: false, message: 'Name cannot be empty' };
  }
  
  const newAttendee: Attendee = {
    id: db.nextId++,
    name,
    confirmedAt: format(new Date(), 'yyyy-MM-dd h:mm a'),
  };
  
  db.attendees.push(newAttendee);
  
  revalidatePath('/admin/attendees');
  
  return { success: true, attendee: newAttendee };
}

export async function removeAttendee(formData: FormData) {
  const attendeeId = Number(formData.get('attendeeId'));

  if (isNaN(attendeeId)) {
    return { success: false, message: 'Invalid attendee ID' };
  }

  db.attendees = db.attendees.filter((attendee) => attendee.id !== attendeeId);
  
  revalidatePath('/admin/attendees');
  
  return { success: true };
}
