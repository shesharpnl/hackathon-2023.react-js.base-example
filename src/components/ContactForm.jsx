import { useState } from "react";

// ContactForm component 
export default function ContactForm() {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
{/* Add relevant onSubmit logic */}
  function handleSubmit(e) {
    e.preventDefault()
    setName("")
    setEmail("")
    setMessage("")
  }
  return (
    <>

        <form onSubmit={handleSubmit}> 
            <div className="form-align">
            <h3>Contact us!</h3>
            <label htmlFor="name" >
                Name:
                <input className="input-field" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required/>
            </label>
            <br />
            <label htmlFor="email">
                Email:
                <input className="input-field" type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <br />
            <label htmlFor="message">
                Message:
                <input className="message-input" type="text" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
            </label>
            <br />
            <button>Submit</button>
            </div>
        </form>
    </>
  );
}



