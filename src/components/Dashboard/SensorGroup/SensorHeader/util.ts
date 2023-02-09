import { type CircularProgressProps } from '@mui/material';

export function getProgressColor(percentage: number): CircularProgressProps['color'] {
  if (percentage > 80) return 'error';

  if (percentage > 70) return 'warning';

  return 'info';
}

export function formatName(name: string): string {
  return name
    .split('_')
    .map((word: string) => word.slice(0, 1).toUpperCase() + word.slice(1).toLocaleLowerCase())
    .join(' ');
}
