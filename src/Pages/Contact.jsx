import React, { useState } from "react";

function Contact(){

  const [form, setForm] = useState({ name:"", email:"", message:"" });

  const handleChange = (e)=> {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = ()=> {
    alert(`Message sent by ${form.name}`);
  };

  return (
    <div 
      style={{
        padding:"70px 20px", 
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
      }}
    >

      <h1 style={{ fontSize:"2.5rem", marginBottom:"25px" }}>📩 Contact Me</h1>

      <form 
        onSubmit={submitForm}
        style={{
          background:"rgba(255,255,255,0.1)",
          backdropFilter:"blur(10px)",
          padding:"35px",
          width:"380px",
          maxWidth:"90%",
          borderRadius:"15px",
          display:"flex",
          flexDirection:"column",
          boxShadow:"0 0 20px rgba(0,0,0,0.2)"
        }}
      >
        
        <input 
          type="text"
          name="name" 
          placeholder="Your Name"
          onChange={handleChange}
          required
          style={{
            padding:"12px",
            marginBottom:"18px",
            borderRadius:"10px",
            border:"none",
            outline:"none",
            fontSize:"1rem",
            background:"rgba(255,255,255,0.8)"
          }}
        />

        <input 
          type="email"
          name="email" 
          placeholder="Your Email"
          onChange={handleChange}
          required
          style={{
            padding:"12px",
            marginBottom:"18px",
            borderRadius:"10px",
            border:"none",
            outline:"none",
            fontSize:"1rem",
            background:"rgba(255,255,255,0.8)"
          }}
        />

        <textarea 
          name="message" 
          placeholder="Your Message"
          onChange={handleChange}
          required
          rows="4"
          style={{
            padding:"12px",
            marginBottom:"20px",
            borderRadius:"10px",
            border:"none",
            outline:"none",
            fontSize:"1rem",
            background:"rgba(255,255,255,0.8)"
          }}
        />

        <button
          type="submit"
          style={{
            padding:"12px",
            borderRadius:"30px",
            fontSize:"1rem",
            fontWeight:"600",
            border:"none",
            cursor:"pointer",
            background:"linear-gradient(135deg, #5A00FF, #D800A6)",
            color:"white",
            boxShadow:"0 0 12px rgba(255,0,180,0.7)",
            transition:"0.3s"
          }}
        >
          Send Message 🚀
        </button>

      </form>
    </div>
  );
}

export default Contact;
