import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';
import Dialog from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () =>  {
  return (
    <BrowserRouter>
   <div className='app-wrapper'> 
    <Header />
    <Navbar />
    
    <div className='app-wrapper-content'>
    <Routes>
      <Route path="/content" element={<Content />}/> 
      <Route path="/dialogs" element={<Dialog />}/> 
      <Route path="/dialogs" element={<Dialog />}/> 
      
    </Routes> 
   </div>


    </div> 
    </BrowserRouter>
  );
}

export default App;
