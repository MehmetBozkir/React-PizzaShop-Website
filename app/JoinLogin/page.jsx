import React from "react";
import { JLDemo } from "../../components/JLDemo";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function page() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <JLDemo />
      </div>
      <Footer />
    </>
  );
}

export default page;
