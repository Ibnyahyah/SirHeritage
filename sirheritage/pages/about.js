import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Head from "next/head";

export default function About() {
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
        <div className="p-3 bg-white mb-4"></div>
        <div className="ourstyle mt-5">
          <div className="container text-left">
            <h1 className="text-center mb-1">ABOUT US</h1>
            <div className="m-auto line"></div>
            <p>
              Our favorite part of being a professional tailor is the passion to
              make a difference and to make a significant change in creating a
              story through what we sew. Our aim is to create a sensible wears
              for everyone across the globe.
            </p>
            <p>
              What makes us different is our ability to understand what our
              customers need and to deliver quality services that will create a
              long-lasting relationship.
            </p>
            <p>
              We love to create a unique style that will create memories that
              can express love . We are devoted to utilizing developed and
              developing advancements to give the most elevated amount of value
              in terms of sewing and training.
            </p>
          </div>
        </div>
        <div className="p-3 bg-white mt-4 mb-4"></div>
      </main>
      <Footer />
    </div>
  );
}
