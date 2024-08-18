import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SliderCart from "./components/SliderCart";
import ContentArea from "./components/ContentArea";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <SliderCart />
      <ContentArea />
    </>
  );
}

export default App;
