import React from 'react'
const Contact = () => {
  return ( 
    <div class="container  my-5 card" >
    <h1>Contact Us</h1>
    <div class="card-body">
    <div class="input-group">
  <span class="input-group-text bg-success text-light">First and last name</span>
  <input type="text" aria-label="First name" class="form-control"/>
  <input type="text" aria-label="Last name" class="form-control"/>
</div>
      
<div class="input-group mb-3 my-3">
  <input type="text" class="form-control" placeholder="Recipient's email-id" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text bg-success text-light" id="basic-addon2">example@gmail.com</span>
</div>
<div class="form-floating my-3">
  <textarea class="form-control" rows="5" cols="50"  placeholder="Leave a Queries here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Queries</label>
</div>
<div class="form-floating my-3">
  <textarea class="form-control"  rows="5" cols="50" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>

      <a href="#" class="btn btn-success my-3">Send</a>
    </div>
  </div>
  )
}

export default Contact
