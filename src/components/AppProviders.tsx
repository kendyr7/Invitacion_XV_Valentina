'use client';

import { ReactNode } from 'react';
import { AuthContextProvider } from '@/context/AuthContext';
import { AttendeesProvider } from '@/context/AttendeesContext';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthContextProvider>
      <AttendeesProvider>
        {children}
      </AttendeesProvider>
    </AuthContextProvider>
  );
}
