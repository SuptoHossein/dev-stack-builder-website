import { Suspense } from "react";
import Footer from "./components/Footer";
import FooterMenu from "./components/FooterMenu";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import type { Istack } from "./types/Stack";

const stackFetch = async () : Promise<Istack[]> => {
  const res = await fetch("/public/data.json");
  const data = await res.json();
  return data;
};

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<div className="text-center text-yellow-500">Loading...</div>}>
        <Technologies stackPromise={stackFetch()} />
      </Suspense>
      <div className="border border-slate-100 my-10"></div>
      <FooterMenu />
      <Footer />
    </>
  );
}

export default App;
