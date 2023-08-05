import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ContentContainer from './components/Content/ContentContainer.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NewTable from './components/NewTable/NewTable';
//import { addGame } from './redux/state';


const App = (props) =>  {
  //console.log(props)
  return (
    <BrowserRouter>
   <div className='app-wrapper'> 
    <Header />
    <Navbar />
    
    <div className='app-wrapper-content'>
    <Routes>
      <Route path="/content" 
      element={<ContentContainer />} />
      <Route path="/dialogs" element={<DialogsContainer />}/>
      <Route path="/new-table" element={<NewTable  />}/>

    </Routes> 
   </div>


    </div> 
    </BrowserRouter>
  );
}

export default App;
