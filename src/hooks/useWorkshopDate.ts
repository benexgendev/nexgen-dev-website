"use client";

import { useMemo } from 'react';

export function useWorkshopDate() {

  return {
    displayDate: "This Saturday",
    fullDate: "Saturday, September 27, 2025",
    time: "10:00 AM - 11:00 AM",
    description: "Interactive Live Session"
  };
}