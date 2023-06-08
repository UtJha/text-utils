// react function based component by rfc


// useState is a hook in react, there are many more 
import React, {useState} from "react";

// we use useState to save the state of a variable 
// in react js we cannot change the value of a variable simply
// the value is stored in the first argument and the the updated value will be stored in the next argument in thisn case 


export default function Form(props) {
  // this fn does take the input when the button is clicked, and passes it to the function to Convert, and the text variable is updated 
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleDnClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  // onChange is required because without it we will not be able to type on the text area 
  // here the event is said to take the value and pass it to the variable maybe????? 
  const handelOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value)
  }


  const [text, setText] = useState('');
  // here the the input will be assibned to text 
  // the updated value of text wil be given to setText 
  // text = ' wrong way to update the value of the variable '
  // useText = 'Right way to update the value tof the variable text'
  // value can be change using the given function 

  return (
    <>
      <div className="mb-3">
        <h1>{props.text}</h1>
        <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="10"></textarea>
      </div>
      <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2">Convert to UPPERCASE</button>
      <button type="button" onClick={handleDnClick} className="btn btn-primary mx-2">Convert to lowercase</button>
      <div className="container my-3">
        <h2>Your text summary</h2>
        {/* here we are calculating no. of words in the text given also calculating time to be taken to read the entire text  */}
        <p>{text.split(" ").length}</p>
        <p>{0.08 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
