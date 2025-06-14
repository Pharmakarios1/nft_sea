import "./App.css";
import "odometer/themes/odometer-theme-default.css";
import { LazyMotion, domAnimation, motion } from "framer-motion";
// Importing custom components
import NftCollection from "./components/customs/collections";
import CustomHeader from "./components/customs/customheader";
import Navigation from "./components/customs/navigations";
import Sponsors from "./components/customs/sponsors";
import WhyChooseUs from "./components/customs/whyChooseUs";
import PerformanceStats from "./components/customs/PerformanceStats";
import HowItWorks from "./components/customs/howItworks";
import CallToAction from "./components/customs/callToAction";

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation />
        <CustomHeader />
        <Sponsors />
        <NftCollection />
        <WhyChooseUs />
        <PerformanceStats />
        <HowItWorks />
        <CallToAction />
      </motion.div>
    </LazyMotion>
  );
}

export default App;
