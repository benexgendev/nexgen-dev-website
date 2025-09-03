"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface WorkshopContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const WorkshopContext = createContext<WorkshopContextType | undefined>(undefined);

export function WorkshopProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <WorkshopContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </WorkshopContext.Provider>
  );
}

export function useWorkshop() {
  const context = useContext(WorkshopContext);
  if (context === undefined) {
    throw new Error("useWorkshop must be used within a WorkshopProvider");
  }
  return context;
}