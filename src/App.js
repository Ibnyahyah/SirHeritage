import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeSection from './New-component/Home';
// import NavBar from './New-component/Nav';
import PreView from './New-component/PreView';
import Gallery from './New-component/Pages/Gallery';
import Shop from './New-component/Pages/shop';
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
         
          <Route path="/gallery" component={Gallery}/>
          <Route path="/shop" component={Shop}/>
          <Footer/>
        </main>
    </Router>
  );
}

export default App;
