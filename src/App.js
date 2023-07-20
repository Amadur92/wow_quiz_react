
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Content from './components/Content/Content.jsx';


const App = () =>  {
  return (
   <div className='app-wrapper'> 
    <Header />
    <Navbar />
    <Content />


    </div> 
    
  );
}

export default App;
