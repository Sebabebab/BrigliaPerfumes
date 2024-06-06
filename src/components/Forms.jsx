import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './forms.css';

function Forms() {
  const [state, handleSubmit] = useForm("xnqekwlw");
  
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  
  return (
    <div className="forms-container">
        <form onSubmit={handleSubmit} className="forms-form">
            <h1>Contact Us</h1>
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                type="email" 
                name="email"
                required
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                required
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    </div>
  );
}

export default Forms;
