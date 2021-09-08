import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeSection from './New-component/Home';
import PreView from './New-component/PreView';
import Gallery from './New-component/Pages/Gallery';
import Shop from './New-component/Pages/shop';
import Native from './New-component/Pages/Native';
import Western from './New-component/Pages/Western';
import About from './New-component/Pages/About';
import Developer from './New-component/Pages/Developer';
import Footer from './New-component/Footer';


function App() {
  return (
    <Router>
        <main className="body">
          <Route exact path="/" render={props =>(
              <React.Fragment>
                 <HomeSection/>
                  <PreView/>
                  <Footer/>
              </React.Fragment>
          )} />
         
          
         <Route path="/gallery" render={props =>(
           <React.Fragment>
             <Gallery/>
             <Footer/>
           </React.Fragment>
         )}/>
         <Route path="/shop" render={props =>(
            <React.Fragment>
              <Shop/>
              <Footer/>
            </React.Fragment>
          )}
         />
           <Route path="/native-wear"  render={props =>(
           <React.Fragment>
             <Native/>
             <Footer/>
           </React.Fragment>
         )}/>
         <Route path="/western-wear"  render={props =>(
           <React.Fragment>
             <Western/>
             <Footer/>
           </React.Fragment>
         )}/>
         <Route path="/about"  render={props =>(
           <React.Fragment>
             <About/>
             <Footer/>
           </React.Fragment>
         )}/>
        <Route path="/developer" component={Developer}/>
          
        </main>
    </Router>
  );
}

export default App;