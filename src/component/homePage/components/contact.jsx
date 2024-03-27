import { Box } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <Box id='contactForm' sx={{py:2.9, backgroundSize:'cover',  boxSizing: 'content-box', backgroundRepeat:'no-repeat', backgroundImage:`url(https://img.freepik.com/premium-photo/vintage-telephone-receiver-wooden-table_172251-559.jpg)`}}>
      <Box maxWidth={600} mx='auto'>
        <h1 className="form-heading">Get in Touch </h1>
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xaygjgry"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="Name"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              placeholder="write your message..."
              required></textarea>
            <input className="rescue-btn" type="submit" value="Contact Us" />
          </form>
        </div>
        </Box>
      </Box>
  )
}

export default Contact
