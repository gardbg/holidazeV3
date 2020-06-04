import React, { useState, useEffect } from 'react';

import Login from '../pages/Login';
import MessagesAdmin from '../components/messages';
import EnquiriesAdmin from '../components/enquiries';

import messages from '../contact.json';
import enquiries from '../enquiries.json';


export default function Admin() {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [allMessages, setallMessages] = useState([]);
    const [allEnquiries, setallEnquiries] = useState([])

    const updateLogin = () => {
        setisLoggedIn(true);
    }

    const logOut = () => {
        localStorage.clear();
        setisLoggedIn(false);
    }

    useEffect(() => {
        setallMessages(messages)
        setallEnquiries(enquiries)
    }, [])

    return (localStorage.getItem('username') === 'gard' && localStorage.getItem('password') === '123456' && isLoggedIn) ?
        (
            <>
                <button type="button" className="btn-logOut" onClick={logOut}>Log out</button>
                <div className="container">
                    <br />
                    <div className="row">
                        <div className="col-md-4">
                            <a href="#admin-messages"><h4 className="navigation__admin">Messages</h4></a>
                        </div>
                        <div className="col-md-4">
                            <a href="#admin-enquiries"><h4 className="navigation__admin">Enquiries</h4></a>
                        </div>
                        <div className="col-md-4">
                            <a href="#admin-establishment"><h4 className="navigation__admin">Add Establishment</h4></a>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <br />
                    <h2 className="h2-header" id="admin-messages"> Messages <img src="https://img.icons8.com/windows/62/000000/chat-messages--v1.png" alt="icon" /></h2>
                    <br />
                    <div className="row">
                        {
                            allMessages.map((data) => {
                                return (
                                    <MessagesAdmin key={data.clientName}
                                        clientName={data.clientName}
                                        email={data.email}
                                        message={data.message}
                                    />
                                )
                            })
                        }
                    </div>
                    <br />
                    <hr />

                    <br />
                    <h2 className="h2-header" id="admin-enquiries"> Enquiries <img src="https://img.icons8.com/dotty/62/000000/reservation-2.png" alt="icon" /></h2>
                    <br />
                    <div className="row row__enquiries">
                        {
                            allEnquiries.map((data) => {
                                return (
                                    <EnquiriesAdmin key={data.clientName}
                                        clientName={data.clientName}
                                        email={data.email}
                                        checkin={data.checkin}
                                        checkout={data.checkout}
                                        adults={data.adults}
                                        children={data.children}
                                        notes={data.notes}
                                    />
                                )
                            })
                        }
                    </div>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <div className="row row__addEstb">
                        <h2 id="admin-establishment"> Add A New Establishment <img src="https://img.icons8.com/wired/62/000000/building.png" alt="icon" /></h2>
                        <br />
                        <div className="col-md-12 column__addEstb">
                            <form method="POST" action="http://localhost/holidazeV2/add-establishments-success.php">
                                <label for="establishmentName">Establishment Name</label><br />
                                <input type="text" name="establishmentName" id="establishmentName" className="input__addEstb" /><br />
                                <label for="establishmentEmail">Establishment Email</label><br />
                                <input type="text" name="establishmentEmail" id="establishmentEmail" className="input__addEstb" /><br />
                                <label for="imageUrl">Image URL</label><br />
                                <input type="text" name="imageUrl" id="imageUrl" className="input__addEstb" /><br />
                                <label for="price">Price per person per night ($)</label><br />
                                <input type="number" name="price" id="price" className="input__addEstb" /><br />
                                <label for="maxGuests">Max guests</label><br />
                                <input type="number" name="maxGuests" id="maxGuests" className="input__addEstb" /><br />
                                <label for="googleLat">Google Coordinates Latitude</label><br />
                                <input type="text" name="googleLat" id="googleLat" className="input__addEstb" /><br />
                                <label for="googleLong">Google Coordinates Longitude</label><br />
                                <input type="text" name="googleLong" id="googleLong" className="input__addEstb" /><br />
                                <label for="description">Description</label><br />
                                <input type="text" name="description" id="description" className="input__addEstb" /><br />
                                <label for="selfCatering">Self-catering</label><br />
                                <label for="true">True</label>
                                <input type="radio" id="true" name="selfCatering" value="true" className="input__selfcat" />
                                <label for="false">False</label>
                                <input type="radio" id="false" name="selfCatering" value="false" className="input__selfcat" /><br />
                                <label for="id">ID</label><br />
                                <input type="number" name="id" id="id" className="input__addEstb" /><br />
                                <br />
                                <input type="submit" className="btn-establishments" />
                            </form>
                        </div>
                    </div>
                </div>
            </>
        ) :
        (
            <Login updateLoginStatus={updateLogin} />
        )
}