import React from "react";
import Service from "./components/Services";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
   <main>
        <Header/>
         <Service/>
        <About/>
      <Footer/>

    </main>
  );
};