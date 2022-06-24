import Head from "next/head";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Gallery() {
  return (
    <div>
      <Head>
        <title>Sirheritage Gallery</title>
        <meta
          name="description"
          content="Sirheritage fashion shop, we sew both native, english wears."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/white-uicss@1.0.3/white-uicss.min.css"
        />
      </Head>

      <main>
        <Navbar />
        <div className="p-3 bg-white"></div>
        <div className="gallery-container">
          <div className="p-2 gallery-header text-center text-white font-regular mb-1">
            <p>New Wears</p>
          </div>
          <div className="container pb-4">
            <div className="showcased">
              <div className="col-sm-4 ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./Blueba.png" alt="Sir heritage" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./M3.png" alt="Sir heritage" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4  ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./images/M1.jpg" alt="Sir heritage" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4  ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./modern-eshiki.png" alt="Sir heritage" />
                  </div>
                </div>
              </div>
            </div>
            <p className="gallery-link">See all designs</p>
          </div>
          <div className="p-3 bg-white"></div>
        </div>
        <div className="gallery-container">
          <div className="p-2 gallery-header text-center text-white font-regular mb-1">
            <p>NATIVE WEARS</p>
          </div>
          <div className="container pb-4">
            <div className="showcased">
              <div className="col-sm-4 ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./images/modernAgbada.jpg" alt="Sir heritage" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./M3.png" alt="Sir heritage" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4  ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./images/morden-soro-9.jpg" alt="Sir heritage" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4  ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./images/Native2.jpg" alt="Sir heritage" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4  ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./images/NativeShop4.jpg" alt="Sir heritage" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4  ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./images/NativeShop2.jpg" alt="Sir heritage" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4  ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./images/native3.jpg" alt="Sir heritage" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4  ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./images/native4.jpg" alt="Sir heritage" />
                  </div>
                </div>
              </div>
            </div>
            <p className="gallery-link">See all designs</p>
          </div>
          <div className="p-3 bg-white"></div>
        </div>
        <div className="gallery-container">
          <div className="p-2 gallery-header text-center text-white font-regular mb-1">
            <p>WESTERN WEARS</p>
          </div>
          <div className="container pb-4">
            <div className="showcased">
              <div className="col-sm-4 ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./images/SuitShop.jpg" alt="Sir heritage" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./images/M1.jpg" alt="Sir heritage" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4  ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./images/SuitSanka.jpg" alt="Sir heritage" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4  ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./images/SuitShop3.jpg" alt="Sir heritage" />
                  </div>
                </div>
              </div>
            </div>
            <p className="gallery-link">See all designs</p>
          </div>
          <div className="p-3 bg-white"></div>
        </div>
        <div className="gallery-container">
          <div className="p-2 gallery-header text-center text-white font-regular mb-1">
            <p>CAPS</p>
          </div>
          <div className="container pb-4">
            <div className="showcased">
              <div className="col-sm-4  ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./images/green-cap.jpg" alt="Sir heritage" />
                  </div>
                </div>
              </div>
              <div className="col-sm-4  ml-2">
                <div className="image-card">
                  <div className="image-container">
                    <img src="./images/pink-cap.jpg" alt="Sir heritage" />
                  </div>
                </div>
              </div>
            </div>
            <p className="gallery-link">See all designs</p>
          </div>
        </div>
        <div className="p-3 bg-white mb-4"></div>
      </main>
      <Footer />
    </div>
  );
}
