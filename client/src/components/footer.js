import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="sticky-bottom">
        <div className="container">
          <div className="row footer-content">
            <div className="col-md-6">
              <h3>About.</h3>
              <hr className="hr-header" />
              <p>A local tourism agency in Bergen. <br />Find hotels, B&Bs and guesthouses.</p>
            </div>
            <div className="col-md-6">
              <h3>Stay Connected.</h3>
              <hr className="hr-header" />
              <div className="icons__footer">
                <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="icon-footer" />
                <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="icon-footer" />
                <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="icon-footer" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;