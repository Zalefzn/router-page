import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router,Routes, Route,Link} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Product from './Components/Product/Product';



class App extends Component{
  render(){
    return(
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
        </nav>
        <Routes>
          <Fragment>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<Product />} />
          </Fragment>
        </Routes>
      </Router>
    );
  }
}

export default App;