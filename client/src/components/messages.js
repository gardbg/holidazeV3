import React from 'react';

const MessagesAdmin = ({ clientName, message, email }) => {
    return (
        <>
            <div className="col-md-5 column__messages">
                <br />
                <h3><img src="https://img.icons8.com/ios-glyphs/26/000000/person-male.png" alt="Icon" /> {clientName}</h3>
                <h3><img src="https://img.icons8.com/metro/26/000000/email.png" alt="Icon" /> {email}</h3>
                <hr />
                <p>{message}</p>
                <button className="btn-establishments">Reply</button>
                <br />
                <br />
            </div>
        </>
    )
}

export default MessagesAdmin;