import { useEffect, useRef } from 'react';

export function useAutoScroll(deps: unknown[]) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, deps);

  return bottomRef;
}

export function useScrollToBottom() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  return { containerRef, scrollToBottom };
}
