"use client"; 

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center px-8 py-3"
      style={{
        background: "#000000", 
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.3)", 
        borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <Link
        className="text-white font-bold"
        href={"/"}
        style={{
          fontSize: "26px", 
          letterSpacing: "2px", 
          transition: "color 0.3s, transform 0.3s", 
        }}
        onMouseOver={(e) => {
          e.target.style.color = "#ffeb3b"; 
          e.target.style.transform = "scale(1.1)"; 
        }}
        onMouseOut={(e) => {
          e.target.style.color = "white"; 
          e.target.style.transform = "scale(1)"; 
        }}
      >
        ALPHA
      </Link>
      <Link
        className="p-2"
        href={"/addTopic"}
        style={{
          backgroundColor: "#ffffff",
          color: "#000000",
          fontWeight: "600", 
          padding: "10px 16px", 
          borderRadius: "12px", 
          transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s", 
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "#000000";
          e.target.style.color = "#ffffff"; 
          e.target.style.boxShadow = "0 6px 16px rgba(255, 255, 255, 0.2)"; 
          e.target.style.transform = "scale(1.05)"; 
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "#ffffff"; 
          e.target.style.color = "#000000"; 
          e.target.style.boxShadow = "none"; 
          e.target.style.transform = "scale(1)"; 
        }}
      >
        Add Topic
      </Link>
    </nav>
  );
}
