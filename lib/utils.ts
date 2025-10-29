import { type ClassValue, clsx } from 'clsx';

// Tailwind sınıflarını birleştirmek için utility fonksiyon
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

// Scroll animasyonu için intersection observer hook
export const useInView = (options?: IntersectionObserverInit) => {
  if (typeof window === 'undefined') return { ref: null, inView: false };
  
  // Client-side only
  return { ref: null, inView: true };
};
