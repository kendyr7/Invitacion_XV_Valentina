'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Trash2 } from 'lucide-react';
import { useAttendees } from '@/context/AttendeesContext';
import { Button } from '@/components/ui/button';

export default function AttendeesPage() {
  const { attendees, removeAttendee } = useAttendees();

  return (
    <main className="flex min-h-screen flex-col items-center bg-background p-4 pt-0 sm:p-8">
      <Card className="w-full max-w-4xl shadow-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl sm:text-3xl text-primary">
            <Users className="h-8 w-8" />
            <span>Invitados Confirmados</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre del Invitado</TableHead>
                  <TableHead>Fecha de Confirmación</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendees.map((attendee) => (
                  <TableRow key={attendee.id}>
                    <TableCell className="font-medium">{attendee.name}</TableCell>
                    <TableCell>{attendee.confirmedAt}</TableCell>
                    <TableCell className="text-right">
                       <Button variant="ghost" size="icon" onClick={() => removeAttendee(attendee.id)}>
                         <Trash2 className="h-4 w-4 text-destructive" />
                         <span className="sr-only">Eliminar</span>
                       </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
           {attendees.length === 0 && (
            <div className="text-center py-10 text-muted-foreground">
              Aún no hay invitados confirmados.
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
