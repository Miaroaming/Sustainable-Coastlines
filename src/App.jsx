import { HashRouter } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import useCustomizer from './hooks/useCustomizer'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Links from './components/Links'

const App = () => {
  const {bgColor, fontFamily, navColor} = useCustomizer();

  useEffect(() => {
    //apply bgcolor to the body
    document.body.style.backgroundColor = `#${bgColor}`

    //apply font to body
    if (fontFamily === 'Goudy Bookletter 1911') {
      document.body.style.fontFamily = `'Goudy Bookletter 1911', serif`;
    }
    if (fontFamily === 'Baskervville') {
      document.body.style.fontFamily = `'Baskervville', serif`;
    }
    if (fontFamily === 'Prata') {
      document.body.style.fontFamily = `'Prata', serif`;
    }
    if (fontFamily === 'Spectral') {
      document.body.style.fontFamily = `'Spectral', serif`;
    }

    document.querySelector('nav').style.backgroundColor = navColor;
    document.querySelector('footer').style.backgroundColor = navColor;

  }, [bgColor, fontFamily, navColor])

  return (
    <HashRouter>
      <Navbar/>
      <Links/>
      <Footer/>
    </HashRouter>
  )
}

export default App;
