import React from 'react'

export default function About(props) {
    //const [myStyle, setMyStyle] = useState({
       // color:'black', 
      //  backgroundColor : 'white'
        
   // })
   let myStyle = {
    color : props.Mode === 'dark'?'white':'black',
    backgroundColor : props.Mode === 'dark'?'rgb(70 70 70)':'white',
    
   }

  
 
    
      
  return (
    <div className='container' style={{color : props.Mode === 'dark'?'white':'black'}}>
        <h1 className='my-4'>About Us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" >
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Use of Text Utils
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>The text utils</strong> is designed to boost your productivity and make your life easier. The app can be extremely useful when posting or submitting to platforms which have limits imposed on number of characters, words or size.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        <strong>TextUtils </strong> is a simple web app that is created to help people with their everyday text editing needs. With features like converting text to uppercase or lowercase, removing extra spaces, and copying text to the clipboard, TextUtils is a helpful tool for anyone who works with text on a regular basis. I am a web developer named 'Hashir' and I developed this for convinience of people using React, Javascript, HTML and Bootstrap.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Supports DarkMode
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={myStyle}>
        <strong> Text Utils</strong>  supports feature of Dark Mode which improves visibility for users with low vision and those who are sensitive to bright light.
      </div>
     
      
    </div>
  </div>
</div>

    </div>
    
  )
}
