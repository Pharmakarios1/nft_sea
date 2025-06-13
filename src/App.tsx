import "./App.css";
import NftCollection from "./components/customs/collections";
import CustomHeader from "./components/customs/customheader";
import Navigation from "./components/customs/navigations";
import Sponsors from "./components/customs/sponsors";
import { LazyMotion, domAnimation,motion } from "framer-motion";
import WhyChooseUs from "./components/customs/whyChooseUs";

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
      </motion.div>
    </LazyMotion>
  );
}

export default App;
