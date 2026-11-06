"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

export function Modal({ open, title, onClose, children }: { open: boolean; title: string; onClose: () => void; children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog ref={dialogRef} onCancel={onClose} onClose={onClose} className="m-auto w-[min(92vw,36rem)] rounded-card border border-border bg-background p-0 text-foreground shadow-card backdrop:bg-black/45">
      <div className="flex items-center justify-between border-b border-border p-5">
        <h2 className="font-display text-2xl">{title}</h2>
        <button className="icon-button" type="button" aria-label="Close dialog" onClick={onClose}><X aria-hidden="true" size={20} /></button>
      </div>
      <div className="p-5">{children}</div>
    </dialog>
  );
}
