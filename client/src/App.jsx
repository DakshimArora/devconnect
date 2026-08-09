import "./App.css"
import {Routes,Route,Link} from 'react-router-dom'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Developers from "./pages/Developers";
function App(){
  return(
    <Routes>
      <Route path="/" element={
        <>
            <nav className="navbar">
            <div className="leftNavbar">
              <h2 className="logo">DevConnect</h2>
            </div>
            <div className="rightNavbar">
              <a href="#features" className="features">Features</a>
              <a href="#about" className="about">About</a>
              <Link className="loginBtn" to="/login">Login</Link>
              <Link className="getStartedBtn" to="/register">Get Started</Link>
            </div>
          </nav>
          <main className="hero">
            <p className="heroTag">A community for developers</p>
            <h1 className="heroHeading">
              Connect. Collaborate.
              <br /> 
              Build Together.</h1>
            <p className="heroDescription">
              Find developers, share ideas, collaborate on projects,
              and grow your skills with a community built for creators.
            </p>
            <div className="heroBtns">
              <Link className="getStartedBtn" to="/register">Get Started</Link>
              <Link className="exploreDevBtn" to="/developers">Explore Developers</Link>
            </div>
          </main>
        </>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/register"  element={<Register />}/>
      <Route path="/developers" element={<Developers />}/>
    </Routes>
  );
}
export default App;