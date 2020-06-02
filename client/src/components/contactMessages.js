import React from 'react';

const Messagedata = messages.map((data) => {
  return (
    <div className="container">
      <Card key={data.clientName}>
        <Card.Body>
          <Card.Title><img src="https://img.icons8.com/pastel-glyph/30/000000/person-male.png" />{data.clientName}</Card.Title>
          <Card.Title><img src="https://img.icons8.com/carbon-copy/30/000000/email.png" alt="icon" />{data.email}</Card.Title>
          <hr className="hr-messages" />
          <Card.Text>
            <br />
            {data.message}
          </Card.Text>
          <button className="btn-main btn-messages">Reply</button>
        </Card.Body>
      </Card>
    </div>
  )
}
)

export default Messagedata;