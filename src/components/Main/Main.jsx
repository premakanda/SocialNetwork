import React from 'react';
import './Main.css';
import NavBar from './Navbar/Navbar.jsx';
import Content from './Content/Content.jsx';
import Dialogs from './Dialogs/Dialogs.jsx';
import {BrowserRouter, Route} from "react-router-dom"


const Main = () => {
  return (
      <BrowserRouter>
      <main className="Main">
        <NavBar />
        <div className="ContentWrapper">
            <Route path='/dialogs' component={Dialogs}/>
            <Route path='/content' component={Content}/>
        </div>

      </main>
          </BrowserRouter>
  );
}

export default Main;
