import './App.css';
import HomeSection from './New-component/Home';
// import NavBar from './New-component/Nav';
import Gallery from './New-component/Gallery';
// import NewHot from './New-component/NewArrival';
import Footer from './New-component/Footer';


function App() {
  return (
    <main>
      <HomeSection/>
      {/* <NavBar/> */}
      <Gallery/>
      {/* <NewHot/> */}
      <Footer/>
    </main>
  );
}

export default App;
