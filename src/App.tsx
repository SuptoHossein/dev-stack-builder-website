import Footer from "./components/Footer";
import FooterMenu from "./components/FooterMenu";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <Header />
      <Hero /> 
      <Technologies />
      <div className="border border-slate-100 my-5"></div>
      <FooterMenu />
      <Footer />
    </>
  );
}

export default App;
