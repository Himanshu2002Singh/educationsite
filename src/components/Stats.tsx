import React, { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/useInView";

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
  isFloat?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({
  value,
  label,
  suffix = "",
  delay = 0,
  isFloat = false,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    setTimeout(() => {
      const timer = setInterval(() => {
        start += increment;
        const currentValue = isFloat
          ? parseFloat(start.toFixed(1))
          : Math.floor(start);
        setCount(Math.min(currentValue, end));

        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, 16);

      return () => clearInterval(timer);
    }, delay);
  }, [isInView, value, delay, isFloat]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-green-900">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-gray-700 text-sm md:text-base">{label}</div>
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4">
          <StatItem value={10000} label="Students" suffix="+" delay={0} />
          <StatItem
            value={24}
            label="Years of Experience"
            suffix="+"
            delay={200}
          />
          <StatItem value={25} label="Countries" suffix="+" delay={400} />
          <StatItem
            value={4.8}
            label="Rating"
            suffix="/5"
            delay={600}
            isFloat
          />
          <StatItem
            value={95}
            label="Visa Success Rate"
            suffix="%"
            delay={800}
          />
          <StatItem
            value={800}
            label="University Representation"
            suffix="+"
            delay={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
