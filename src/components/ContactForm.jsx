import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_wtd596r', 
        'template_nf9pg31', 
        formData,
        'iUbE-_kYT34gbSXeE' 
      )
      .then(
        (response) => {
          toast.success('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className='contact-form'>
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button className='secondary-btn' type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;