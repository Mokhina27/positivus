import Banner from "./components/Banner/Banner"
import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Intro from "./components/Intro/Intro"
import Navbar from "./components/Navbar"
import Process from "./components/Process"
import Services from "./components/Services"
import Team from "./components/Team"
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
    {/* <Router> */}
      <div className="container">
        <Navbar />
        <Intro/>
        <Services />
        <Banner />
        <Process />
        <Team />
        <Contacts />
        <Footer />
        {/* <Routes>
          <Route path="/" element={<Intro/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/process" element={<Process />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/footer" element={<Footer />} />
        </Routes> */}
      </div>
    {/* </Router> */}
    </>
  )
}

export default App
