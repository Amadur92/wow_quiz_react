import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';
import Dialog from './components/Dialogs/Dialogs.jsx';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
//import { addGame } from './redux/state';


const App = (props) =>  {
  
  return (
    <BrowserRouter>
   <div className='app-wrapper'> 
    <Header />
    <Navbar />
    
    <div className='app-wrapper-content'>
    <Routes>
      <Route path="/content" 
      element={<Content posts={props.state.posts} 
      defaultTextArea ={props.state.defaultTextArea}
      addGame={props.addGame} 
      updatePostText={props.updatePostText}/>} /> 
      <Route path="/dialogs" element={<Dialog dialogs_data={props.state.dialogs_data} />}/> 


    </Routes> 
   </div>


    </div> 
    </BrowserRouter>
  );
}

export default App;
