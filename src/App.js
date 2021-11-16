import React from 'react'
import "./App.css"
import "./locomotive.css"
import Navbar from './components/Navbar';
import Scenographie from './components/Scenographie';
import {Switch,Route,BrowserRouter} from "react-router-dom"
import About from './components/About';
function App() {


  return (
      <BrowserRouter>
        <div className="App" >
              <Navbar/>
              <Switch>
                <Route exact  path="/" >
                    <Scenographie className="scene" />
                </Route> 

                <Route path="/about" >
                    <About/>
                </Route>
                
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
