import { useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

type DialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function Dialog({ open, onClose, title, children, className }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="dialog-title"
      className={cn(
        'dialog-surface fixed top-1/2 left-1/2 w-[min(100%-2rem,40rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl border-0 shadow-xl',
        className,
      )}
      onCancel={event => {
        event.preventDefault();
        onClose();
      }}
      onClick={event => {
        if (event.target === dialogRef.current) {
          onClose();
        }
      }}
    >
      <div className="bg-canvas max-h-[85vh] overflow-y-auto rounded-2xl p-6 lg:p-10">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h2 id="dialog-title" className="font-headline-md text-headline-md text-stone-800">
            {title}
          </h2>
          <button
            type="button"
            aria-label="Close dialog"
            onClick={onClose}
            className="text-support hover:text-brand flex h-8 w-8 flex-none items-center justify-center rounded-full transition-colors"
          >
            <FontAwesomeIcon
              icon={faXmark}
              aria-hidden="true"
              className="hover:bg-brand-soft/30 border-line-soft text-support rounded-full border px-2 py-1.5 text-2xl"
            />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}
