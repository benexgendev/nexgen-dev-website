"use client";

import { useMemo } from 'react';

export function useWorkshopDate() {
  const nextSaturday = useMemo(() => {
    const date = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }, []);

  return {
    displayDate: "This Saturday",
    fullDate: nextSaturday,
    time: "7:00 PM - 9:00 PM",
    description: "Interactive Live Session"
  };
}