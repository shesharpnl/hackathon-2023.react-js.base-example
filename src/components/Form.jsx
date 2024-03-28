import React, { useState } from 'react';

function Form() {
  const [companySize, setCompanySize] = useState('');
  const [hasDedicatedResources, setHasDedicatedResources] = useState(false);
  const [collaborateWithOthers, setCollaborateWithOthers] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g., submit it to a server
    console.log({
      companySize,
      hasDedicatedResources,
      collaborateWithOthers
    });
    // You can also reset the form fields here
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          What is the size of your company?
          <input
            type="text"
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Do you have dedicated Diversity, Equality, and Inclusion (EDI) resources?
          <input
            type="checkbox"
            checked={hasDedicatedResources}
            onChange={(e) => setHasDedicatedResources(e.target.checked)} />
        </label>
      </div>
      <div>
        <label>
          Would you like to collaborate with other companies on EDI training?
          <input
            type="checkbox"
            checked={collaborateWithOthers}
            onChange={(e) => setCollaborateWithOthers(e.target.checked)} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default Form;
