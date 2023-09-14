
import React, { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
//import {
  //BrowserRouter as Router,
  //Switch,
 // Route
//} from "react-router-dom";





function App() {
  const [Mode, setMode] = useState('primary');//whether enabled or not
  const [alert , setAlert] = useState(null);

  const showAlert= (message, type)=>{
     setAlert({
      msg : message,
      type : type    
     })

     setTimeout(() =>{
      setAlert(null);
      }   ,3000);
  }
  
    
 const toggleMode = ()=>{
  if(Mode === 'primary'){
  setMode('dark');
  document.body.style.backgroundColor= '#2d2d2d'
  showAlert("Dark Mode Enabled" , "success");
  document.title = 'Text Utils - Dark Mode';
 }
 else {
  setMode('primary');
  document.body.style.backgroundColor= '#cdd9ec'
  showAlert("Light Mode Enabled" , "success");
  document.title = 'Text Utils - Light Mode';
}
 }

  return (
  <>
 {/*<Navbar title = "Textutils" aboutText ="About Us" />*/}
 {/*<Navbar/>*/}
{/*<Router>*/}
  <Navbar title = "TextUtils" Mode= {Mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
 <div className="container my-3">
 {/*<Switch>*/}
          {/*<Route  exact path="/about">*/}
            {/*<About  Mode= {Mode}/>*/}
         {/* </Route>*/}
          {/*<Route exact path="/">*/}
          <TextForm showAlert={showAlert} heading="TextUtils - Word counter" Mode= {Mode}/>
         {/* </Route>*/}
       {/* </Switch>*/}
        </div>
       {/* </Router> */}    
          
</>
  
  );
}

export default App;



