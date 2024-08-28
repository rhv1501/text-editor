import React ,{useState}from 'react'
// import {Handledarkmode} from './componenets/Navbar.js'
export default function TextForm(props) {
    let Word=0;
    const handleupcase=()=>{
        setText(Text.toUpperCase())
    }
    const handleLowcase=()=>{
        setText(Text.toLowerCase())
    }
    const handletextareachange=(event)=>{
        setText(event.target.value)
    }
    const handlecapitalize=()=>{
        setText(Text.charAt(0).toUpperCase() + Text.slice(1))
    }
    const handleclipboard=()=>{
        navigator.clipboard.writeText(Text);
    }
    const [Text, setText] = useState('')
    if (Text.charAt(0)==='') {
        Word=Text.split(' ').length-1
    }
    else{
        Word=Text.split(' ').length
    }
  return (
    <>
    <div className='m-3'>
    <textarea className="form-control"value={Text} rows="8" onChange={handletextareachange}></textarea>
    </div>
    <div className='m-3'>
    <button className="btn btn-primary m-3"onClick={handleupcase}>To UpperCase</button>
    <button className="btn btn-primary m-3"onClick={handleLowcase}>To LowerCase</button>
    <button className="btn btn-primary m-3"onClick={handlecapitalize}>To Capitalize</button>
    <button className="btn btn-primary m-3"onClick={handleclipboard}>Copy to clipboard</button>
    </div>
    <div className='m-3'>
        <h1>Your Text Summary</h1>
        <p>{Text.length} Letters,<span className='m-1 '>{Word} Words</span></p>
    </div>
    <div>
    <h1 className='m-3'>Preview of your converted Text</h1>
    <p className='m-3 .d-flex'>{Text}</p>
    </div>
    </>
  )
}
