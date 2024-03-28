import { useState } from "react";

// ContactForm component
export default function ContactForm() {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  {
    /* Add relevant onSubmit logic */
  }
  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="sign-up">Sign up form!</h3>
        <label htmlFor="name">
          What is the size of your company?
          {/* <input className="input-field" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required/> */}
          <div className="buttons-container">
            <button className="grid-buttons"> &lt; 10 people</button>
            <button className="grid-buttons"> &lt; 500 people</button>
            <button className="grid-buttons"> &gt; 500 people</button>
          </div>
        </label>
        <br />
        <label htmlFor="email">
          Do you have dedicated Diversity, Equality, and Inclusion (EDI)
          resources?
          <div className="buttons-container">
            <button className="grid-buttons"> No support</button>
            <button className="grid-buttons"> Some support</button>
            <button className="grid-buttons"> Large support</button>
          </div>
        </label>
        <br />
        <label htmlFor="email">
          Would you like to collaborate with other companies on EDI training?
          <div className="buttons-container">
            <button className="grid-buttons-"> Yes </button>
            <button className="grid-buttons"> No </button>
            <button className="grid-buttons"> Maybe </button>
          </div>
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
