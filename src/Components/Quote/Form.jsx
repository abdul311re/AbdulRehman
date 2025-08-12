// src/components/LeadForm.jsx
import React, { useState } from "react";
import { POST } from "../../apicontroller/apicontroller";

// Define initial form values once
const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  budget: "",
  discription: "",
};

const LeadForm = ({ formRef, setIsSubmitted }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await POST("leads", form)
      setForm(initialForm);       // Reset the form
      setIsSubmitted(true);
      setTimeout(() => {
        setForm(initialForm);     // Reset again after delay (optional)
        setIsSubmitted(false);    // Reset UI flags
      }, 400);
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="max-w-md mx-auto w-[78%] p-4">
      <h2 className="text-3xl mb-4 font-semibold">
        Book A Free <span className="text-purple font-semibold">Consultation</span>
      </h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={form.fullName}
        onChange={handleChange}
        className="block w-full mb-3 pl-1 pr-2 pt-2 pb-1 border-b border-black focus:outline-none focus:border-b-2"
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="block w-full mb-3 pl-1 pr-2 pt-2 pb-1 border-b border-black focus:outline-none focus:border-b-2"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="block w-full mb-3 pl-1 pr-2 pt-2 pb-1 border-b border-black focus:outline-none focus:border-b-2"
        required
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={form.city}
        onChange={handleChange}
        className="block w-full mb-3 pl-1 pr-2 pt-2 pb-1 border-b border-black focus:outline-none focus:border-b-2"
        required
      />

      <input
        type="text"
        name="budget"
        placeholder="Budget"
        value={form.budget}
        onChange={handleChange}
        className="block w-full mb-3 pl-1 pr-2 pt-2 pb-1 border-b border-black focus:outline-none focus:border-b-2"
      />

      <input
        type="text"
        name="discription"
        placeholder="Enter your Product details"
        value={form.discription}
        onChange={handleChange}
        className="block w-full mb-3 pl-1 pr-2 pt-2 pb-1 border-b border-black focus:outline-none focus:border-b-2"
      />

      <button
        type="submit"
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default LeadForm;
