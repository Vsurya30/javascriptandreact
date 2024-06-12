import Home from "./pages/Home";
import About from "./pages/About";
import Articlelist from "./pages/Articlelist";
import Article from "./pages/Article";
import Navbar from "./components/Navbar";
import Pagenotfound from "./pages/Pagenotfound";
//pages
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

function App() {
  return (
    <Router>
        <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">

        <Routes>
            <Route 
            path="/" 
            element={<Home />} 
            /> 
            <Route 
            path="/about" 
            element={<About />} 
            /> 
            <Route 
            path="/articlelist" 
            element={<Articlelist />} 
            /> 
            <Route 
            path='/article/:name' 
            element={<Article />} 
            /> 
            <Route path="*" element={<Pagenotfound/>} />
        </Routes>
    

    </div>
    </Router>
    
  );
}

export default App;
