import { useEffect, useState, useRef, RefObject } from 'react';

interface UseInViewOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}

export function useInView(
  elementRef: RefObject<Element>,
  options: UseInViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { root = null, rootMargin = '0px', threshold = 0, once = false } = options;

  useEffect(() => {
    if (elementRef.current && !observerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const isElementInView = entry.isIntersecting;
          setIsInView(isElementInView);

          if (isElementInView && once && observer && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        },
        { root, rootMargin, threshold }
      );

      observer.observe(elementRef.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current && elementRef.current) {
        observerRef.current.unobserve(elementRef.current);
        observerRef.current.disconnect();
      }
    };
  }, [elementRef, root, rootMargin, threshold, once]);

  return isInView;
}