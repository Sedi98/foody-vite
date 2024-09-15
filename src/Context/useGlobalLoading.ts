// hooks/useGlobalLoading.ts
import { useState, useEffect } from 'react';

// Global setter function to manage the loading state
let setGlobalLoading: ((value: boolean) => void) | undefined = undefined;

// Custom hook to manage the loading state in components
export const useGlobalLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Set the global function to control loading state
    setGlobalLoading = setLoading;

    // Clean up the global setter when the component using this hook unmounts
    return () => {
      setGlobalLoading = undefined;
    };
  }, []);

  return { loading };
};

// Functions to control the global loading state
export const startLoading = () => {
  if (setGlobalLoading) {
    setGlobalLoading(true);
  }
};

export const stopLoading = () => {
  if (setGlobalLoading) {
    setGlobalLoading(false);
  }
};
