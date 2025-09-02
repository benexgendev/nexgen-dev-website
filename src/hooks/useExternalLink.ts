"use client";

import { useCallback } from 'react';

export function useExternalLink() {
  const openExternalLink = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);

  return { openExternalLink };
}