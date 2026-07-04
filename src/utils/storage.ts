/**
 * Read a value from localStorage, returning undefined if missing or unparseable.
 */
export const getStorageItem = <T>(key: string): T | undefined => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : undefined;
  } catch {
    return undefined;
  }
};

/**
 * Persist a value to localStorage as JSON.
 */
export const setStorageItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Silently fail (e.g. private mode quota exceeded)
  }
};

/**
 * Remove a key from localStorage.
 */
export const removeStorageItem = (key: string): void => {
  localStorage.removeItem(key);
};
