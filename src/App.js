import './App.css';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm';
import React,{useState} from 'react';

function App() {
  const Handledarkmode=()=>{
  
    if(dark==="Enable Dark Mode"){
     setdark('Disable Dark Mode')
       setmystyle({
      backgroundColor:"secondary",btncolor: "primary"
     })
     document.body.style.backgroundColor='black'
     document.body.style.color= 'white'
    }
    else{
     setdark('Enable Dark Mode')
       setmystyle({
      backgroundColor:"light",btncolor:"dark"
     })
     document.body.style.backgroundColor='white'
     document.body.style.color = 'black'
    }
  }
  const[dark, setdark] = useState("Enable Dark Mode")
  const[mystyle,setmystyle]=useState({backgroundColor:"white",btncolor: "dark"})
  return (
  <>
   <Navbar title={"Text-Utility"} toggledarkmode={Handledarkmode} darkword={dark} style={mystyle}/>
   <TextForm style={mystyle}/>
  </>
  );
}

export default App;