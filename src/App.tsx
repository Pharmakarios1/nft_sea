import "./App.css";
import NftCollection from "./components/customs/collections";
import CustomHeader from "./components/customs/customheader";
import Navigation from "./components/customs/navigations";
import Sponsors from "./components/customs/sponsors";

function App() {
  return (
    <>
      <Navigation />
      <CustomHeader />
      <Sponsors/>
      <NftCollection />
    </>
  );
}

export default App;
