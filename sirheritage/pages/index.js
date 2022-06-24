import Head from "next/head";
import Faqs from "../components/faqs";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sirheritage fashion shop</title>
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
        <div className="container top-section">
          <div
            className="row align-items-center text-white gap-1"
            style={{ minHeight: "80vh" }}
          >
            <div className="col-6-sm col-6-md col-6-lg col-6-xl">
              <div>
                <h1>Welcome to SirHeritage</h1>
                <p className="mt-2 top-paragraph">
                  Your sure plug for all kinds of unique wears
                </p>
                <p className="mt-2 second-paragraph">
                  We specialize on any kind of wears such as Native wears,
                  English wears, Caps and many others.
                </p>
                <button className="btn br-md mt-2">See our work</button>
              </div>
            </div>
            <div className="col-6-sm col-6-md col-6-lg col-6-xl">
              <div className="w-100">
                <img src="./Group1.png" alt="Sir heritage" />
              </div>
            </div>
          </div>
          <form className="display-f align-items-center bg-white m-auto">
            <input type="text" placeholder="Seacrh our category...." />
            <button type="submit" className="btn">
              <img src="./search.png" alt="Sir heritage" width="30px" />
            </button>
          </form>
        </div>
        <div className="p-3 bg-white mt-4 mb-4"></div>
        <div className="what-we-do m-auto">
          <div className="container text-center">
            <h1 className="text-center mb-1">WHO WE ARE AND WHAT WE DO</h1>
            <div className="w-25 m-auto line"></div>
            <p>
              We are SirHeritage. a fashion builder and we deal in making the
              most fashionable wears you can get. Get outfits that exudes
              confidence and elegance all in one look. “Try us today and we can
              guarantee that you will come back again for more”. We are at your
              service 24/7.
            </p>
            <p>
              We also train young fashion enthusiasts to be the next fashion
              mogul of their era. Our students get access to both practical and
              theory aspects of fashion. We have theory classes which start from
              9am to 12pm while our practical classes start from 1pm to 6pm
              (Mondays - Fridays).
            </p>

            <button className="btn mt-3 mb-5">Contact us for more info</button>
          </div>
        </div>
        <div className="bg-white pt-5 pb-5">
          <div className="container">
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
          </div>
        </div>
        <div className="ourstyle mt-5">
          <div className="container text-center">
            <h1 className="text-center mb-1">OUR STYLE</h1>
            <div className="m-auto line"></div>
            <p>
              We create modern and classy outfits made for both male and female.
              Our mission is to make modern wears available to both men and
              women locally and internationally.
            </p>
            <p>
              Our outfits are made in such a way as to portray poise and
              elegance while maintaining simplicity. They are also made at
              affordable prices and can be received anywhere in Nigeria.
            </p>

            <button className="btn mt-3 mb-5">Learn more</button>
          </div>
        </div>
        <Faqs />
      </main>
      <Footer />
    </div>
  );
}
