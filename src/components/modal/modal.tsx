"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useModalNavigation } from "@/hooks/use-modal-navigation";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import type {
  ExperienceData,
  ModalType,
  ProjectData,
  ServiceData,
} from "../../types/modal";
import { ModalContent } from "./modal-content";
import { ModalFooter } from "./modal-footer";
import { ModalHeader } from "./modal-header";

interface ModalProps {
  type?: ModalType;
  data: (ProjectData | ServiceData | ExperienceData)[];
}

export const Modal = ({ type = "projects", data }: ModalProps) => {
  const [open, setOpen] = useState(false);
  const { currentIndex, direction, nextItem, prevItem } = useModalNavigation(
    data.length
  );

  const getTitle = () => {
    switch (type) {
      case "projects":
        return "My Projects";
      case "services":
        return "My Services";
      case "experiences":
        return "My Work Experience";
      default:
        return "My Content";
    }
  };

  const getButtonText = () => {
    switch (type) {
      case "projects":
        return "View Works";
      case "services":
        return "View All Services";
      case "experiences":
        return "View Experiences";
      default:
        return "View Content";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="py-3 px-5 bg-[#916CE7] rounded-[12px] border border-[#101010] text-sm font-medium min-h-[45px] hover:bg-[#916CE7] hover:border-[#916CE7] cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-violet-700/20">
          {getButtonText()}
        </Button>
      </DialogTrigger>

      <AnimatePresence>
        {open && (
          <DialogContent
            className="max-w-3xl w-full border-none bg-transparent text-[#CCC] p-0 max-sm:px-4 overflow-visible"
            forceMount
          >
            <div className="relative">
              <ModalHeader title={getTitle()} />

              <ModalContent
                type={type}
                currentIndex={currentIndex}
                direction={direction}
                data={data}
              />

              <ModalFooter
                currentIndex={currentIndex}
                dataLength={data.length}
                onPrevious={prevItem}
                onNext={nextItem}
              />
            </div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};
