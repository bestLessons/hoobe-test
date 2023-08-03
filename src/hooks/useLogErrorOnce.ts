'use client'
import { useRef } from 'react';

export const useLogErrorOnce = () => {
  const loggedRef = useRef(false);

  const logError = (message: string) => {
    if (loggedRef.current) return;
    // TODO: add sentry logger

    loggedRef.current = true;
  }

  return logError;
}