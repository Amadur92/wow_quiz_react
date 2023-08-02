import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';
import Dialog from './components/Dialogs/Dialogs.jsx';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NewTable from './components/NewTable/NewTable';
//import { addGame } from './redux/state';


const App = (props) =>  {
  console.log(props)
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
      dispatch = {props.dispatch}/>} /> 
      <Route path="/dialogs" element={<Dialog dialogs_data={props.state.dialogs_data}
      dispatch = {props.dispatch} />}/> 
      <Route path="/new-table" element={<NewTable table_data={props.state.table_data}
      dispatch = {props.dispatch} />}/> 

    </Routes> 
   </div>


    </div> 
    </BrowserRouter>
  );
}

export default App;
