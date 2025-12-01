import React, { useState, useEffect } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if(dark){
      document.body.classList.add("dark-mode");
    }else{
      document.body.classList.remove("dark-mode");
    }
  }, [dark]);

  return (
    <button 
      onClick={() => setDark(!dark)} 
      style={{
        padding:"8px 15px",
        borderRadius:"20px",
        border:"none",
        cursor:"pointer",
        background: dark ? "#fff" : "#111",
        color: dark ? "#111" : "#fff",
        fontWeight:"bold"
      }}
    >
      {dark ? "Light Mode ☀" : "Dark Mode 🌙"}
    </button>
  );
}

export default ThemeToggle;
