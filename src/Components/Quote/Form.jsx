// src/components/LeadForm.jsx
import React, { useState } from "react";
import axios from "axios";

const LeadForm = () => {
  const [form, setForm] = useState({
    firstname: "",
    phone: "",
    email: "",
    city: "",
    budget: "",
    discription:"",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/v1/leads", form, {
        withCredentials: true
      });
      alert("Lead submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border shadow">
      <h2 className="text-2xl mb-4 font-semibold">Submit Your Info</h2>
      <input
        type="text"
        name="firstname"
        placeholder="Full Name"
        value={form.firstname}
        onChange={handleChange}
        className="block w-full mb-3 p-2 border"
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="block w-full mb-3 p-2 border"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="block w-full mb-3 p-2 border"
        required
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
        className="block w-full mb-3 p-2 border"
        required
      />
      <input
        type="text"
        name="budget"
        placeholder="Budget"
        value={form.budget}
        onChange={handleChange}
        className="block w-full mb-3 p-2 border"
      />
       <input
        type="text"
        name="discription"
        placeholder="Enter your Product details"
        value={form.discription}
        onChange={handleChange}
        className="block w-full mb-3 p-2 border"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default LeadForm;
