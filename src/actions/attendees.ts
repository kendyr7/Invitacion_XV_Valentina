'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/firebase';
import { 
  collection, 
  getDocs, 
  addDoc, 
  doc, 
  updateDoc, 
  serverTimestamp, 
  Timestamp, 
  query, 
  orderBy,
  getDoc
} from 'firebase/firestore';

export interface Attendee {
  id: string; // Firestore document ID
  name: string;
  confirmedAt: string; // Formatted date string
  archived: boolean;
}

const formatTimestamp = (timestamp: Timestamp): string => {
  const date = timestamp.toDate();
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
  return formatter.format(date).replace(',', '');
};

export async function getAttendees(): Promise<Attendee[]> {
  try {
    const attendeesCol = collection(db, 'attendees');
    const q = query(attendeesCol, orderBy('confirmedAt', 'desc'));
    const attendeeSnapshot = await getDocs(q);
    const attendeeList = attendeeSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        confirmedAt: data.confirmedAt ? formatTimestamp(data.confirmedAt as Timestamp) : 'Fecha no disponible',
        archived: data.archived || false,
      };
    });
    return attendeeList;
  } catch (error) {
    console.error("Error fetching attendees: ", error);
    return [];
  }
}

export async function addAttendee(name: string) {
  if (!name.trim()) {
    return { success: false, message: 'Name cannot be empty' };
  }

  try {
    const newAttendeeRef = await addDoc(collection(db, 'attendees'), {
      name: name.trim(),
      confirmedAt: serverTimestamp(),
      archived: false,
    });
    
    revalidatePath('/admin/attendees');
    
    return { success: true, attendeeId: newAttendeeRef.id };
  } catch (error) {
    console.error("Error adding attendee: ", error);
    return { success: false, message: 'Could not add attendee to database.' };
  }
}

export async function toggleArchiveAttendee(formData: FormData) {
  const attendeeId = formData.get('attendeeId') as string;

  if (!attendeeId) {
    return { success: false, message: 'Invalid attendee ID' };
  }

  const attendeeRef = doc(db, 'attendees', attendeeId);

  try {
    const attendeeSnap = await getDoc(attendeeRef);
    if (!attendeeSnap.exists()) {
      return { success: false, message: 'Attendee not found' };
    }
    const currentArchivedState = attendeeSnap.data().archived;

    await updateDoc(attendeeRef, {
      archived: !currentArchivedState,
    });
    
    revalidatePath('/admin/attendees');
    
    return { success: true };
  } catch (error) {
    console.error("Error toggling archive state: ", error);
    return { success: false, message: 'Could not update attendee.' };
  }
}
