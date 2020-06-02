import React, { useState } from 'react';

export default function Contact() {
  const [clientnameError, setclientnameError] = useState(true);
  const [emailError, setemailError] = useState(true);
  const [messageError, setmessageError] = useState(true);
  // eslint-disable-next-line
  const [name, setName] = useState(true);

  const handleChange = (input) => {
    let name = input.target.name;
    let value = input.target.value;
    // eslint-disable-next-line
    let emailPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    switch (name) {
      case 'clientName':
        value !== "" ? setclientnameError(false) : setclientnameError(true);
        break;
      case 'email':
        emailPattern.test(value) ? setemailError(false) : setemailError(true);
        break;
      case 'message':
        value !== "" ? setmessageError(false) : setmessageError(true);
        break;
      default:
        break;
    }
    setName(value)
  }

  return (
    <>
      <header className="contactPageHero">
        <div className="container h-100">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-uppercase text-white font-weight-bold">Contact Us.</h1>
              <hr className="hr-header" />
              <br />
            </div>
          </div>
        </div>
      </header>

      <div className="container container__contact">
        <br />
        <h3 className="">Send Us A Message.</h3>
        <hr />
        <div className="row row--contact align-items-center justify-content-center">
          <div className="col-md-8 column--contact">
            <form method="POST" action="http://localhost/holidazeV2/contact-success.php">
              <label for="clientName" className="label--contact text-left">Full name:<span className="span-contact">*</span></label> <br />
              <input type="text" name="clientName" id="clientName" className="input--contact" onChange={handleChange} /><br />
              <p className={(clientnameError) ? 'error' : 'error__hide'}>Please enter a firstName</p>
              <label for="email" className="label--contact text-left">Email Address:<span className="span-contact">*</span></label><br />
              <input type="text" name="email" id="email" className="input--contact" onChange={handleChange} /><br />
              <p className={(emailError) ? 'error' : 'error__hide'}>Please enter a valid email</p>
              <label for="message" className="label--contact text-left">Message:<span className="span-contact">*</span></label><br />
              <textarea name="message" id="message" rows="8" cols="80" className="input--contact" onChange={handleChange}></textarea><br />
              <p className={(messageError) ? 'error' : 'error__hide'}>Please enter a message</p>
              <div className="container__button-contact">
                <input type="submit" className="btn-contact" disabled={clientnameError || emailError || messageError} onClick={() => { alert('Your Message Has Been Sent!'); }} />
              </div>
            </form>
          </div>
          <div className="col-md-4 text-center column__contact-info">
            <h3>Holidaze.</h3>
            <hr className="hr-main" />
            <img src="https://img.icons8.com/android/32/000000/cottage.png" alt="Icon" />
            <br />
            <br />
            <h4>Riplegården, 32</h4>
            <p className="text-muted">5161, Laksevåg</p>
            <img src="https://img.icons8.com/android/32/000000/phone.png" alt="Icon" />
            <br />
            <br />
            <h4>+47 12345678</h4>
            <p className="text-muted">Mon to Fri 9am to 6pm</p>
            <img src="https://img.icons8.com/metro/32/000000/email.png" alt="Icon" />
            <br />
            <br />
            <h4>contact@holidaze.no</h4>
            <p className="text-muted">Send Us A Message At Any Time!</p>
          </div>
        </div>
      </div>
    </>
  );
}