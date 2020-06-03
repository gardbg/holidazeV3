import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

import Map from './map';

const HotelSpecificDumb = ({ establishmentName, imageUrl, id, description, maxGuests, price, establishmentEmail, googleLat, googleLong }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="row hotels">
                <div className="col-md-12">
                    <br />
                    <h2 className="text-center">{establishmentName}</h2>
                    <hr className="hr-main" />
                    <br />
                    <img className="img-responsive img__hotelSpec" src={imageUrl} alt={'hotel' + id} />
                </div>
                <br />
                <section className="Services__icons" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <img src="https://img.icons8.com/android/52/000000/wifi.png" alt="estb_photos" />
                                    <h3 className="h4">Free WiFi</h3>
                                    <p className="text-muted">Every Room Has Free WiFi</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <img src="https://img.icons8.com/pastel-glyph/52/000000/last-24-hours.png" alt="estb_photos" />
                                    <h3 className="h4">24/7 Reception</h3>
                                    <p className="text-muted">Our Reception Is Always Open</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <img src="https://img.icons8.com/pastel-glyph/52/000000/iron.png" alt="estb_photos" />
                                    <h3 className="h4">Daily Cleaning</h3>
                                    <p className="text-muted">Your Room Is Always Clean</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <img src="https://img.icons8.com/android/52/000000/no-smoking.png" alt="estb_photos" />
                                    <h3 className="h4">Non-Smoking</h3>
                                    <p className="text-muted">You Can Smoke Outside</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <hr />
            <br />
            <div className="row">
                <div className="col-md-6">
                    <h3>About</h3>
                    <p>{description}</p>
                    <hr />
                    <p><b>Email:</b> {establishmentEmail}</p>
                    <hr />
                    <p><b>Max guests:</b> {maxGuests}</p>
                    <hr />
                    <br />
                    <h3>Reviews</h3>
                    <p className="text-muted"><img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" /> 4.3 - based on 247 reviews</p>
                    <br />
                    <img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" /><img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" /><img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" /><img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" /><img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" />
                    <div className="animation-loading">
                        <div className="fiveStar-review fiveStar">52%</div>
                    </div>
                    <img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" /><img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" /><img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" /><img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" />
                    <div className="animation-loading">
                        <div className="fiveStar-review fourStar">18%</div>
                    </div>
                    <img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" /><img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" /><img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" />
                    <div className="animation-loading">
                        <div className="fiveStar-review threeStar">13%</div>
                    </div>
                    <img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" /><img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" />
                    <div className="animation-loading">
                        <div className="fiveStar-review twoStar">9%</div>
                    </div>
                    <img src="https://img.icons8.com/emoji/24/000000/star-emoji.png" alt="starIcon" />
                    <div className="animation-loading">
                        <div className="fiveStar-review oneStar">8%</div>
                    </div>
                    <hr />
                </div>
                <div className="col-md-6 booking__section text-center">
                    <Map
                        googleLong={googleLong}
                        googleLat={googleLat}
                    />
                    <br />
                    <div className="border__booking-form">
                        <h3>Check Availability</h3>
                        <hr className="hr-main" />
                        <br />
                        <label for="calendar" className="label-calendar">Check-In</label>
                        <input type="date" name="calendar" id="calendar"></input>
                        <label for="calendar" className="label-calendar">Check-Out</label>
                        <input type="date" name="calendar" id="calendar"></input>
                        <br />
                        <br />
                        <p className="underText__estb">1 night - 2 adults</p>
                        <h3>$ {price}</h3>
                        <hr className="hr-main" />
                        <p className="underText__estb">Including taxes & fees</p>
                        <button onClick={handleShow} className="btn-establishments">
                            Book now
                    </button>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Booking for {establishmentName}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form method="POST" action="http://localhost/holidazeV2/enquiry-success.php" className=" text-center enquiry__form">
                                <label for="establishment">Establishment:</label><br />
                                <input type="text" name="establishment" id="establishment" value={establishmentName} readonly /><br />
                                <label for="clientName">Full name:</label><br />
                                <input type="text" name="clientName" id="clientName" /><br />
                                <label for="email">Email Address:</label><br />
                                <input type="text" name="email" id="email" /><br />
                                <label for="adults">Adults:</label><br />
                                <input type="text" name="adults" id="adults" /><br />
                                <label for="children">Children:</label><br />
                                <input type="text" name="children" id="children" /><br />
                                <label for="notes">Notes:</label><br />
                                <input type="text" name="notes" id="notes" /><br />
                                <label for="checkin">Check-in:</label><br />
                                <input type="date" name="checkin" id="checkin" /><br />
                                <label for="checkout">Check-out:</label><br />
                                <input type="date" name="checkout" id="checkout" /><br />
                                <br />
                                <input type="submit" className="btn-establishments" />
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <br />
        </>
    )
}

export default HotelSpecificDumb;