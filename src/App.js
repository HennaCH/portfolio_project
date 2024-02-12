import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import Home from "./components/Pages/Home";
import Navbar from "./components/Nav/Navbar";
import About from "./components/Pages/About";
//import About from "./About";

function App() {
  return (
      <div className="App">

          <BrowserRouter>
              <Navbar/>
              <Routes>
                  <Route index element={<Home/>}/>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/About" element={<About/>}/>
                  <Route path="/Contact" element={<About/>}/>
              </Routes>
          </BrowserRouter>

          {/*<p>Hi {user.email}, You have successfully logged in.</p>*/}
          {/*<button onClick={() => securedAPITest()}>Test Private API</button>*/}
          {/*{apiResponseMessage && <p>Response Message: {apiResponseMessage}</p>}*/}
          {/*<button onClick={() => logout({ returnTo: window.location.origin })}>*/}
          {/*    Log Out*/}
          {/*</button>*/}
          {/* <header>
          <BrowserRouter>
            <Routes>
              <Route index element={<Main />} />
            </Routes>
          </BrowserRouter>
        </header>*/}
      </div>
  )
}

export default App;
