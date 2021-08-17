import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeSection from './New-component/Home';
import PreView from './New-component/PreView';
import Gallery from './New-component/Pages/Gallery';
import Shop from './New-component/Pages/shop';
import Native from './New-component/Pages/Native';
import Western from './New-component/Pages/Western';
import KnowUs from './New-component/WhatWeDo';
import About from './New-component/Pages/About'
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
           <Route path="/native-wear" component={Native}/>
         <Route path="/western-wear" component={Western}/>
         <Route path="/about" component={About}/>
          <Footer/>
        </main>
    </Router>
  );
}

export default App;