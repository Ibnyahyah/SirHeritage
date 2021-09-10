import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeSection from './New-component/Home';
import PreView from './New-component/PreView';
import Gallery from './New-component/Pages/Gallery';
import Shop from './New-component/Pages/shop';
import About from './New-component/Pages/About';
import Developer from './New-component/Pages/Developer';
import Footer from './New-component/Footer';
import SignIn from './New-component/SignAndProfile/SignIn';
import SignUp from './New-component/SignAndProfile/SignUp';
import { ForgetPassword } from './New-component/SignAndProfile/ForgetPassword';


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
         <Route path="/about"  render={props =>(
           <React.Fragment>
             <About/>
             <Footer/>
           </React.Fragment>
         )}/>
        <Route path="/developer" component={Developer}/>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/forgetpassword" component={ForgetPassword}/>
          
        </main>
    </Router>
  );
}

export default App;