import React from 'react';
import About from './components/About/about.components';
import Youtube from './components/Youtube/youtube.components';
import Video from './components/Videos/video.components';
import Quotes from './components/Quotes/quotes.components';
import Home from './components/Home/home.components';
import Navbar from './components/Navbar/navbar.components';
import Footer from './components/Footer/footer.components';
import Contact from './components/Contact/contact.components';
export default function App() {
  return (
    <React.Fragment>
    <About/>
    <Youtube/>
    <Video/>
    <Quotes/>
    <Navbar/>
    <Home/>
    <Footer/>
    <Contact/>
    </React.Fragment>
  );
}
