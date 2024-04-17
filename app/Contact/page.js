"use client"
import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from "@mui/icons-material/SendOutlined";
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
    },publicKey)
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
      <div className="hover:border-gray-700 border-2 backdrop-blur-2xl bg-opacity-80 shadow-lg rounded-xl px-8 py-6 pb-36 w-10/12 max-w-lg hover:shadow-2xl transition duration-300 text-white">
        <h2 className="msg-box-h font-bold mb-6"> <TypeAnimation sequence={['Send Me a Message', 250]} /></h2>
        <form id="messageForm" className="space-y-4" onSubmit={handleFormSubmit}>
          <TextField
            id='name'
            required
            fullWidth
            label="Your Superhero Name"
            variant="outlined"
            size="small"
            InputProps={{ className: 'inp-box', style: { color: 'white' } }}
            placeholder="Enter your superhero name"
            InputLabelProps={{ style: { color: 'gray' } }}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            id="email"
            required
            fullWidth
            label="Your Secret Email"
            variant="outlined"
            size="small"
            InputProps={{ className: 'inp-box', style: { color: 'white' } }}
            placeholder="Keep it secret, keep it safe!"
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
            label="Your Epic Message"
            variant="outlined"
            size="small"
            InputProps={{ className: 'inp-box', style: { color: 'white' } }}
            placeholder="Tell me your epic adventure!"
            InputLabelProps={{ style: { color: 'gray' } }}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit" variant="outlined" endIcon={<SendIcon />}>
            Summon the Power
          </Button>
        </form>
        {showAlert && (
          <Alert className='flex mt-5' icon={<CheckIcon fontSize="inherit" />} severity="success">
            Thanks for summoning thy powers fruitfully!!
          </Alert>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;
