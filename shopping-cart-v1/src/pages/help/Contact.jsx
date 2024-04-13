import React from "react"
export default function Contact() {
  const [submitted , setSubmitted] = React.useState(false)
  function handleSubmit(e){
    e.preventDefault()
    setSubmitted(true)
  }
  return (
    submitted ? <div><h1 className="received">We have Received your enquiry!</h1></div> :
    <div className='contact'>
      <h3>Contact Us</h3>
      <form>
        <label>
          <span>Your Email:</span>
          <input
            type='email'
            name='email'
            required
          />
        </label>
        <label>
          <span>Your Message:</span>
          <textarea
            name='message'
            required
          ></textarea>
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
