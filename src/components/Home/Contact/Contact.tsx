import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./index.css";

function AppContact() {

  function sendEmail(e: any) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_p83ieqj', e.target, 'user_5KdWH0MXyGxP2ccaRFSLm')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    setTimeout(() => {
      e.target.reset();
    }, 1000);


  }
  const [show, setShow] = useState(false);
  return (
    <>
      <form
        className="flexing"
        onSubmit={sendEmail}
        style={{ marginTop: 100 }}
      >
        <Container>
          <Row className="flexing" >


            <input type="text" name="contact_number" placeholder="Name" style={{ borderRadius: ".5em" }} />



          </Row>
          <Row className="flexing" >

            <input type="text" name="name" placeholder="Email" style={{ borderRadius: ".5em" }} />

          </Row>
          <Row className="flexing" >

            <input type="text" name="subject" placeholder="Subject" style={{ borderRadius: ".5em" }} />

          </Row>
          <Row className="flexing" >


            <textarea name="message" placeholder="Message" style={{ borderRadius: ".5em" }} />
          </Row>
          <Row className="flexing" >
            <input type="submit" value="Send" style={{ borderRadius: ".5em" }} id="submit" />
          </Row>
        </Container>
      </form>


    </>
  );
}

export default AppContact;