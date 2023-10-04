import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase" , "success")
  }

  const handleLoClick=()=>{
     let newText = text.toLowerCase();
     setText(newText)
     props.showAlert("Converted to Lowercase", "success")
   }

   const handleClearClick=()=>{
    // console.log("Lowercase was clicked" + text)
     let newText = '';
     setText(newText)
     props.showAlert("Text Cleared", "success")
   }
const handlecopy = ()=>{
  var text = document.getElementById("myBox")
  text.select();
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("Text Copied to Clipboard", "success")
}
const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra Spaces Removed", "success")
}

  const handleOnChange=(event)=>{
   // console.log("On Change")
    setText(event.target.value)
  }
  const [text,setText] = useState('')
  //text= "new text"; // wrong way to change the state
  //setText("new text");// correct way to change the state
  return (
    <>
<div className="container" style={{color :props.Mode=== 'dark' ? 'white':'black'}}>
  <h1 className='mb-4'>{props.heading} </h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.Mode=== 'dark' ? 'grey':'white' , color:props.Mode=== 'dark' ? 'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}> Remove Extra Spaces</button>


</div>
<div className="container my-3" style={{color :props.Mode=== 'dark' ? 'white':'black'}}>
  <h2>Your Text Summary</h2>
  <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read</p>
  <h2>Preview</h2>
  <p>{text}</p>
    </div>
    </>
  )
}
