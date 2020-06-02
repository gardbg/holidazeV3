import React from 'react';

const EnquiriesAdmin = ({ clientName, email, checkin, checkout, adults, children, notes }) => {
    return (
        <>
            <div className="col-md-5 column__messages">
                <br />
                <h3><img src="https://img.icons8.com/ios-glyphs/26/000000/person-male.png" alt="Icon" /> {clientName}</h3>
                <br />
                <h3><img src="https://img.icons8.com/metro/26/000000/email.png" alt="Icon" /> {email}</h3>
                <br />
                <h3><img src="https://img.icons8.com/metro/26/000000/calendar.png" alt="Icon" /> Check-In: {checkin}</h3>
                <br />
                <h3><img src="https://img.icons8.com/metro/26/000000/calendar.png" alt="Icon" /> Check-Out: {checkout}</h3>
                <br />
                <h3><img src="https://img.icons8.com/ios-filled/26/000000/men-age-group-4.png" alt="Icon" /> Adults: {adults}</h3>
                <br />
                <h3><img src="https://img.icons8.com/material/26/000000/tummy-time.png" alt="Icon" /> Children: {children}</h3>
                <br />
                <h3><img src="https://img.icons8.com/ios-filled/26/000000/speaker-notes.png" alt="Icon" /> Notes: {notes}</h3>
                <br />
            </div>
        </>
    )
}

export default EnquiriesAdmin;