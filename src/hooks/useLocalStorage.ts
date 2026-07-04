import { useState, useEffect } from 'react';
import { getStorageItem, setStorageItem } from '../utils/storage';

/**
 * A typed hook that syncs state with localStorage.
 */
export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => getStorageItem<T>(key) ?? defaultValue);

  useEffect(() => {
    setStorageItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
};
