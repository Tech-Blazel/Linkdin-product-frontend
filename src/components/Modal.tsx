import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface ModalProps {
  trigger: ReactNode;
  title?: string;
  children: ReactNode;
  showHeader?: boolean;
  showActionButton?: boolean;
  actionButtonText?: string;
  onAction?: () => void;
  widthClass?: string;
}

const Modal = ({
  trigger,
  title,
  children,
  showHeader = true,
  showActionButton = false,
  actionButtonText = "Save",
  onAction,
  widthClass = "max-w-lg",
}: ModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={`z-[1001] ${widthClass}`}>
        {showHeader && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
        )}
        <div className="mt-2 space-y-4">{children}</div>
        {showActionButton && (
          <div className="mt-4 flex justify-end">
            <Button onClick={onAction} className="bg-primary text-white">
              {actionButtonText}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
