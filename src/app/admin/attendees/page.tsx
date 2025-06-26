import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from 'lucide-react';

// Mock data for attendees. In a real application, this would come from a database.
const attendees = [
  { id: 1, name: "Juan Pérez", confirmedAt: "2024-07-20 10:00 AM" },
  { id: 2, name: "Maria Garcia", confirmedAt: "2024-07-20 11:30 AM" },
  { id: 3, name: "Carlos Rodriguez", confirmedAt: "2024-07-21 09:15 AM" },
  { id: 4, name: "Ana Martinez", confirmedAt: "2024-07-21 02:45 PM" },
  { id: 5, name: "Luis Hernandez", confirmedAt: "2024-07-22 08:00 AM" },
];

export default function AttendeesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
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
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Nombre del Invitado</TableHead>
                  <TableHead>Fecha de Confirmación</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendees.map((attendee) => (
                  <TableRow key={attendee.id}>
                    <TableCell className="font-medium">{attendee.id}</TableCell>
                    <TableCell>{attendee.name}</TableCell>
                    <TableCell>{attendee.confirmedAt}</TableCell>
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
