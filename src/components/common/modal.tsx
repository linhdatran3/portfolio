import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// ----------------------------------------------------
// Types
// ----------------------------------------------------
export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

export type ModalActionVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "link";

export interface ModalAction {
  /** Unique key for React list rendering */
  key?: string;
  /** Button label */
  label: React.ReactNode;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  /** shadcn button variant */
  variant?: ModalActionVariant;
  /** Disable the button */
  disabled?: boolean;
  /** Show loading state (you control it) */
  loading?: boolean;
  /** Auto focus this button when modal opens */
  autoFocus?: boolean;
  /** Optional leading icon */
  leftIcon?: React.ReactNode;
  /** Optional trailing icon */
  rightIcon?: React.ReactNode;
}

export interface ModalClassNames {
  /** DialogOverlay */
  overlay?: string;
  /** DialogContent */
  content?: string;
  /** Sticky header container */
  header?: string;
  /** Scrollable body container */
  body?: string;
  /** Sticky footer container */
  footer?: string;
  /** Close button */
  close?: string;
  layout?: string;
}

export interface ModalProps {
  /** Controlled open state */
  open: boolean;
  /** onOpenChange from shadcn Dialog */
  onOpenChange: (open: boolean) => void;
  /** Optional title (ReactNode). If provided, it's rendered and pinned to the top */
  title?: React.ReactNode;
  /** Optional description for screen readers */
  description?: string;
  /** Required content (ReactNode). This area becomes scrollable when overflowing */
  children: React.ReactNode;
  /** Footer visibility. If false, footer is hidden (useful for simple notifications) */
  isShowFooter?: boolean;
  /** Action buttons rendered in footer (right-aligned). Ignored if isShowFooter=false */
  actions?: ModalAction[];
  /** Size presets */
  size?: ModalSize;
  /** Hide the top-right close button */
  hideCloseButton?: boolean;
  /** Prevent closing when clicking outside */
  preventCloseOnOutsideClick?: boolean;
  /** Tailwind className overrides */
  classNames?: ModalClassNames;
}

// ----------------------------------------------------
// Helpers
// ----------------------------------------------------
const sizeMap: Record<ModalSize, string> = {
  sm: "sm:max-w-xs",
  md: "sm:max-w-lg",
  lg: "sm:max-w-xl",
  xl: "sm:max-w-2xl",
  full: "sm:max-w-[90vw]",
};

// ----------------------------------------------------
// Component
// ----------------------------------------------------
export default function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  isShowFooter = true,
  actions = [],
  size = "md",
  hideCloseButton = false,
  preventCloseOnOutsideClick = false,
  classNames,
}: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay
          className={cn(
            "bg-background/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            classNames?.overlay
          )}
        />

        <DialogContent
          className={cn(
            "gap-0 p-0 border",
            "shadow-xl rounded-2xl",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "w-[92vw]",
            sizeMap[size],
            classNames?.content
          )}
          onInteractOutside={(e) => {
            if (preventCloseOnOutsideClick) e.preventDefault();
          }}
        >
          {/* Layout wrapper ensures header/footer pinned, body scrolls */}
          <div className={cn("flex max-h-[85svh] flex-col", classNames?.layout)}>
            {/* Header (sticky) */}
            {(title || !hideCloseButton) && (
              <div
                className={cn(
                  "sticky top-0 z-10 flex items-center justify-between gap-4 border-b bg-background px-5 py-3 backdrop-blur rounded-t-xl",
                  classNames?.header
                )}
              >
                <div className="min-h-6">
                  {title ? (
                    <DialogTitle className="text-base font-semibold leading-tight">
                      {title}
                    </DialogTitle>
                  ) : (
                    <span className="sr-only">Modal</span>
                  )}
                  {description ? (
                    <DialogDescription className="sr-only">{description}</DialogDescription>
                  ) : null}
                </div>

                {!hideCloseButton && (
                  <DialogClose asChild>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground",
                        classNames?.close
                      )}
                      aria-label="Close"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </DialogClose>
                )}
              </div>
            )}

            {/* Body (scrollable) */}
            <div
              className={cn("min-h-0 flex-1 overflow-auto p-5 custom-scrollbar", classNames?.body)}
            >
              {children}
            </div>

            {/* Footer (sticky) */}
            {isShowFooter && (
              <div
                className={cn(
                  "sticky bottom-0 z-10 flex items-center justify-end gap-2 border-t bg-background/90 px-5 py-3 backdrop-blur",
                  classNames?.footer
                )}
              >
                {actions.map((a, idx) => (
                  <Button
                    key={a.key ?? `${idx}`}
                    type="button"
                    variant={a.variant ?? (idx === actions.length - 1 ? "default" : "secondary")}
                    onClick={a.onClick}
                    disabled={a.disabled || a.loading}
                    autoFocus={a.autoFocus}
                    className="inline-flex items-center gap-2"
                  >
                    {a.leftIcon}
                    <span>{a.loading ? "Processing…" : a.label}</span>
                    {a.rightIcon}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
