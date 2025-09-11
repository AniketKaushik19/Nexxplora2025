import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    branch: '',
    year: '',
    section: '',
    eventname: ''
  });

  const { id, title } = useParams();

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      eventname: title
    }));
  }, [title]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData, eventname: title };

    try {
      const res = await axios.post('http://130.30.29.215:7000/api/events/register', payload);
      if (res.status === 200) {
        console.log("Submitted successfully");
        alert("Registration successful!");
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Error submitting form');
    }
  };

  return (
    <div className='mx-auto max-w-lg my-20 p-4 bg-white shadow-md rounded'>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <h2 className='font-bold text-black justify-center flex text-4xl'>{title}</h2>

        {/* Name */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2 text-black'
            placeholder='Enter your name'
          />
        </div>

        {/* Email */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>Email</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2 text-black'
            placeholder='you@example.com'
          />
        </div>

        {/* Mobile */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>Mobile Number</label>
          <input
            type='tel'
            name='mobile'
            value={formData.mobile}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2 text-black'
            placeholder='1234567890'
          />
        </div>

        {/* Branch */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>Branch</label>
          <select
            name='branch'
            value={formData.branch}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2 text-black'
          >
            <option value=''>Select branch</option>
            <option value='CSE'>Computer Science and Engineering</option>
            <option value='DS'>Data Science</option>
            <option value='AIML'>AIML</option>
            <option value='CE'>Civil Engineering</option>
            <option value='ME'>Mechanical Engineering</option>
            <option value='biotech'>Biotech</option>
            <option value='MBA'>MBA</option>
            <option value='IMBA'>IMBA</option>
          </select>
        </div>

        {/* Year */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>Year</label>
          <select
            name='year'
            value={formData.year}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2 text-black'
          >
            <option value=''>Select year</option>
            <option value='1'>1st Year</option>
            <option value='2'>2nd Year</option>
            <option value='3'>3rd Year</option>
            <option value='4'>4th Year</option>
          </select>
        </div>

        {/* Section */}
        <div>
          <label className='block text-sm font-medium text-gray-700'>Section</label>
          <select
            name='section'
            value={formData.section}
            onChange={handleChange}
            className='mt-1 block w-full border border-gray-300 rounded-md p-2 text-black'
          >
            <option value=''>Select section</option>
            <option value='A'>A</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
            <option value='D'>D</option>
          </select>
        </div>

        {/* Submit */}
        <div>
          <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;