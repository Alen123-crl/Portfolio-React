import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function Home({ name, role, bio, img }) {   
  return (
    <div style={{ marginTop: "80px", padding: "50px", transition: "0.3s ease" }}>

      <Box sx={{ width: "100%" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="center"
        >

          <div style={{ textAlign:"left", maxWidth:"400px" }}>
            <h1 style={{ fontSize:"3rem", fontWeight:"700" }}>
              👋 Hello! I'm <span style={{ color:"#ff0099" }}>{name}</span>
            </h1>

            <h2 style={{ fontSize:"2rem", fontWeight:"600", color:"#00E1FF" }}>
              {role}
            </h2>

            <p style={{ fontSize:"1.1rem", opacity:"0.9", lineHeight:"1.7", maxWidth:"550px" }}>
              {bio}
            </p>

       <a href="/ALEN_B_KOSHY_resume%20(9).pdf" download>
  <Button
    variant="contained"
    sx={{
      background: "linear-gradient(135deg, #5A00FF, #D800A6)",
      mt: 3,
      padding: "12px 35px",
      borderRadius: "30px",
      color: "white",
      fontWeight: "bold",
      textTransform: "none",
      "&:hover": { transform: "scale(1.06)" }
    }}
  >
     Download CV
  </Button>
</a>

          </div>

     
          <div>
            <img
              src={img}
              alt="developer"
              style={{
                width:"600px", maxWidth:"100%",
                filter:"drop-shadow(0 0 25px rgba(0,0,0,0.3))",
                borderRadius:"20px"
              }}
            />
          </div>

        </Stack>
      </Box>

<section
  style={{
    marginTop: "120px",
    padding: "40px 20px",
    textAlign: "center",
    animation: "fadeInUp 1.2s ease"
  }}
>
  <h1 style={{ fontSize: "2.8rem", fontWeight: "700", marginBottom: "15px" }}>
   About Me
  </h1>

 <p
  style={{
    fontSize: "1.15rem",
    maxWidth: "850px",
    margin: "auto",
    lineHeight: "1.8",
    opacity: 0.9,
    textAlign: "center"
  }}
>
  I am a passionate <b>MERN Stack Developer</b> who loves transforming ideas into 
  beautiful, scalable and meaningful web applications.  
  I enjoy building smooth UI/UX, working with real-time features, and exploring 
  modern tools that make development faster and smarter.

  <br /><br />

 I specialize in —  
  <b>React, Node.js, Express, MongoDB,JavaScript, HTML, CSS, Bootstrap, MUI</b>

  <br /><br />

  I believe in continuous growth — every project I build teaches me something new.  
  I aim to create applications that not only work, but make people smile when they use them.  
  <br/>
   Always learning | Always improving | Always building
</p>

</section>

<section
  style={{
    marginTop: "80px",
    padding: "40px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "20px",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center"
  }}
>
  <h2 style={{ fontSize: "2.4rem", marginBottom: "25px" }}>Skills & Technologies</h2>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "15px"
    }}
  >
    {[ "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript",
      "HTML", "CSS", "Bootstrap", "Git & GitHub", "REST APIs",
      "Responsive Web Design"
    ].map((skill, index) => (
      <span
        key={index}
        style={{
          padding: "12px 22px",
          borderRadius: "30px",
          background: "linear-gradient(135deg,#6a0dad,#ff0080)",
          color: "white",
          fontWeight: "bold",
          boxShadow: "0 0 8px rgba(255,0,150,0.4)",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        {skill}
      </span>
    ))}
  </div>
</section>


    </div>
  );
}

export default Home;
