import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); //useStateSnippet

  const showAlert = (message, type) => {
      setAlert({
          msg: message,
          type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }

  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#2B2D2F';
      showAlert("DarkMode has been enabled", "success");
      document.title = "Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.title = "Light Mode";
      showAlert("Light Mode has been enabled", "success");

    }
  }
  return ( 
    // start of JSX: UNified form where you can use javascript within the html and vise versa In this case the following in JSX
    <>
    <Router>
    <Navbar title="CodePirate" about='About' mode={mode} toggleMode={toggleMode} ></Navbar>
    <Alert alert={alert}></Alert>
    <div className='container my-3'>

    <Routes>
      {/* users --> Component1
       /users/home --> Component2 */}
    <Route exact path="/" element={
    <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}></TextForm>
    } />
    <Route exact path="/about" element={ <About />} />

      </Routes>

    {/* <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}></TextForm> */}
    {/* <About></About> */}

    </div>
    </Router>
    </>// End of JSX
  );
}

export default App;
