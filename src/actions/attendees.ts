'use server';

import { revalidatePath } from 'next/cache';
import { format } from 'date-fns';

export interface Attendee {
  id: number;
  name: string;
  confirmedAt: string;
}

// NOTE: This is an in-memory store. Data will be lost when the server restarts.
// In a real production application, you would replace this with a database like Firestore or Prisma.
let attendees: Attendee[] = [];
let nextId = 1;

export async function getAttendees(): Promise<Attendee[]> {
  return Promise.resolve(attendees);
}

export async function addAttendee(name: string) {
  if (!name.trim()) {
    return { success: false, message: 'Name cannot be empty' };
  }
  
  const newAttendee: Attendee = {
    id: nextId++,
    name,
    confirmedAt: format(new Date(), 'yyyy-MM-dd h:mm a'),
  };
  
  attendees.push(newAttendee);
  
  revalidatePath('/admin/attendees');
  
  return { success: true, attendee: newAttendee };
}

export async function removeAttendee(formData: FormData) {
  const attendeeId = Number(formData.get('attendeeId'));

  if (isNaN(attendeeId)) {
    return { success: false, message: 'Invalid attendee ID' };
  }

  attendees = attendees.filter((attendee) => attendee.id !== attendeeId);
  
  revalidatePath('/admin/attendees');
  
  return { success: true };
}
