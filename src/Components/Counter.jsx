import { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ from = 0, to = 5, duration = 2000, title = '' }) => {
  const [count, setCount] = useState(from);
  const [isActive, setIsActive] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentVal = from + (to - from) * progress;

      setCount(currentVal);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isActive, from, to, duration]);

  return (
    <div ref={counterRef}>
      <div className="lg:text-7xl md:text-7xl text-4xl font-bold text-charcoal playwrite-gb-s-uniquifier">
        {count.toFixed(1)}
      </div>
      <div className="md:pt-6 pt-4 md:pb-0 pb-6 text-sm text-charcoal font-normal">
        {title}
      </div>
    </div>
  );
};

export default AnimatedCounter;
