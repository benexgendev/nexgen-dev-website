"use client";

import { useMemo } from 'react';

export function useWorkshopDate() {

  return {
    displayDate: "This Saturday",
    fullDate: "Monday, September 20, 2025",
    time: "7:00 PM - 8:30 PM",
    description: "Interactive Live Session"
  };
}