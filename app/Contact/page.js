"use client"
import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from "@mui/icons-material/SendSharp";
import { TypeAnimation } from 'react-type-animation';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import emailjs from 'emailjs-com';

const formVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const Contact = () => {
  const [showAlert, setShowAlert] = React.useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const serviceID = 'service_h8d3jw1';
    const templateID = 'template_j4igfal';
    const publicKey = 'onR9QGol5WfgHFG5R';
    setShowAlert(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      to_name: "Abhishek Joshi",
      from_email: formData.email,
      to_email: 'abhishekjoshiofficial24@gmail.com',
      message: formData.message,
    }, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <motion.div
      className="flex justify-center"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <div id="contact-box" className="shadow-2xl hover:shadow-xl rounded-xl px-8 py-6 pb-28 w-10/12 max-w-lg transition duration-300 text-white">
        <TypeAnimation className='msg-box-h' sequence={['Get in Touch', 100]} />
        <form id="messageForm" className="space-y-4" onSubmit={handleFormSubmit}>
          <TextField
            id='name'
            required
            fullWidth
            label="Name"
            variant="outlined"
            size="small"
            InputProps={{ className: 'inp-box', style: { color: 'white' } }}
            placeholder="Enter your name"
            InputLabelProps={{ style: { color: 'gray' } }}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            id="email"
            required
            fullWidth
            label="Email"
            variant="outlined"
            size="small"
            InputProps={{ className: 'inp-box', style: { color: 'white' } }}
            placeholder="Enter your email"
            InputLabelProps={{ style: { color: 'gray' } }}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            id="message"
            required
            fullWidth
            multiline
            rows={4}
            label="Message"
            variant="outlined"
            size="small"
            InputProps={{ className: 'inp-box', style: { color: 'white' } }}
            placeholder="Enter your message"
            InputLabelProps={{ style: { color: 'gray' } }}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button className='flex items-center gap-3 justify-center' type="submit" variant="outlined">
            Submit Request
            <SendIcon />
          </Button>
        </form>
        {showAlert && (
          <Alert className='flex mt-5' icon={<CheckIcon fontSize="inherit" />} severity="success">
            Thanks for contacting me!!
          </Alert>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
