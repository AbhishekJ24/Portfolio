"use client"
import React from 'react';
import { motion } from 'framer-motion';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from "@mui/icons-material/SendOutlined";
import { TypeAnimation } from 'react-type-animation';

const formVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const Contact = () => {
  return (
    <motion.div
      className="flex justify-center"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hover:border-gray-700 hover:border-2 backdrop-blur-2xl bg-opacity-80 shadow-lg rounded-xl px-8 py-6 pb-36 w-10/12 max-w-lg hover:shadow-2xl transition duration-300">
        <h2 className="msg-box-h font-bold mb-6"> <TypeAnimation sequence={['Send Me a Message', 250]} /></h2>
        <form id="messageForm" className="space-y-4">
          <TextField
            required
            fullWidth
            label="Your Superhero Name"
            variant="outlined"
            size="small"
            InputProps={{ className: 'inp-box' }}
            InputLabelProps={{ className: 'text-white' }}
            placeholder="Enter your superhero name"
          />
          <TextField
            required
            fullWidth
            label="Your Secret Email"
            variant="outlined"
            size="small"
            InputProps={{ className: 'inp-box' }}
            InputLabelProps={{ className: 'text-white' }}
            placeholder="Keep it secret, keep it safe!"
          />
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            label="Your Epic Message"
            variant="outlined"
            size="small"
            InputProps={{ className: 'inp-box' }}
            InputLabelProps={{ className: 'text-white' }}
            placeholder="Tell me your epic adventure!"
          />
          <Button variant="outlined" onClick={() => {
            alert('Thank You, power summoned successfully!!');
          }} endIcon={<SendIcon />}>
            Summon the Power
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
