import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type PillProps = {
  children: ReactNode;
  className?: string;
};

export default function Pill({ children, className }: PillProps) {
  return <span className={cn('bg-surface-200 rounded-full px-3 py-1', className)}>{children}</span>;
}

type PillGroupProps = {
  children: ReactNode;
  className?: string;
};

export function PillGroup({ children, className }: PillGroupProps) {
  return <div className={cn('text-label-sm flex flex-wrap gap-4', className)}>{children}</div>;
}
