import type { ReactNode } from 'react';

type PillProps = {
  children: ReactNode;
  className?: string;
};

export default function Pill({ children, className }: PillProps) {
  return (
    <span
      className={['bg-surface-200 rounded-full px-3 py-1', className].filter(Boolean).join(' ')}
    >
      {children}
    </span>
  );
}

type PillGroupProps = {
  children: ReactNode;
  className?: string;
};

export function PillGroup({ children, className }: PillGroupProps) {
  return (
    <div className={['text-label-sm flex flex-wrap gap-4', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}
