import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeSection from './New-component/Home';
import NavBar from './New-component/Nav';
import PreView from './New-component/PreView';
import Gallery from './New-component/Pages/Gallery';
import Shop from './New-component/Pages/shop';
import Native from './New-component/Pages/Native';
import Western from './New-component/Pages/Western';
import KnowUs from './New-component/WhatWeDo';
import Footer from './New-component/Footer';


function App() {
  return (
    <Router>
        <main>
          <Route exact path="/" render={props =>(
              <React.Fragment>
                 <HomeSection/>
                  <PreView/>
                  <KnowUs/>
              </React.Fragment>
          )} />
         
          <Route path="/gallery" render={props =>(
            <React.Fragment>
              <NavBar/>
              <Gallery/>
            </React.Fragment>
          )}/>
          <Route path="/shop" render={props =>(
            <React.Fragment>
              <NavBar/>
              <Shop/>
            </React.Fragment>
          )}/>
           <Route path="/native-wear" render={props =>(
            <React.Fragment>
              <NavBar/>
            <Native/>
            </React.Fragment>
          )}/>
         <Route path="/western-wear" render={props =>(
            <React.Fragment>
              <NavBar/>
            <Western/>
            </React.Fragment>
          )}/>
          <Footer/>
        </main>
    </Router>
  );
}

export default App;