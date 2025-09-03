"use client";

import { WorkshopRegistrationForm } from "./workshop-registration-form";
import { useWorkshop } from "@/contexts/workshop-context";

export function WorkshopModalProvider() {
  const { isOpen, closeModal } = useWorkshop();

  return (
    <WorkshopRegistrationForm 
      isOpen={isOpen} 
      onClose={closeModal} 
    />
  );
}