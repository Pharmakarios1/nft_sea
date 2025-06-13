import { useState, useEffect } from "react";
import Odometer from "react-odometerjs";
import "odometer/themes/odometer-theme-default.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const PerformanceStats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }
  const [values, setValues] = useState({
    wallets: 0,
    secondary: 0,
    artists: 0,
    value: 0,
  });
  useEffect(() => {
    // Simulate loading the real values
    const timeout = setTimeout(() => {
      setValues({
        wallets: 400000,
        secondary: 20000,
        artists: 230,
        value: 2.5,
      });
    }, 1000); // Delay to trigger animation

    return () => clearTimeout(timeout);
  }, []);
  return (
    <section ref={ref} className="py-12 bg-[#F5F5F5] text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        exit={{ opacity: 0, y: 40 }}
        whileInView={`${hasAnimated ? "animate" : ""}`}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        <div>
          <div className="text-3xl font-bold text-purple-600">
            <Odometer value={values.wallets} format="(,ddd)" />+
          </div>
          <p className="text-sm text-gray-600">Wallets Connected</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-emerald-900">
            <Odometer value={values.secondary} format="(,ddd)" />+
          </div>
          <p className="text-sm text-gray-600">Secondary Users</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-pink-900">
            <Odometer value={values.artists} format="(,ddd)" />+
          </div>
          <p className="text-sm text-gray-600">Creative Artists</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-blue-900">
            <Odometer value={values.value} format="(.dd)" />x
          </div>
          <p className="text-sm text-gray-600">Estimated Value</p>
        </div>
      </motion.div>
    </section>
  );
};

export default PerformanceStats;
