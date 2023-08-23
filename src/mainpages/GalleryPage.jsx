import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Gallery from "../components/gallery";

const GalleryPage = () => {
  return (
    <>
      <div className="body">
        <div>
          <Navbar />
        </div>
        
        <Gallery />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default GalleryPage;
