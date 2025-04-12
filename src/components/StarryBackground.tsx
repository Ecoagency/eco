import { useEffect, useRef } from 'react';

export default function StarryBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';

      // Random size between 1 and 2 pixels for a more subtle effect
      const size = Math.random() * 1 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random position, but slightly less scattered to reduce clutter
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      // Random duration between 6 and 12 seconds for a slower effect
      const duration = (Math.random() * 6 + 6).toFixed(2);
      star.style.setProperty('--duration', `${duration}s`);

      // Random direction (left or right)
      const direction = Math.random() > 0.5 ? 1 : -1;
      star.style.setProperty('--direction', direction.toString());

      // Make stars semi-transparent and add a slight blur for a distant look
      star.style.opacity = (Math.random() * 0.4 + 0.3).toFixed(2); // 30%-70% opacity
      star.style.filter = `blur(${Math.random() * 0.5 + 0.2}px)`; // Random blur between 0.2px and 0.7px

      container.appendChild(star);

      // Remove star after animation ends
      setTimeout(() => {
        star.remove();
      }, parseFloat(duration) * 1000);
    };

    // Create initial stars (reduce to 50 for a more minimal effect)
    for (let i = 0; i < 50; i++) {
      setTimeout(() => createStar(), Math.random() * 3000);
    }

    // Create new stars periodically (adjust interval to 200ms for less frequent creation)
    const interval = setInterval(() => {
      createStar();
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="stars" />;
}
