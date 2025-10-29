// Utility fonksiyonlar

// Tailwind sınıflarını birleştirmek için basit fonksiyon
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

// Scroll animasyonu için intersection observer hook
export const useInView = (options?: IntersectionObserverInit) => {
  if (typeof window === 'undefined') return { ref: null, inView: false };
  
  // Client-side only
  return { ref: null, inView: true };
};
