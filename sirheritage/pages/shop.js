import Head from "next/head";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Shop() {
  return (
    <div>
      <Head>
        <title>Sirheritage Shop</title>
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
        <div className="shop-container">
          <div className="p-2 shop-header text-center text-white font-regular mb-1">
            <p>New Wears</p>
          </div>
          <div className="container pb-4">
            <div className="showcased">
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/Agb1.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">
                        An Agabda sew with geni tailored perfectly
                      </p>
                      <p className="font-bold mt-1 mb-1">#20,000</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/M1.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">
                        White danshiki casual wear.
                      </p>
                      <p className="font-bold mt-1 mb-1">#9,000</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/AgbadaShop3.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">
                        An Agabda sew with black texture
                      </p>
                      <p className="font-bold mt-1 mb-1">#33,000</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/BlackAgbada.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">
                        An Agabda with a perfectly cap match
                      </p>
                      <p className="font-bold mt-1 mb-1">#27,000</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/SuitSanka.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">
                        A Black shirt sew with gania pattern
                      </p>
                      <p className="font-bold mt-1 mb-1">#17,000</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/AgbadaShop2.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">
                        An Agabda with a perfectly cap match
                      </p>
                      <p className="font-bold mt-1 mb-1">#27,000</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="shop-link">See all designs</p>
          </div>
          <div className="p-3 bg-white"></div>
        </div>
        <div className="shop-container">
          <div className="p-2 shop-header text-center text-white font-regular mb-1">
            <p>NATIVE WEARS</p>
          </div>
          <div className="container pb-4">
            <div className="showcased">
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/kiddo.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">A Kid Agbada wear with cap</p>
                      <p className="font-bold mt-1 mb-1">#13,300</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img
                        src="./images/simple-native.jpg"
                        alt="Sir heritage"
                      />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">
                        Modern Up and down with little touch.
                      </p>
                      <p className="font-bold mt-1 mb-1">#7,500</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/modernAgbada.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">
                        A full body Agbada tailored perfectly
                      </p>
                      <p className="font-bold mt-1 mb-1">#30,000</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img
                        src="./images/kid-simple-wear.jpg"
                        alt="Sir heritage"
                      />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">
                        Kids simple wear with blue texture
                      </p>
                      <p className="font-bold mt-1 mb-1">#6,500</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="shop-link">See all designs</p>
          </div>
          <div className="p-3 bg-white"></div>
        </div>
        <div className="shop-container">
          <div className="p-2 shop-header text-center text-white font-regular mb-1">
            <p>WESTERN WEARS</p>
          </div>
          <div className="container pb-4">
            <div className="showcased">
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/SuitSanka.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">
                        A Black shirt sew with gania pattern
                      </p>
                      <p className="font-bold mt-1 mb-1">#20,000</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/M1.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">White shorthand UNISEX Top</p>
                      <p className="font-bold mt-1 mb-1">#9,000</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/SuitShop.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">
                        A full body suit tailored perfectly
                      </p>
                      <p className="font-bold mt-1 mb-1">#25,000</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/SuitShop3.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">
                        A full body suit tailored perfectly
                      </p>
                      <p className="font-bold mt-1 mb-1">#30,000</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="shop-link">See all designs</p>
          </div>
          <div className="p-3 bg-white"></div>
        </div>
        <div className="shop-container caps">
          <div className="p-2 shop-header text-center text-white font-regular mb-1">
            <p>CAPS</p>
          </div>
          <div className="container pb-4">
            <div className="showcased">
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/green-cap.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">Awolowo cap</p>
                      <p className="font-bold mt-1 mb-1">#3,500</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/pink-cap.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">Awolowo cap</p>
                      <p className="font-bold mt-1 mb-1">#3,500</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/Cap2.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">Gobi cap</p>
                      <p className="font-bold mt-1 mb-1">#3,500</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 ml-2">
                <div className="image-card bg-white p-0 pb-2">
                  <div>
                    <div className="image-container">
                      <img src="./images/Cap3.jpg" alt="Sir heritage" />
                    </div>
                    <div className="p-2">
                      <p className="font-regular">Gobi cap</p>
                      <p className="font-bold mt-1 mb-1">#3,500</p>
                      <button className="btn">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="shop-link">See all designs</p>
          </div>
        </div>
        <div className="p-3 bg-white mb-4"></div>
      </main>
      <Footer />
    </div>
  );
}
