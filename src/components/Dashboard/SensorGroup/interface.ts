import { type ReactNode } from 'react';

export interface SensorGroupProps {
  name: string;
  averagePower: number;
  children: ReactNode;
}
