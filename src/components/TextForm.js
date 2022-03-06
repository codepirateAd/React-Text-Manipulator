import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');  // here text is a state i.e which re renders and changes its value

    const handleUpClick = () => {
        const val = text.toUpperCase();
        setText(val);
        props.showAlert("Converted to Upper Case","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleLowClick = () => {
        const val = text.toLowerCase();
        setText(val);
        props.showAlert("Converted to Lower Case","success");

    }
  return (
    <div>
        <div className='container'  style={{color: props.mode==='dark'?'white':'#2B2D2F'}}>
        <div className="mb-3">
        {/* its a prop  i.e passed as argument outside of the file*/}
          <label htmlFor="myBox" className={`form-label`}><h1>{props.heading}</h1></label>  
          <textarea className="form-control" id="myBox" rows="8" value={text} style={{backgroundColor: props.mode==='dark'?'#2B2D2F':'white', color: props.mode==='dark'?'white':'#2B2D2F'}} onChange={handleOnChange}></textarea>
        </div>
            <button className="btn btn-primary mx-3 my-1" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-3 my-1" onClick={handleLowClick}>Convert to Lower case</button>
        </div>
        <div className="container my-3 my-3" style={{color: props.mode==='dark'?'white':'#2B2D2F'}}  >
            <h3>Your text summary</h3>
            <p>{text}</p>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
        </div>
    </div>
  )
}
